<template lang="pug">
div.description
 | {{t('desc2')}}
div.content
  div.left
    div(:class="{active: active === '1660s'}" @click="choose('1660s')") 1660s
    div(:class="{active: active === '1080ti'}" @click="choose('1080ti')") 1080ti
    div(:class="{active: active === '3060ti'}" @click="choose('3060ti')") 3060ti
    div(:class="{active: active === '3070'}" @click="choose('3070')") 3070
    div(:class="{active: active === '3070ti'}" @click="choose('3070ti')") 3070ti
    div(:class="{active: active === '3080'}" @click="choose('3080')") 3080
    div(:class="{active: active === '3080ti'}" @click="choose('3080ti')") 3080ti
    div(:class="{active: active === '3090'}" @click="choose('3090')") 3090
  div.right
    div.right_con
      div.topcon
        div.topitem {{t('Machine_status')}}: 
          el-select.select(v-model="Machine_status", size='mini', placeholder="请选择")
            el-option( v-for="item in options" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem {{t('GPU_Num')}}: 
          el-select.select(v-model="GPU_Num", size='mini', placeholder="请选择")
            el-option( v-for="item in options1" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem {{t('All_Machine')}}: {{All_Machine}}
        div.topitem {{t('Idle_Machine')}}: {{Idle_Machine}}
      div.table
        div.tableli(v-for="el in Machine_info" :key="el.id")
          div.li_list1
            span.Machine_id {{t('Machine_ID')}}: {{el.id}}
            span {{t('Room_number')}}: {{el.number}}
            span {{t('Machine_sta')}}: {{el.status == 'online'?t('Rented'):t('Idle')}}
          div.li_list2
            span.blod {{t('GPU_Num')}}: {{el.GPUnum}}
            span.blod {{t('GPU_memory')}}: {{el.mernum}}
            span.width50.blod {{t('GPU_type')}}: {{el.GPUtype}}
            span {{t('CPU_cores')}}: {{el.CPUnum}}
            span {{t('CPU_frequency')}}: {{el.frequency}}
            span.width50 {{t('CPU_type')}}: {{el.CPUtype}}
            span {{t('Country')}}: {{el.country}}
            span {{t('City')}}: {{el.city}}
            span.width50 {{t('Cumulative_DBC_rent')}}: {{el.DBCNumber}}
            span {{t('Network_operators')}}: {{el.operators}}
            span {{t('Online_time')}}: {{el.online}}
            span {{t('Memory_num')}}: {{el.memory}}
            span {{t('System_hd')}}: {{el.sys_hd}}
            span {{t('Data_hd')}}: {{el.data_hd}}
            span {{t('Bandwidth1')}}: {{el.bandwidth1}}
            span {{t('Bandwidth2')}}: {{el.bandwidth2}}
      div.pagination-container
        Pagination(:total="90", :onChangePageSize="handleChangePageSize",:onJumpPage="handleJump")
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
    font-size: 20px;
    div{
      position: relative;
      width: 180px;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      word-break: break-all;
      color: #333;
      cursor: pointer;
      text-align: center;
      margin: 20px auto 20px;
      border: 1px solid #999;
      &:hover{
        color: #338aff;
        background: #ebf3ff;
        border: 1px solid #338aff;
      }
      &.active{
        color: #338aff;
        background: #ebf3ff;
        border: 1px solid #338aff;
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
  .right{
    width: 1050px;
    margin: 20px;
    .right_con{
      width: 100%;
      padding: 25px;
      box-sizing: border-box;
      border: 1px solid #999;
      .topcon{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .topitem{
          font-size: 16px;
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
          font-size: 14px;
          box-sizing: border-box;
          border: 1px solid #999;
          margin-bottom: 20px;
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
                padding: 5px;
                box-sizing: border-box;
                border: 1px solid #999;
              }
            }
          }
          .li_list2{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            span{
              width: 25%;
              margin-bottom: 10px;
              word-break: break-all;
              &.width50{
                width: 50%;
              }
              &.blod{
                font-size: 18px;
                font-weight: bold;
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
import { computed, defineComponent, ref, reactive, watch, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
import { getPosGpuInfo } from "../apis";
import Pagination from "../components/pagination.vue";
import { jsonp } from 'vue-jsonp'
export default defineComponent({
  name: "tablelist",
  components: {
    Pagination
  },
  setup() {
    const { t, locale } = useI18n();
    const active = ref('1660s')
    const Machine_status = ref('all')
    const GPU_Num = ref('all')
    const All_Machine = ref(0)
    const Idle_Machine = ref(0)
    const activeName = ref('')
    const currentPage = ref(1)
    const total = ref(0)
    const options = ref(
      [{
        value: 'all',
        label: t('All')
      }, {
        value: 'hire',
        label: t('Rented')
      }, {
        value: 'idle',
        label: t('Idle')
      }]
    )
    const options1 = reactive(
      [{
        value: 'all',
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
    watch(
      () => locale.value,
      () => {
        options.value = [{
          value: 'all',
          label: t('All')
        }, {
          value: 'hire',
          label: t('Rented')
        }, {
          value: 'idle',
          label: t('Idle')
        }]
        options1[0] = {
          value: 'all',
          label: t('All')
        }
      }
    )
    const tableData = reactive(
      [{
        id: '12987122',
      }, {
        id: '12987123',
      }, {
        id: '12987125',
      }, {
        id: '12987126',
      }]
    );
    const Machine_info = reactive(
      [
        {
          id:'2gfpp3MAB3wfY3G4d21eB9xNv98WTZ4kq5LP14MYdzw',
          number: '2gfpp3MAB3wfY3G4d21eB9xNv98WTZ4kq5LP',
          status:'online',
          GPUtype:'GeForceGTX1080Ti',
          GPUnum:'4',
          mernum:'11GB',
          operators:'移动',
          online:'3d4h',
          DBCNumber:'12444Dbc',
          country: '中国',
          city: '上海',
          sys_hd:'100G',
          CPUnum:'4',
          CPUtype: 'Intel(R) Xeon(R) Silver 4110 CPU',
          bandwidth1: '50M',
          data_hd:'500G',
          frequency:'123',
          memory: '323',
          bandwidth2: '20M'
        },
        {
          id:'2xNv98WTZ4kq5LP14MYdzwgfpp3MAB3wfY3G4d21eB9',
          number: 'd21eB9xNv98WTZ4kq5LP2gfpp3MAB3wfY3G4',
          status:'outline',
          GPUtype:'1080TiGeForceGTX',
          GPUnum:'5',
          mernum:'123GB',
          operators:'联通',
          online:'12d3h',
          DBCNumber:'12Dbc',
          country: '中国',
          city: '山东',
          sys_hd:'500G',
          CPUnum:'4',
          CPUtype: 'Intel(R) Xeon(R) Silver 2132 CPU',
          bandwidth1: '50M',
          data_hd:'500G',
          frequency:'123',
          memory: '323',
          bandwidth2: '20M'
        }
      ]
      
    )
    const isWin = computed(()=>{
        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
          return false
        }else{
          return true
        }
    })
    const choose = (str) => {
      active.value = str
    }
    const handleChangePageSize = (num) => {
      console.log(num, 'handleChangePageSize');
    }
    const handleJump = (num, size) => {
      console.log(num, size, 'handleJump');
    }
    onBeforeMount(async () => {
      let permas = {
        ak:'jQc7i76SLm2k5j54z5y6ppjWjhb0nlhC',
        output:'json',
        location:'37.4600,118.4900'
      }
      // jsonp('http://api.map.baidu.com/reverse_geocoding/v3/',permas)
      // .then( res=>{
      //   console.log(res,'res');
      // })
    });
    return {
      t,
      choose,
      handleChangePageSize,
      handleJump,
      active,
      All_Machine,
      Idle_Machine,
      options,
      options1,
      GPU_Num,
      tableData,
      activeName,
      Machine_status,
      Machine_info,
      currentPage,
      total
    };
  }
});
</script>
