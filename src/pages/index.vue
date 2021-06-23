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
  Pagination(:total="total", :onChangePageSize="handleChangePageSize",:onJumpPage="handleJump")
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
  min-height: 200px;
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
  height: 110px;
  background: white;
  border-radius: 12px;
  font-family: PingFang SC, sans-serif;
  text-align: center;
  color: #051174;
  padding: 20px 0 26px 0;
  .label {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    height: 40px;
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
</style>
<script lang="ts"> 
import { defineComponent, onMounted, reactive, ref } from "vue";
import Pagination from "../components/pagination.vue";
import BigNumber from "bignumber.js";
import { getRewardInfo, getList, RewardInfoType, ItemType } from "../apis";
import { useI18n } from "vue-i18n";
export default defineComponent({
  components: {
    Pagination,
  },
  setup() {
    const { t } = useI18n();
    const rewardsItems: Array<{ key: keyof RewardInfoType; label: string }> = [
      { key: "totalCalcPoints", label: '总算力值' },
      { key: "totalGpuNum", label: "GPU总数" },
      { key: "totalStaker", label: "矿工总数" },
      { key: "rentRate", label: "租用率" },
      { key: "totalStake", label: "矿机DBC质押数" },
      { key: "totalStakeAll", label: "矿机DBC质押总数" },
    ];

    const columns: Array<{ key: keyof ItemType; label: string }> = [
      {
        key: "gpuRentRate",
        label: "竞赛排名",
      },
      {
        key: "name",
        label: "矿工名称",
      },
      {
        key: "calcPoints",
        label: "算力值",
      },
      {
        key: "gpuNum",
        label: "GPU数量",
      },
      {
        key: "rentRate",
        label: "租用率",
      },
      {
        key: "totalReward",
        label: "奖励总数",
      },
    ];
    const set = (serverList: Array<ItemType>, reactiveList: Array<ItemType>) => {
      reactiveList.splice(0, reactiveList.length);
      // todo
      serverList.forEach((item) => {
        reactiveList.push(item);
      });
    };
    let itemsData = reactive<RewardInfoType>({
      totalCalcPoints: "loading",
      totalGpuNum: "loading",
      totalStake: "loading",
      totalStaker: "loading",
      totalStakeAll: "loading",
      rentRate: "loading",
    });
    let tableData = reactive<Array<ItemType>>([]);
    let total = ref(0);
    onMounted(async () => {
      const rewardInfo = await getRewardInfo();
      Object.keys(itemsData).forEach((k) => {
        const key = k as keyof RewardInfoType;
        let v = rewardInfo[key];
        if (key !== "rentRate" && typeof v !== "undefined") {
          // if(v.length > 14){
          //   console.log(v.slice(0, v.length-7) ,'v.slice(0, v.length-7)');
          //   v = new BigNumber(v.slice(0, v.length-7)).toFormat()+'M'
          // }else{
            v = new BigNumber(v).toFormat();
          // }
        }
        itemsData[key] = typeof v !== "undefined" ? v : "-";
      });
      const { list, total: remoteTotal } = await getList();
      set(list, tableData);
      total.value = remoteTotal;
    });

    return {
      items: rewardsItems,
      itemsData,
      tableColumns: columns,
      tableData,
      total,
      t,
      handleChangePageSize: async (num: number) => {
        const { list, total: remoteTotal } = await getList(1, num);
        set(list, tableData);
        total.value = remoteTotal;
      },
      handleJump: async (num: number, size: number) => {
        const { list } = await getList(num, size);
        set(list, tableData);
      },
    };
  },
});
</script>
