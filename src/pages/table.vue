<template lang="pug">
div.description {{t('desc2')}}
  a(target="_blank" href="https://github.com/DeepBrainChain/DBC-DOC/blob/master/chain_ops/rent_machine.md") https://github.com/DeepBrainChain/DBC-DOC/blob/master/chain_ops/rent_machine.md
div.content
  div.left
    div.left_con
      div(v-for='el in tableData' :class="{active: active === el.type}" @click="choose(el)") {{String(el.type).slice(7)}}
  div.right(v-loading="loading")
    div.right_con
      div.topcon
        div.topitem {{t('Machine_status')}}: 
          el-select.select(v-model="Machine_status", size='mini', placeholder="请选择" @change='SelectStatus')
            el-option( v-for="item in options" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem {{t('GPU_Num')}}: 
          el-select.select(v-model="GPU_Num", size='mini', placeholder="请选择" @change='SelectNum')
            el-option( v-for="item in options1" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem(v-if="locale == 'zh'") {{t('All_Machine')}}: {{All_Machine}}
        div.topitem(v-if="locale == 'zh'") {{t('Idle_Machine')}}: {{Idle_Machine}}
        div.topitem(v-if="locale == 'zh'") {{t('All_Gpu')}}: {{All_Gpu}}
        div.topitem(v-if="locale == 'zh'") {{t('Idle_Gpu')}}: {{Idle_Gpu}}  
        //- div.topitem(v-if="locale == 'zh'") {{t('Daily_Rent')}}: 
        //-   span {{getnum2(Computing_Power*5/99.01)}}$≈{{getnum2(Computing_Power*5/99.01/dbc_price)}}DBC
      div.topcon(v-if="locale == 'en'")
        div.topitem {{t('All_Machine')}}: {{All_Machine}}
        div.topitem {{t('Idle_Machine')}}: {{Idle_Machine}}
        div.topitem {{t('All_Gpu')}}: {{All_Gpu}}
        div.topitem {{t('Idle_Gpu')}}: {{Idle_Gpu}}
        //- div.topitem {{t('Daily_Rent')}}: 
        //-   span {{getnum2(Computing_Power*5/99.01)}}$≈{{getnum2(Computing_Power*5/99.01/dbc_price)}}DBC
      div.table
        div.tableli(v-for="el in Machine_info" :key="el.machine_id")
          div.li_list1
            span.Machine_id {{t('Machine_ID')}}: 
              i {{el.machine_id}}
            span(v-if='el.server_room') {{t('Room_number')}}: 
              i(:title='el.server_room' ) {{String(el.server_room).substring(0,10)+'...'}}
            span {{t('lable_two2')}}: 
              i(:title='el.machine_owner' v-if='!el.machine_name') {{String(el.machine_owner).substring(0,10)+'...'}}
              i(:title='el.machine_owner' v-else) {{el.machine_name}}
            span {{t('Machine_sta')}}: 
              i {{el.machine_status == 'rented'?t('Rented'):t('Idle')}}
          div.li_list2
            span.blod {{t('GPU_Num')}}: 
              i {{el.gpu_num}}
            span.blod {{t('GPU_memory')}}: 
              i {{el.gpu_mem}}G
            span.width30.blod {{t('GPU_type')}}: 
              i {{el.gpu_type}}
            span.width30.blod {{t('Daily_Rent')}}: 
              i.color {{getnum2(Number(el.calc_point)/100*0.028229)}}$≈{{getnum2(Number(el.calc_point)/100*0.028229/dbc_price)}}DBC
            span {{t('Country')}}:  
              i {{el.country}}
            span {{t('City')}}:  
              i {{el.city}}
            span {{t('Cumulative_DBC_rent')}}:  
              i {{getnum1(el.total_rent_fee)}}
            span.operators {{t('Network_operators')}}:
              span.opera
                i(v-for="operators in el.telecom_operators") {{operators}}
            span {{t('Online_time')}}:  
              i {{el.online}}
            span {{t('Memory_num')}}:  
              i {{Math.ceil(Number(el.mem_num))}}G
            span {{t('System_hd')}}:  
              i {{el.sys_disk}}G
            span {{t('Data_hd')}}:  
              i {{Number(el.data_disk)/1000}}T
            span {{t('Bandwidth1')}}:  
              i {{el.upload_net}}Mbps
            span {{t('Bandwidth2')}}: 
              i {{el.download_net}}Mbps
            span {{t('CPU_cores')}}:  
              i {{el.cpu_core_num}}
            span {{t('CPU_frequency')}}:  
              i {{getnum2(Number(el.cpu_rate)/1000)}}Ghz
            span.width50 {{t('CPU_type')}}:  
              i {{el.cpu_type}}
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
  width: 744px;
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
              &.Machine_id{
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
    const Computing_Power = ref(0)
    const dbc_price = ref(0)
    const Machine_status = ref('')
    const GPU_Num = ref('')
    const All_Machine = ref(0)
    const Idle_Machine = ref(0)
    const All_Gpu = ref(0)
    const Idle_Gpu = ref(0)
    const currentPage = ref(1)
    const PageSize = ref(50)
    const total = ref(0)
    const loading = ref(true)
    const Gpu_Type = ref([
      {
        type: "GeForceGTX1660S",
        power: 42.08
      },
      {
        type: "GeForceRTX2080",
        power: 0
      },
      {
        type: "GeForceRTX3060",
        power: 65.67
      },
      {
        type: "GeForceRTX2080Ti",
        power: 68.25
      },
      {
        type: "GeForceRTX3060Ti",
        power: 68.79
      },
      {
        type: "GeForceRTX3070",
        power: 74.39
      },
      {
        type: "GeForceRTX3070Ti",
        power: 75.71
      },
      {
        type: "GeForceRTX3080",
        power: 89.96
      },
      {
        type: "GeForceRTX3080Ti",
        power: 99.01
      },
      {
        type: "NVIDIA A5000",
        power: 103.51
      },
      {
        type: "GeForceRTX3090",
        power: 115.45
      },

      {
        type: "NVIDIA A100",
        power: 0
      },
      {
        type: "NVIDIA P100",
        power: 0
      },
      {
        type: "NVIDIA V100 16G",
        power: 0
      },
      {
        type: "NVIDIA V100 32G",
        power: 0
      },
      {
        type: "NVIDIA T4",
        power: 0
      },
      {
        type: "NVIDIA P40",
        power: 0
      },
      {
        type: "NVIDIA P4",
        power: 0
      },
      {
        type: "NVIDIA TITAN V",
        power: 0
      }
    ])
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
      calc_point: "",
      city: "",
      country: "",
      cpu_core_num: "",
      cpu_rate: "",
      cpu_type: "",
      cuda_core: "",
      data_disk: "",
      download_net: "",
      gpu_mem: "",
      gpu_num: "",
      gpu_type: "",
      machine_id: "",
      machine_status: "",
      mem_num: "",
      sys_disk: "",
      telecom_operators: [],
      total_rent_fee: "",
      upload_net: "",
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
    const byteToStr = (arr) => {
      if (typeof arr === "string") {
        return arr;
      }
      var str = "", _arr = arr;
      for (var i = 0; i < _arr.length; i++) {
        var one = _arr[i].toString(2),
          v = one.match(/^1+?(?=0)/);
        if (v && one.length == 8) {
          var bytesLength = v[0].length;
          var store = _arr[i].toString(2).slice(7 - bytesLength);
          for (var st = 1; st < bytesLength; st++) {
            store += _arr[st + i].toString(2).slice(2);
          }
          str += String.fromCharCode(parseInt(store, 2));
          i += bytesLength - 1;
        } else {
          str += String.fromCharCode(_arr[i]);
        }
      }
      return str;
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
        machine_status: status,
        gpu_num: num,
        pageNum: pageNum,
        pageSize: pageSize
      }
      if(status == ''){
        delete data['machine_status']
      }
      axios.get('https://galaxyidentifier.congtu.cloud/GetMachine_Details', {
        params: data
      })
      .then( async (res) => {
        // let block = await getBlock()
        // const data = await getStakerIdentity(res.list)
        res.list.map( (el, i) => {
        //   if(data[i].length > 0){
        //     el.machine_name = byteToStr(data[i])
        //   }
          if(el.operator){
            el.machine_name = byteToStr(JSON.parse(el.operator))
          }
          el.online = '···'
        })
        Machine_info.value = res.list
        total.value = res.total
        if(type == 'first'){
          axios.get('https://galaxyidentifier.congtu.cloud/Count_Details', {params:{gpu_type: str}})
          .then( res1 => {
            All_Machine.value = res1.count[str]?res1.count[str]:0
            Idle_Machine.value = res1.sum[str]?res1.sum[str]:0
            All_Gpu.value = res1.cpu_num[str]?res1.cpu_num[str]:0
            Idle_Gpu.value = res1.cpu_total[str]?res1.cpu_total[str]:0
            loading.value = false
          })
        }else{
          loading.value = false
        }
        // setTimeout( async ()=> {
          online_block.value = await getBlock();
          Machine_info.value.map( (el) => {
            el.online = minsToHourMins(Math.floor((online_block.value-el.bonding_height)/2))
          })
        // },1000)

      })
    }
    const choose = (str) => {
      loading.value = true
      active.value = str.type
      Computing_Power.value = str.power
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
      GPU_Num.value = ''
      getList(active.value , Machine_status.value, GPU_Num.value, 'first', currentPage.value, PageSize.value)
    }
    const SelectStatus = () => {
      loading.value = true
      currentPage.value = 1
      getList(active.value , Machine_status.value, GPU_Num.value, '', currentPage.value, PageSize.value)
    }
    const SelectNum = () => {
      loading.value = true
      currentPage.value = 1
      getList(active.value , Machine_status.value, GPU_Num.value, '', currentPage.value, PageSize.value)
    }
    const showMachines = (machines, currentPage, pageSize) => {
      let needMachines = []; //需要展示的机器
      // 循环页面要显示的机器数量次
      currentPage == 0? currentPage = 1: currentPage
      for (
        let machineIndex = (currentPage - 1) * pageSize; //当前分页机器起始索引
        machineIndex < currentPage * pageSize && //当前分页机器索引范围
        machineIndex < machines.length; //机器索引最大值
        machineIndex++
      ) {
        needMachines.push(machines[machineIndex]);
      }
      Machine_info.value = needMachines; //需要展示的机器
    }
    const handleChangePageSize = (num) => {
      loading.value = true
      PageSize.value = num
      getList(active.value , Machine_status.value, GPU_Num.value, '', currentPage.value, PageSize.value)
    }
    const handleChangePageSize1 = (num) => {
      loading.value = true
      PageSize.value = num
      currentPage.value = 1
      getList(active.value , Machine_status.value, GPU_Num.value, '', currentPage.value, PageSize.value)
    }
    const handleJumpPage = (num, size) => {
      loading.value = true
      PageSize.value = size
      currentPage.value = num
      getList(active.value , Machine_status.value, GPU_Num.value, '', num, size)
    }
    const handleCurrentChang = (num) => {
      loading.value = true
      currentPage.value = num
      getList(active.value , Machine_status.value, GPU_Num.value, '', currentPage.value, PageSize.value)
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
      await axios.get("https://dbchaininfo.congtu.cloud/query/dbc_info?language=CN").then(
        res => {
          dbc_price.value = res.content.dbc_price
        }
      )
      await axios.get('https://galaxyidentifier.congtu.cloud/GetGpu_Info').then(
        res => {
          Gpu_Type.value.map(el1=>{
            res.map(el => {
              if(el == el1.type){
                tableData.value.push(el1)
              }
            })
          })
          active.value = tableData.value[0] ? tableData.value[0].type : ''
          Computing_Power.value = tableData.value[0] ? tableData.value[0].power : 0
        }
      )
      await getList(active.value , Machine_status.value, GPU_Num.value, 'first', currentPage.value, PageSize.value)
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
      showMachines,
      byteToStr,
      loading,
      locale,
      active,
      isWin,
      dbc_price,
      Computing_Power,
      All_Machine,
      Idle_Machine,
      All_Gpu,
      Idle_Gpu,
      options,
      options1,
      GPU_Num,
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
