<template lang="pug">
div.description {{t('desc2')}}
  a(target="_blank" href="https://github.com/DeepBrainChain/DBC-DOC/blob/master/rent_machine.assets/rent_machine.md") https://github.com/DeepBrainChain/DBC-DOC/blob/master/rent_machine.assets/rent_machine.md
div.content
  div.left
    div.left_con
      div(v-for='el in tableData' :class="{active: active === el}" @click="choose(el)") {{String(el).slice(7)}}
  div.right(v-loading="loading")
    div.right_con
      div.topcon
        div.topitem {{t('Machine_status')}}: 
          el-select.select(v-model="Machine_status", size='mini', placeholder="请选择" @change='SelectStatus')
            el-option( v-for="item in options" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem {{t('gpuNum')}}: 
          el-select.select(v-model="gpuNum", size='mini', placeholder="请选择" @change='SelectNum')
            el-option( v-for="item in options1" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem(v-if="locale == 'zh'") {{t('All_Machine')}}: {{All_Machine}}
        div.topitem(v-if="locale == 'zh'") {{t('Idle_Machine')}}: {{Idle_Machine}}
        div.topitem(v-if="locale == 'zh'") {{t('All_Gpu')}}: {{All_Gpu}}
        div.topitem(v-if="locale == 'zh'") {{t('Idle_Gpu')}}: {{Idle_Gpu}}  
      div.topcon(v-if="locale == 'en'")
        div.topitem {{t('All_Machine')}}: {{All_Machine}}
        div.topitem {{t('Idle_Machine')}}: {{Idle_Machine}}
        div.topitem {{t('All_Gpu')}}: {{All_Gpu}}
        div.topitem {{t('Idle_Gpu')}}: {{Idle_Gpu}}
      div.table
        div.tableli(v-for="el in Machine_info" :key="el.machine_id")
          div.li_list1
            span.machineId {{t('machineId')}}: 
              i {{el.machine_id}}
            span(v-if='el.serverRoom') {{t('Room_number')}}: 
              i(:title='el.serverRoom' ) {{String(el.serverRoom).substring(0,10)+'...'}}
            span {{t('lable_two2')}}: 
              i(:title='el.machineStash' v-if='!el.machine_name') {{String(el.machineStash).substring(0,10)+'...'}}
              i(:title='el.machineStash' v-else) {{el.machine_name}}
            span {{t('Machine_sta')}}: 
              i {{el.machine_status == 'rented'?t('Rented'):t('Idle')}}
          div.li_list2
            span.blod {{t('gpuNum')}}: 
              i {{el.gpuNum}}
            span.blod {{t('GPU_memory')}}: 
              i {{el.gpuMem}}G
            span.width30.blod {{t('GPU_type')}}: 
              i {{el.gpuType}}
            span.width30.blod {{t('Daily_Rent')}}: 
              i.color {{getnum2(Number(el.calcPoint)/100*0.016937)}}$≈{{getnum2(Number(el.calcPoint)/100*0.016937/dbc_price)}}DBC
            span {{t('Country')}}:  
              i {{el.country}}
            span {{t('City')}}:  
              i {{el.city}}
            span {{t('Cumulative_DBC_rent')}}:  
              i {{getnum1(el.totalRentFee)}}
            span.operators {{t('Network_operators')}}:
              span.opera
                i(v-for="operators in el.telecomOperators") {{operators}}
            span {{t('Online_time')}}:  
              i {{el.online}}
            span {{t('Memory_num')}}:  
              i {{Math.ceil(Number(el.memNum))}}G
            span {{t('System_hd')}}:  
              i {{el.sysDisk}}G
            span {{t('Data_hd')}}:  
              i {{Number(el.dataDisk)/1000}}T
            span {{t('Bandwidth1')}}:  
              i {{el.uploadNet}}Mbps
            span {{t('Bandwidth2')}}: 
              i {{el.downloadNet}}Mbps
            span {{t('CPU_cores')}}:  
              i {{el.cpuCoreNum}}
            span {{t('CPU_frequency')}}:  
              i {{getnum2(Number(el.cpuRate)/1000)}}Ghz
            span.width50 {{t('cpuType')}}:  
              i {{el.cpuType}}
      div.pagination-container
        Pagination(v-if='!isWin' :total="total", :onChangePageSize="handleChangePageSize1",:onJumpPage="handleJumpPage")
        el-pagination.pagination(
          v-else
          @size-change="handleChangePageSize", 
          @current-change="handleCurrentChang", 
          :currentPage="currentPage", 
          :page-sizes="[5, 10, 20, 30, 50]",
          :page-size="PageSize",
          small
          popper-class='pagination'
          layout="total, sizes, prev, pager, next, jumper",
          :total="total"
        )
</template>
<style lang="less" scoped >
.description {
  width: 800px;
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  font-size: 16px;
  // line-height: 29px;
  text-align: center;
  margin: 24px auto 0;
  color: #666666;
}
.content{
  width: 1350px;
  display: flex;
  margin: 32px auto;
  background: #fff;
  justify-content: space-between;
  .left{
    width: 200px;
    font-size: 14px;
    margin: 20px 5px 20px 10px;
    .left_con{
      width: 100%;
      border: 1px solid #999;
      div{
        position: relative;
        width: 180px;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        word-break: break-all;
        color: #666;
        cursor: pointer;
        text-align: center;
        margin: 15px auto 15px;
        border: 1px solid #999;
        &:hover{
          color: #fff;
          background: #6A48EC;
          border: 1px solid #6A48EC;
        }
        &.active{
          color: #fff;
          background: #6A48EC;
          border: 1px solid #6A48EC;
          // color: #338aff;
          // background: #ebf3ff;
          // border: 1px solid #338aff;
        }
        span{
          position: absolute;
          top: -20px;
          width: 40px;
          height: 40px;
          color: #fff;
          display: block;
          font-size: 16px;
          line-height: 40px;
          text-align: center;
          border-radius: 100%;
        }
        .badge1{
          right: 50px;
          background: #338aff;
        }
        .badge2{
          right: 5px;
          background: #909399;
        }
      }
    }
  }
  .right{
    width: 1120px;
    color: #666;
    margin: 20px 10px 20px 0;
    .right_con{
      width: 100%;
      padding: 15px 10px;
      box-sizing: border-box;
      border: 1px solid #999;
      .topcon{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .topitem{
          font-size: 14px;
          margin-right: 15px;
          margin-bottom: 10px;
          &.bold{
            font-weight: bold;
          }
          .select{
            width: 90px;
          }
          span{
            color: #f56c6c;
          }
        }
      }
      .table{
        width: 100%;
        margin: 0 0 20px;
        .tableli{
          width: 100%;
          padding: 10px;
          font-size: 12px;
          box-sizing: border-box;
          border: 1px solid #999;
          margin-bottom: 15px;
          .li_list1{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            &:first-child{
              justify-content: space-between;
            }
            span{
              margin-bottom: 10px;
              word-break: break-all;
              &.machineId{
                padding: 10px 5px;
                box-sizing: border-box;
                border: 1px solid #999;
              }
              i{
                font-style: normal;
                color: #195d91;
              }
            }
          }
          .li_list2{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            span{
              width: 20%;
              margin-bottom: 12px;
              word-break: break-all;
              &.width50{
                width: 50%;
              }
              &.width30{
                width: 30%;
              }
              &.blod{
                font-size: 18px;
                font-weight: bold;
              }
              .color{
                color: #f56c6c;
              }
              i{
                font-style: normal;
                color: #195d91;
              }
              &.operators{
                display: flex;
                align-items: center;
                .opera{
                  flex: 1;
                  display: flex;
                  margin: 0 0 0 5px;
                  flex-direction: column;
                }
              }
            }
          }
        }
        // .machine_nifo{
        //   width: 90%;
        //   margin: auto;
        //   display: flex;
        //   font-size: 16px;
        //   flex-wrap: wrap;
        //   align-items: center;
        //   justify-content: space-between;
        // }
      }
      .pagination{
        text-align: center;
      }
    }
    
  }
  .pagination-container {
    width: 100%;
    margin: 2px auto 0;
    display: flex;
    justify-content: flex-end;
    border-radius: 4px;
  }
}
</style>
<style lang="less">
@media screen and (max-width: 750px) {
  .content{
    .right{
      .topcon{
        .topitem {
          .select{
            width: 12vw !important;
            height: 4vw;
            .el-input__inner{
              width: 12vw;
              height: 4vw;
            }
          }
        }
      }
      .li_list2{
        span{
          width: 50% !important;
          &.width50{
            width: 100% !important;
          }
        }
      }
    }
  }
  body{
    .el-select-dropdown__item{
      height: 4vw;
      line-height: 1.1;
    }
    .el-collapse-item__header{
      height: 5vw;
    }
  }
}
</style>
<script>
import { computed, defineComponent, ref, reactive, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import BigNumber from "bignumber.js";
import Pagination from "../components/pagination.vue";
import axios from '../untils/axios'
import { getStakerIdentity, getBlock } from '../apis'
export default defineComponent({
  name: "tablelist",
  components: {
    Pagination
  },
  setup() {
    const { t, locale } = useI18n();
    const online_block = ref(0)
    const active = ref('')
    const dbc_price = ref(0)
    const Machine_status = ref('')
    const gpuNum = ref('')
    const All_Machine = ref(0)
    const Idle_Machine = ref(0)
    const All_Gpu = ref(0)
    const Idle_Gpu = ref(0)
    const currentPage = ref(1)
    const PageSize = ref(50)
    const total = ref(0)
    const loading = ref(true)
    const options = ref(
      [{
        value: '',
        label: t('All')
      }, {
        value: 'rented',
        label: t('Rented')
      }, {
        value: 'online',
        label: t('Idle')
      }]
    )
    const options1 = reactive(
      [{
        value: '',
        label: t('All')
      }, {
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }, {
        value: '6',
        label: '6'
      }, {
        value: '7',
        label: '7'
      }, {
        value: '8',
        label: '8'
      }, {
        value: '9',
        label: '9'
      }, {
        value: '10',
        label: '10'
      }]
    )
    const tableData = ref([]);
    const Machine_info = ref([{
      number:'',
      calcPoint: "",
      city: "",
      country: "",
      cpuCoreNum: "",
      cpuRate: "",
      cpuType: "",
      cudaCore: "",
      dataDisk: "",
      downloadNet: "",
      gpuMem: "",
      gpuNum: "",
      gpuType: "",
      machine_id: "",
      machine_status: "",
      memNum: "",
      sysDisk: "",
      telecomOperators: [],
      totalRentFee: "",
      uploadNet: "",
      online:''
    }])
    const isWin = computed(()=>{
        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
          return false
        }else{
          return true
        }
    })
    const getnum1 = (num) => {
      const num1 = new BigNumber(Number(num)/ Math.pow(10,15)).toFormat()
      let hasPoint;
      num1.indexOf(".") >= 0? hasPoint = true: hasPoint = false
      return num1.substring(0,num1.indexOf(".")+3);
    }
    const getnum2 = (num) => {
      let num1 = String(num)
      let hasPoint;
      num1.indexOf(".") >= 0? hasPoint = true: hasPoint = false
      return num1.substring(0,num1.indexOf(".")+3);
    }
    const minsToHourMins = (mins) => {
      if (mins < 60) {
        return mins + 'm'
      } else {
        const h = Math.floor(mins / 60)
        const m = mins % 60
        return `${h}h${m}m`
      }
    }
    const getList = (str = '', status = '', num = '', type , pageNum = 1, pageSize = 50 ) => {
      let data = {
        gpu_type: str,
        status: status,
        gpu_num: num != '' ? Number(num) : '',
        pageNum: pageNum - 1,
        pageSize: pageSize
      }
      axios.post('https://identifier.congtu.cloud/api/select/getlistByGpu', data)
      .then( async (res) => {
        let data = res.content
        // let block = await getBlock()
        // const data = await getStakerIdentity(res.list)
        data.list.map( (el, i) => {
          el.online = '···'
        })
        Machine_info.value = data.list
        total.value = data.typeTotal
        All_Machine.value = data.total
        Idle_Machine.value = data.onlinetotal
        All_Gpu.value = data.totalgpunum
        Idle_Gpu.value = data.totalonlinegpunum

        online_block.value = await getBlock();
        Machine_info.value.map( (el) => {
          el.online = minsToHourMins(Math.floor((online_block.value-el.bondingHeight)/2))
        })
        loading.value = false

      })
      .catch( err => {
        console.log(err);
      })
    }
    const choose = (str) => {
      loading.value = true
      active.value = str
      if(isWin.value){
        currentPage.value = 1
        PageSize.value = 50
      }
      Idle_Machine.value = 0
      All_Machine.value = 0
      All_Gpu.value = 0
      Idle_Gpu.value = 0
      Machine_info.value = []
      Machine_status.value = ''
      gpuNum.value = ''
      getList(active.value , Machine_status.value, gpuNum.value, 'first', currentPage.value, PageSize.value)
    }
    const SelectStatus = () => {
      loading.value = true
      currentPage.value = 1
      getList(active.value , Machine_status.value, gpuNum.value, '', currentPage.value, PageSize.value)
    }
    const SelectNum = () => {
      loading.value = true
      currentPage.value = 1
      getList(active.value , Machine_status.value, gpuNum.value, '', currentPage.value, PageSize.value)
    }
    const handleChangePageSize = (num) => {
      loading.value = true
      PageSize.value = num
      getList(active.value , Machine_status.value, gpuNum.value, '', currentPage.value, PageSize.value)
    }
    const handleChangePageSize1 = (num) => {
      loading.value = true
      PageSize.value = num
      currentPage.value = 1
      getList(active.value , Machine_status.value, gpuNum.value, '', currentPage.value, PageSize.value)
    }
    const handleJumpPage = (num, size) => {
      loading.value = true
      PageSize.value = size
      currentPage.value = num
      getList(active.value , Machine_status.value, gpuNum.value, '', num, size)
    }
    const handleCurrentChang = (num) => {
      loading.value = true
      currentPage.value = num
      getList(active.value , Machine_status.value, gpuNum.value, '', currentPage.value, PageSize.value)
    }
    watch(
      () => locale.value,
      () => {
        options.value = [{
          value: '',
          label: t('All')
        }, {
          value: 'rented',
          label: t('Rented')
        }, {
          value: 'online',
          label: t('Idle')
        }]
        options1[0] = {
          value: '',
          label: t('All')
        }
      }
    )
    onMounted( async () => {
      loading.value = true
      await axios.get("https://identifier.congtu.cloud/api/select/getdbcPrice").then(res => {
        dbc_price.value = res.content
      })
      .catch( err => {
        console.log(err);
      })
      await axios.get('https://identifier.congtu.cloud/api/select/getgpuType').then(res => {
        tableData.value = res.content
        active.value = tableData.value[0] ? tableData.value[0] : ''
      })
      .catch( err => {
        console.log(err);
      })
      await getList(active.value , Machine_status.value, gpuNum.value, 'first', currentPage.value, PageSize.value)
    });
    return {
      t,
      choose,
      SelectStatus,
      SelectNum,
      getnum1,
      getnum2,
      handleJumpPage,
      handleChangePageSize,
      handleChangePageSize1,
      handleCurrentChang,
      loading,
      locale,
      active,
      isWin,
      dbc_price,
      All_Machine,
      Idle_Machine,
      All_Gpu,
      Idle_Gpu,
      options,
      options1,
      gpuNum,
      tableData,
      Machine_status,
      Machine_info,
      currentPage,
      PageSize,
      total,
    };
  }
});
</script>
