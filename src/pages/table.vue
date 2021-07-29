<template lang="pug">
div.description
 | {{t('desc2')}}
div.content
  div.left
    div.left_con
      div(v-for='el in tableData' :class="{active: active === el}" @click="choose(el)") {{String(el).slice(7)}}
  div.right
    div.right_con
      div.topcon
        div.topitem {{t('Machine_status')}}: 
          el-select.select(v-model="Machine_status", size='mini', placeholder="请选择" @change='SelectStatus')
            el-option( v-for="item in options" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem {{t('GPU_Num')}}: 
          el-select.select(v-model="GPU_Num", size='mini', placeholder="请选择" @change='SelectNum')
            el-option( v-for="item in options1" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem {{t('All_Machine')}}: {{All_Machine}}
        div.topitem {{t('Idle_Machine')}}: {{Idle_Machine}}
      div.table
        div.tableli(v-for="el in Machine_info" :key="el.machine_id")
          div.li_list1
            span.Machine_id {{t('Machine_ID')}}: 
              i {{el.machine_id}}
            span(v-if='el.number') {{t('Room_number')}}: 
              i {{el.number}}
            span {{t('Machine_sta')}}: 
              i {{el.machine_status == 'rented'?t('Rented'):t('Idle')}}
          div.li_list2
            span.blod {{t('GPU_Num')}}: 
              i {{el.gpu_num}}
            span.blod {{t('GPU_memory')}}: 
              i {{el.gpu_mem}}G
            span.width50.blod {{t('GPU_type')}}: 
              i {{el.gpu_type}}
            span {{t('Country')}}:  
              i {{el.country}}
            span {{t('City')}}:  
              i {{el.city}}
            span {{t('Cumulative_DBC_rent')}}:  
              i {{getnum1(el.total_rent_fee)}}
            span {{t('Network_operators')}}:  
              i {{el.telecom_operators[0]}}
            span {{t('Online_time')}}:  
              i {{el.online}}
            span {{t('Memory_num')}}:  
              i {{Math.ceil(Number(el.mem_num)/ 1024)}}G
            span {{t('System_hd')}}:  
              i {{el.sys_disk}}G
            span {{t('Data_hd')}}:  
              i {{Number(el.data_disk)/10}}T
            span {{t('Bandwidth1')}}:  
              i {{Math.round(Number(el.upload_net)/1024)}}Mbps
            span {{t('Bandwidth2')}}: 
              i {{Math.round(Number(el.download_net)/1024)}}Mbps
            span {{t('CPU_cores')}}:  
              i {{el.cpu_core_num}}
            span {{t('CPU_frequency')}}:  
              i {{getnum2(Number(el.cpu_rate)/100)}}Ghz
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
  width: 1281px;
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
    width: 1050px;
    color: #666;
    margin: 20px 10px 20px 0;
    .right_con{
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      border: 1px solid #999;
      .topcon{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .topitem{
          font-size: 14px;
          margin-right: 20px;
          .select{
            width: 90px;
          }
        }
        
      }
      .table{
        width: 100%;
        margin: 20px 0;
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
              &.blod{
                font-size: 18px;
                font-weight: bold;
              }
              i{
                font-style: normal;
                color: #195d91;
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
export default defineComponent({
  name: "tablelist",
  components: {
    Pagination
  },
  setup() {
    const { t, locale } = useI18n();
    const active = ref('')
    const Machine_status = ref('')
    const GPU_Num = ref('')
    const All_Machine = ref(0)
    const Idle_Machine = ref(0)
    const currentPage = ref(1)
    const PageSize = ref(20)
    const total = ref(0)
    const Gpu_Type = ref([
      "GeForceGTX1660S",
      "GeForceRTX2080",
      "GeForceRTX2080Ti",
      "GeForceRTX3060",
      "GeForceRTX3060Ti",
      "GeForceRTX3070",
      "GeForceRTX3070Ti",
      "GeForceRTX3080",
      "GeForceRTX3080Ti",
      "NVIDIA A5000",
      "GeForceRTX3090",
      "NVIDIA A100",
      "NVIDIA P100",
      "NVIDIA V100 16G",
      "NVIDIA V100 32G",
      "NVIDIA T4",
      "NVIDIA P40",
      "NVIDIA P4",
      "NVIDIA TITAN V"
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
    const First_Machine_Info = ref([])
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
    const getList = (str = '', status = '', num = '', type) => {
      let data = {
        gpu_type: str,
        machine_status: status,
        gpu_num: num
      }
      axios.get('/api/GetMachine_Details', {
        params: data
      })
      .then( res => {
        if(status == 'online' && type == 'first'){
          Idle_Machine.value = res.length
        }else{
          showMachines(res, currentPage.value, PageSize.value)
          First_Machine_Info.value = res
          total.value = res.length
          if(type == 'first'){
            All_Machine.value = res.length
          }
        }
      })
    }
    const choose = (str) => {
      active.value = str
      currentPage.value = 1
      PageSize.value = 20
      Idle_Machine.value = 0
      All_Machine.value = 0
      First_Machine_Info.value = []
      getList(active.value , Machine_status.value, GPU_Num.value, 'first')
      setTimeout(()=>{
        getList(active.value , 'online', GPU_Num.value, 'first')
      }, 1000)
      
    }
    const SelectStatus = () => {
      getList(active.value , Machine_status.value, GPU_Num.value)
    }
    const SelectNum = () => {
      getList(active.value , Machine_status.value, GPU_Num.value)
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
      PageSize.value = num
      showMachines(First_Machine_Info.value, currentPage.value, PageSize.value)
    }
    const handleChangePageSize1 = (num) => {
      PageSize.value = num
      currentPage.value = 1
      showMachines(First_Machine_Info.value, currentPage.value, PageSize.value)
    }
    const handleJumpPage = (num, size) => {
      showMachines(First_Machine_Info.value, num, size)
    }
    const handleCurrentChang = (num) => {
      currentPage.value = num
      showMachines(First_Machine_Info.value, currentPage.value, PageSize.value)
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
      await axios.get('/api/GetGpu_Info')
      .then(
        res => {
          Gpu_Type.value.map(el1=>{
            res.map(el => {
              if(el == el1){
                tableData.value.push(el1)
              }
            })
          })
          active.value = tableData.value[0]
        }
      )
      await getList(active.value , Machine_status.value, GPU_Num.value, 'first')
      setTimeout(()=>{
        getList(active.value , 'online', GPU_Num.value, 'first')
      }, 1000)
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
      active,
      isWin,
      All_Machine,
      Idle_Machine,
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
