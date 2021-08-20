<template lang="pug">
div.description
  | {{t('desc')}}
ul.list
  li.item(v-for="(item, index) in items")
    div.label {{ t(`lable_one${index+1}`) }}
    div.value {{itemsData[item.key]}}
table.table(ce)
  thead
    tr.tr
      th.td(v-for="(column, index) in tableColumns")
        | {{ t(`lable_two${index+1}`) }}
  tbody
    tr.tr(v-for="row in tableData")
      td.td(v-for="column in tableColumns")
        | {{row[column.key]}}
div.pagination-container
  Pagination(v-if='!isWin' :total="total", :onChangePageSize="handleChangePageSize",:onJumpPage="handleJump")
  el-pagination.pagination(
    v-else
    @size-change="handleChangePageSize1", 
    @current-change="handleCurrentChange", 
    :currentPage="currentPage", 
    :page-sizes="[5, 10, 20, 30, 50]",
    :page-size="PageSize",
    small
    popper-class='pagination'
    :disabled = 'PaDisabled'
    layout="total, sizes, prev, pager, next, jumper",
    :total="total"
  )
</template>
<style lang="less" scoped>
.pagination-container {
  width: 1281px;
  padding: 12px;
  background: white;
  margin: 2px auto 40px;
  display: flex;
  justify-content: flex-end;
  border-radius: 4px;
}
.table {
  width: 1281px;
  margin: 40px auto 0;
  min-height: 100px;
  border: 0;
  border-spacing: 0 4px;
  font-family: PingFang SC, sans-serif;

  text-align: left;
  thead .td {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  .tr {
    border-radius: 6px;
    background: white;
    box-shadow: 0px 0px 20px rgba(153, 146, 185, 0.06);
    border-spacing: 4px;
  }
  .td {
    max-width: 250px;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 1.41;
    color: #666666;
    text-align: center;
    padding: 16px 5px;
    box-shadow: 0px 0px 20px rgba(153, 146, 185, 0.06);
    &:first-child {
      border-radius: 6px 0 0 6px;
      padding-left: 16px;
    }
    &:last-child {
      border-radius: 0 6px 6px 0;
      padding-right: 16px;
    }
  }
}
.list {
  display: flex;
  width: 1281px;
  justify-content: space-between;
  margin: 32px auto 0;
}
.item {
  width: 189px;
  min-height: 110px;
  background: white;
  border-radius: 12px;
  font-family: PingFang SC, sans-serif;
  text-align: center;
  color: #051174;
  padding: 20px 0 26px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .label {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    min-height: 40px;
    opacity: 0.4;
    // margin-bottom: 6px;
  }
  .value {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
  }
}
.description {
  width: 744px;
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  margin: 24px auto 0;
  color: #666666;
}
@media screen and (max-width: 750px){
  .description{
    line-height: 1.5;
  }
  .item {
    .label {
      line-height: 1.1;
      word-break: break-all;
    }
    .value{
      line-height: 1.1;
      word-break: break-all;
    }
  }
  .table {
    thead .td {
      line-height: 1.2;
      word-break: break-all;
    }
    .td {
      line-height: 1.41;
    }
  }
}
</style>
<script lang="ts">
import { defineComponent, computed, onMounted, reactive, ref } from "vue";
import Pagination from "../components/pagination.vue";
import BigNumber from "bignumber.js";
import { getRewardInfo, getList, RewardInfoType, ItemType, getStakerInfo, compare, getNumber } from "../apis";
import { useI18n } from "vue-i18n";
export default defineComponent({
  components: {
    Pagination
  },
  setup() {
    const { t } = useI18n();
    const currentPage = ref(1)
    const PageSize = ref(50)
    const PaDisabled = ref(true)
    const isWin = computed(()=>{
      if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
        return false
      }else{
        return true
      }
    })
    const rewardsItems: Array<{ key: keyof RewardInfoType; label: string }> = [
      { key: "totalCalcPoints", label: "总算力值" },
      { key: "totalGpuNum", label: "GPU总数" },
      { key: "totalStaker", label: "算工总数" },
      { key: "Rent", label: "租用率" },
      { key: "totalRentFee", label: "DBC租金数" },
      { key: "totalStake", label: "算机DBC质押数" },
      // { key: "totalStakeAll", label: "算机DBC质押总数" }
    ];

    const columns: Array<{ key: keyof ItemType; label: string }> = [
      {
        key: "index",
        label: "竞赛排名"
      },
      {
        key: "name",
        label: "算工名称"
      },
      {
        key: "calcPoints",
        label: "算力值"
      },
      {
        key: "totalGpuNum",
        label: "GPU数量"
      },
      {
        key: "rentRate",
        label: "租用率"
      },
      {
        key: "totalRentFee",
        label: "租金数"
      },
      {
        key: "unlockReward",
        label: "已解锁奖励数"
      },
      {
        key: "totalReward",
        label: "奖励总数"
      }
    ];
    const set = ( serverList: Array<ItemType>, reactiveList: Array<ItemType> ) => {
      reactiveList.splice(0, reactiveList.length);
      // todo
      serverList.forEach(item => {
        reactiveList.push(item);
      });
    };
    let itemsData = reactive<RewardInfoType>({
      totalCalcPoints: "0",
      totalGpuNum: "0",
      totalStake: "0",
      totalStaker: "0",
      Rent: "0",
      // totalStakeAll: "loading",
      totalRentFee: "0"
    });
    let tableData = reactive<Array<ItemType>>([]);
    let total = ref(0);
    const getnum = (num: Number):string => {
      if( num>=100 ){
        return '100'
      }
      let num1 = String(num);
      return num1.substring(0,num1.indexOf(".")+3);
    }
    const getnum1 = (num: string):string => {
      const num1 = new BigNumber(Number(num)/ Math.pow(10,15)).toFormat()
      return num1.substring(0,num1.indexOf(".")+5);
    }
    onMounted(async () => {
      const rewardInfo = await getRewardInfo();
      rewardInfo.Rent = '0'
      Object.keys(itemsData).forEach(k => {
        const key = k as keyof RewardInfoType;
        let v = rewardInfo[key];
        if (typeof v !== "undefined") {
          if(key === 'Rent'){
            v = Number(rewardInfo['totalRentedGpu']) != 0 ?(getnum(Number(rewardInfo['totalRentedGpu'])/Number(rewardInfo['totalGpuNum'])*100)+'%') : '0'
          }else if( key === 'totalStake' || key === 'totalStakeAll' || key === 'totalRentFee'){
            v = new BigNumber(Math.round(Number(v)/ Math.pow(10,15))).toFormat();
          }else if(key === "totalCalcPoints"){
            v = new BigNumber(Number(v) / 100).toFormat();
          }else{
            v = new BigNumber(v).toFormat();
          }
        }
        itemsData[key] = typeof v !== "undefined" ? v : "0";
      });
      
      await getNumber().then( res => {
        total.value = res
      })
      
      const { list } = await getList();
      set(list, tableData);
      // total.value = remoteTotal;
      setTimeout( async()=>{
        const data = await getStakerInfo(list)
        list.map(
          (s,i) => {
            s.totalReward = getnum1(String(data[i]))
          }
        )
        set(list, tableData);
        PaDisabled.value = false
      }, 2000)
    });

    return {
      items: rewardsItems,
      itemsData,
      tableColumns: columns,
      tableData,
      total,
      currentPage,
      PageSize,
      t,
      isWin,
      PaDisabled,
      handleChangePageSize1: async (num: number) => {
        PaDisabled.value = true
        PageSize.value = num
        // await getNumber().then( res => {
        //   total.value = res
        // })
        if(Math.ceil(total.value / num) > currentPage.value ){
          const { list } = await getList(currentPage.value, PageSize.value);
          set(list, tableData);
          // setTimeout( async()=>{
          const data = await getStakerInfo(list)
          list.map(
            (s,i) => {
              s.totalReward = getnum1(String(data[i]))
            }
          )
          set(list, tableData);
          PaDisabled.value = false
          // }, 2000)
        }else{
          PaDisabled.value = false
        }
      },
      handleChangePageSize: async (num: number) => {
        await getNumber().then( res => {
          total.value = res
        })
        const { list } = await getList(1, num);
        set(list, tableData);
        setTimeout( async()=>{
          const data = await getStakerInfo(list)
          list.map(
            (s,i) => {
              s.totalReward = getnum1(String(data[i]))
            }
          )
          set(list, tableData);
        }, 2000)
      },
      handleCurrentChange: async (num: number) => {
        PaDisabled.value = true
        currentPage.value = num
        const { list } = await getList(currentPage.value, PageSize.value);
        set(list, tableData);
        // setTimeout( async()=>{
          const data = await getStakerInfo(list)
          list.map(
            (s,i) => {
              s.totalReward = getnum1(String(data[i]))
            }
          )
          set(list, tableData);
          PaDisabled.value = false
        // }, 2000)
      },
      handleJump: async (num: number, size: number) => {
        const { list } = await getList(num, size);
        set(list, tableData);
        setTimeout( async()=>{
          const data = await getStakerInfo(list)
          list.map(
            (s,i) => {
              s.totalReward = getnum1(String(data[i]))
            }
          )
          set(list, tableData);
        }, 2000)
      }
    };
  }
});
</script>
