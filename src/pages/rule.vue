<template lang="pug">
div.description
  | 深脑链银河算力竞赛激励计划是一项协作竞赛，目的是对该网络进行压力测试，鼓励全世界的算工参与，并帮助算工为运营世界上最大的高性能算力网络做好准备。
div.rule-wrapper
  div.rule-title 竞赛规则
  div.rule-content 深脑链算力主网已经启动，在全网10000卡以内算工享有租金收益和在线奖励双收益，每天在线奖励总数547,945DBC，租金销毁分为三个阶段，阶段一：1卡至4999卡租金销毁30%，算工得到70%租金收益；阶段二：5000卡至9999卡租金销毁70%，算工得到30%租金收益；阶段三：10000卡及以上租金销毁100%，算工无租金收益。
  div.rule-title 一、GPU服务器参数最低要求：算力服务器各项参数只有满足最低要求，才可以通过验证人审核上线，否则无法获得收益
  ul.rule-content
    li
      span GPU：
      | 最低1卡，云网吧推荐4卡和6卡机器，AI推荐8卡机器；必须英伟达Nvidia系列显卡；
    li
      span 内存：<br>
      | 满足云游戏的要求：内存最低要求每卡16G。<br>
      | 满足AI的要求：内存最低要求每卡48G，整机最低64G（即每卡分配内存达48G即可通过上链审核，如果是4卡新机器推荐320G内存）；结合用户端实际应用场景需求，如果GPU显存大于等于10G且CudaCore大于4000的服务器推荐配置大内存，一卡推荐256G，两卡推荐448G，四卡推荐832G。
      
    li
      span CPU：<br>
      | 满足云游戏的要求：Intel/AMD，主频3.5Ghz及其以上；每个GPU需要单独配置一个CPU <br>
      | 满足AI的要求：Intel/AMD，主频2.0Ghz及其以上，CPU 单颗8核及其以上；特别注意：考虑到中长期出租率，以及出租状态下30%的算力值加成，建议新机器的CPU按照如下配置：Intel，V3以上，主频2.4Ghz、睿频3.0Ghz及其以上，单颗CPU 10核以上，平均每颗GPU分配5核10线程以上，4卡GPU服务器推荐双CPU；
    li
      span 硬盘：<br>
      | 满足云游戏的要求：系统盘100G SSD及以上，无需数据盘，可以采用无盘系统的方式 <br>
      | 满足AI的要求：系统盘100G SSD及以上，数据盘1T nvme SSD及以上(新机器4卡gpu服务器建议用3.84T nvme SSD)；
    li
      span 网络带宽：<br>
      | 满足云游戏的要求：每个GPU机器至少10M带宽；<br>
      | 满足AI的要求：4卡GPU机器上下行20M带宽以上，2卡GPU机器上下行10M带宽以上，平均每个GPU 5M带宽以上；特别注意，考虑中长期出租率，建议中国大陆地区机器托管机房可以支持BGP和三线带宽、其他海外地区支持BGP带宽;
    li
      span 万兆网卡：
      | GPU服务器至少配置万兆网卡；
    li
      span 有独立固定IP：
      | 每个GPU服务器配置一个独立公网IP，并且保留可拓展性，有部分用户场景要求每个GPU一个公网IP，即4个GPU服务器需要5个IP；
    li
      span 托管IDC：
      | 机器放在标准数据中心T3以上，考虑到中长期出租率，建议机器托管在长江沿线城市、沿海城市，或者这些城市周边地区，优先推荐华东、华南，西南、华中、华北适量放置；
    li
      span IDC机房交换机：
      | 接入层需要支持10G内网交换机，核心层交换机要为接入层带宽2倍以上，需要支持20G内网带宽；
    li
      span 特别注意：
      | 每个GPU起始质押1000个DBC，后面租金和奖励收益会陆续进入质押，一直到最多10万个DBC或者300美金等值DBC,考虑到机器使用稳定性、在线收益稳定性以及惩罚机制，建议使用厂商品牌机，不推荐组装机。
    li
      span 推荐机房的交换机和网络架构：
      | 所有的GPU机器ETH0网口归属一个Vlan，该网口配置服务器网络信息。所有GPU服务器ETH1网口和存储服务器ETHx网口 归属同一个新的Vlan，网口不需要做任何IP配置，存储服务器ETHx网口需要配置vlan信息
    img.ruleimg(src="../assets/rule.png")
    li
      span 推荐GPU型号：
      | 3080、3080Ti、3090、A5000、A6000
    li
      span GPU服务器参与银河竞赛部署文档：
      a(target="_blank" href="https://github.com/DeepBrainChain/DBC-DOC") https://github.com/DeepBrainChain/DBC-DOC
  div.rule-title 二.算力值计算规则
  div.rule-content
    div 本次模型修改将服务器基础值以及内存等也纳入计算模型，整个生态中用户端的租用费用也将统一参考算力值系统定价。租金收益0.508美金/C/月。根据市场GPU的价格变化，这个参数通过社区公投会进行改变。
    | 计算模型如下：整机算力值=(25 * 卡数 + 内存/3.5 + (√(cuda数量) * √(显存/10)) * 显卡数量)，当地域系数为1时算力值如下：
    div.table
      div.table_con
        div 显卡类型
        div Cuda core
        div 显存
        div 显卡卡数
        div 内存(G)
        div 整机算力(C)
        div 整机租金(美元)
        div 租金元/月/卡(美元)
      div.table_li
        div 1080
        div 2560
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 299.31
            div 152.05 
            div 38.01
          div.line
            div 4
            div 128
            div 317.59
            div 161.34
            div 40.33
      div.table_li
        div 1080ti
        div 3584
        div 11
        div.width60
          div.line
            div 4
            div 64
            div 369.44 
            div 187.68
            div 46.92
          div.line
            div 4
            div 128
            div 387.73
            div 196.96 
            div 49.24 
      div.table_li
        div 1660
        div 1408
        div 6
        div.width60
          div.line
            div 4
            div 64
            div 234.55 
            div 119.15 
            div 29.79 
          div.line
            div 4
            div 128
            div 252.83 
            div 128.44 
            div 32.11 
      div.table_li
        div 1660ti
        div 1536
        div 6
        div.width60
          div.line
            div 4
            div 64
            div 239.72 
            div 121.78 
            div 30.44 
          div.line
            div 4
            div 128
            div 258.00 
            div 131.07 
            div 32.77 
      div.table_li
        div 1660s
        div 1408
        div 6
        div.width60
          div.line
            div 4
            div 64
            div 234.55 
            div 119.15 
            div 32.11 
          div.line
            div 4
            div 128
            div 252.83 
            div 128.44 
            div 32.11 
      div.table_li
        div 2070s
        div 2560
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 299.31 
            div 152.05 
            div 38.01 
          div.line
            div 4
            div 128
            div 317.59 
            div 161.34 
            div 40.33 
      div.table_li
        div 2080
        div 2944
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 312.41 
            div 158.70 
            div 39.68 
          div.line
            div 4
            div 128
            div 330.69 
            div 167.99 
            div 42.00 
      div.table_li
        div 2080s
        div 3072
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 316.58 
            div 160.82 
            div 40.21 
          div.line
            div 4
            div 128
            div 334.87 
            div 170.11 
            div 42.53 
      div.table_li
        div 2080ti
        div 4352
        div 11
        div.width60
          div.line
            div 4
            div 64
            div 395.04 
            div 200.68 
            div 50.17 
          div.line
            div 4
            div 128
            div 413.33 
            div 209.97 
            div 52.49 
      div.table_li
        div 3060
        div 3584
        div 12
        div.width60
          div.line
            div 4
            div 64
            div 380.61 
            div 193.35 
            div 48.34 
          div.line
            div 4
            div 128
            div 398.89 
            div 202.64 
            div 50.66 
      div.table_li
        div 3060ti
        div 4864
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 367.80 
            div 186.84 
            div 46.71 
          div.line
            div 4
            div 128
            div 386.09 
            div 196.13 
            div 49.03 
      div.table_li
        div 3070
        div 5888
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 392.82 
            div 199.55 
            div 49.89 
          div.line
            div 4
            div 128
            div 411.10 
            div 208.84 
            div 52.21 
      div.table_li
        div 3070ti
        div 6144
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 398.72 
            div 202.55 
            div 50.64 
          div.line
            div 4
            div 128
            div 417.01 
            div 211.84 
            div 52.96 
      div.table_li
        div 3080
        div 8704
        div 10
        div.width60
          div.line
            div 4
            div 128
            div 509.75 
            div 258.95 
            div 64.74 
          div.line
            div 4
            div 512
            div 619.47 
            div 314.69 
            div 78.67 
      div.table_li
        div 3080ti
        div 10240
        div 12
        div.width60
          div.line
            div 4
            div 128
            div 579.98 
            div 294.63 
            div 73.66 
          div.line
            div 4
            div 512
            div 689.69 
            div 350.36 
            div 87.59 
      div.table_li
        div 3090
        div 10496
        div 24
        div.width60
          div.line
            div 4
            div 128
            div 771.43 
            div 391.89 
            div 97.97 
          div.line
            div 4
            div 512
            div 881.15 
            div 447.62 
            div 111.91 
      div.table_li
        div A4000
        div 6144
        div 16
        div.width60
          div.line
            div 4
            div 128
            div 533.16 
            div 270.85 
            div 67.71 
          div.line
            div 4
            div 512
            div 642.88 
            div 326.58 
            div 81.65 
      div.table_li
        div A5000
        div 8192
        div 24
        div.width60
          div.line
            div 4
            div 128
            div 697.44 
            div 354.30 
            div 88.57 
          div.line
            div 4
            div 512
            div 807.15 
            div 410.03 
            div 102.51 
      div.table_li.height30
        div A40
        div 10752
        div 48
        div.width60
          div.line
            div 8
            div 2048
            div 2602.56 
            div 1322.10 
            div 165.26 
      div.table_li.height30
        div A100 PCIe
        div 6912
        div 40
        div.width60
          div.line
            div 8
            div 2048
            div 2115.36 
            div 1074.60 
            div 134.33 
      div.table_li.height30
        div A100 PCIe
        div 6912
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 2666.35 
            div 1354.51 
            div 169.31 
      div.table_li.height30
        div A100 SXM4
        div 6912
        div 40
        div.width60
          div.line
            div 8
            div 2048
            div 2115.36 
            div 1074.60 
            div 134.33 
      div.table_li.height30
        div A100 SXM4
        div 6912
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 2666.35 
            div 1354.51 
            div 169.31 
      div.table_li.height30
        div A800 PCIe
        div 6912
        div 40
        div.width60
          div.line
            div 8
            div 2048
            div 2115.36 
            div 1074.60 
            div 134.33 
      div.table_li.height30
        div A800 PCIe
        div 6912
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 2666.35 
            div 1354.51 
            div 169.31 
      div.table_li.height30
        div A800 SXM5
        div 6912
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 2666.35 
            div 1354.51 
            div 169.31 
      div.table_li.height30
        div V100
        div 5120
        div 16
        div.width60
          div.line
            div 8
            div 2048
            div 1509.22 
            div 766.68 
            div 95.84  
      div.table_li.height30
        div V100
        div 5120
        div 32
        div.width60
          div.line
            div 8
            div 2048
            div 1809.14 
            div 919.04 
            div 114.88 
      div.table_li.height30
        div H100 SXM5
        div 16896
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 3726.36 
            div 1892.99 
            div 236.62  
      div.table_li.height30
        div H100 PCIe
        div 14592
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 3518.47 
            div 1787.39 
            div 223.42 
      div.table_li.height30
        div H100 NVL1
        div 16896
        div 94
        div.width60
          div.line
            div 8
            div 2048
            div 3973.35 
            div 2018.46 
            div 252.31 
      div.table_li.height30
        div H800 SXM5
        div 16896
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 3726.36 
            div 1892.99 
            div 236.62  
      div.table_li
        div 4060
        div 3072
        div 8
        div.width60
          div.line
            div 4
            div 128
            div 334.87 
            div 170.11 
            div 42.53 
          div.line
            div 4
            div 512
            div 444.58 
            div 225.85 
            div 56.46 
      div.table_li
        div 4060ti
        div 4352
        div 8
        div.width60
          div.line
            div 4
            div 128
            div 372.59
            div 189.28 
            div 47.32 
          div.line
            div 4
            div 512
            div 482.31 
            div 245.01 
            div 61.25 
      div.table_li
        div 4060ti
        div 4352
        div 16
        div.width60
          div.line
            div 4
            div 128
            div 470.35 
            div 238.94 
            div 59.74 
          div.line
            div 4
            div 512
            div 580.07 
            div 294.67 
            div 73.67 
      div.table_li
        div 4070
        div 5888
        div 12
        div.width60
          div.line
            div 4
            div 128
            div 472.80 
            div 240.18 
            div 60.05 
          div.line
            div 4
            div 512
            div 582.51 
            div 295.92 
            div 73.98 
      div.table_li.height30
        div 4070 SUPER
        div 7168
        div 12
        div.width60
          div.line
            div 4
            div 128
            div 507.55
            div 257.84
            div 64.46
      div.table_li
        div 4070ti
        div 7680
        div 12
        div.width60
          div.line
            div 4
            div 128
            div 520.57 
            div 264.45 
            div 66.11 
          div.line
            div 4
            div 512
            div 630.29 
            div 320.19 
            div 80.05
      div.table_li.height30
        div 4070 Ti Super
        div 8448
        div 16
        div.width60
          div.line
            div 4
            div 128
            div 601.62
            div 305.62
            div 76.41
      div.table_li
        div 4080
        div 9728
        div 16
        div.width60
          div.line
            div 4
            div 128
            div 635.61 
            div 322.89 
            div 80.72 
          div.line
            div 4
            div 512
            div 745.32 
            div 378.62
            div 94.66  
      div.table_li.height30
        div 4080 SUPER
        div 10240
        div 16
        div.width60
          div.line
            div 4
            div 128
            div 648.57
            div 329.47
            div 82.37
      div.table_li
        div 4080ti
        div 14080
        div 20
        div.width60
          div.line
            div 4
            div 128
            div 807.81 
            div 410.37 
            div 102.59 
          div.line
            div 4
            div 512
            div 917.52 
            div 466.10 
            div 116.53  
      div.table_li
        div 4090
        div 16384
        div 24
        div.width60
          div.line
            div 4
            div 128
            div 929.76 
            div 472.32 
            div 118.08 
          div.line
            div 4
            div 512
            div 1039.47 
            div 528.05 
            div 132.01 
      div.table_li
        div 4090ti
        div 18176
        div 24
        div.width60
          div.line
            div 4
            div 128
            div 972.01 
            div 493.78 
            div 123.45 
          div.line
            div 4
            div 512
            div 1081.72 
            div 549.52 
            div 137.38 
    div 地域系数如下：
    div.table1
      div.table_con
        div 地域系数
        div 系数
        div 地域系数
        div 系数
      div.table_li
        div 中国大陆
        div 1
        div 北美
        div 1.2
      div.table_li
        div 南美
        div 1.3
        div 欧洲
        div 1.5
      div.table_li
        div 中东
        div 1.6
        div 韩国
        div 1.6
      div.table_li
        div 日本
        div 1.7
        div 中国台湾
        div 1.3
      div.table_li
        div 中国香港和澳门
        div 1.3
        div 马来西亚
        div 1.5
      div.table_li
        div 印尼
        div 1.5
        div 新加坡
        div 1.5
      div.table_li
        div 越南
        div 1.3
    div 大模型系数，支持大模型的机器算力值*2
    div.table2
      div.table_con
        div 显卡类型
        div Cuda core
        div 显存
        div 显卡类型
        div Cuda core
        div 显存
      div.table_li
        div A100 PCIe
        div 6912
        div 40
        div A100 PCIe
        div 6912
        div 80
      div.table_li
        div A100 SXM4
        div 6912
        div 40
        div A100 SXM4
        div 6912
        div 80
      div.table_li
        div A800 PCIe
        div 6912
        div 40
        div A800 PCIe
        div 6912
        div 80
      div.table_li
        div A800 SXM5
        div 6912
        div 80
        div V100
        div 5120
        div 16
      div.table_li
        div V100
        div 5120
        div 32
        div H100 SXM5
        div 16896
        div 80
      div.table_li
        div H100 PCIe
        div 14592
        div 80
        div H100 NVL1
        div 16896
        div 94
      div.table_li
        div H800 SXM5
        div 16896
        div 80
    div 机器算力值计算公式：(25 * 卡数 + 内存/3.5 + (√(cuda数量) * √(显存/10)) * 显卡数量)*地域系数*大模型系数
    div.select
      div.topcon
        div.topitem 机器型号: 
          el-select.select_width210(v-model="gpu_type1", size='mini', placeholder="请选择" @change='SelectGPU1')
            el-option( v-for="(item, index) in options" , :key="item.value", :label="item.name + '-Mem:' + item.men", :value="item.cuda+'_'+item.men+'_'+item.large+'_'+index")
        div.topitem 显卡数量: 
          el-select.select_width100(v-model="gpu_num1", size='mini', placeholder="请选择" @change='SelectGpuNum1')
            el-option( v-for="item in options1" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem 内存数量: 
          el-select.select_width100(v-model="mem_num1", size='mini', placeholder="请选择" @change='SelectMem1')
            el-option( v-for="(item, index) in options2_1" , :key="item.value", :label="item.name", :value="item.value")
        div.topitem 地域: 
          el-select.select_width200(v-model="local1", size='mini', placeholder="请选择" @change='SelectLocal1')
            el-option( v-for="(item, index) in options3" , :key="index", :label="item.name", :value="item.value +'_'+index")
    div 当前机器算力值为: {{machinePoints}}
  div.rule-title 三、比赛奖励计算规则
  div.rule-content
    div 影响算工DBC奖励的几个因素：
    ul
      li 服务器设备的整机算力值
      li 拥有的GPU数量
      li 单个钱包拥有的GPU数量，单个钱包每多拥有一个GPU，所有机器点数增加0.01%，一直到增加10%为止
      li GPU是否被租用，被租用的GPU算力值增加30%
      li 算工每日获得的奖励=算工拥有的算力值占全网算力值的比例*547,945DBC，其中25%立马获得，75%释放150天，每天释放0.5%
  div.rule-title.fs16 机器每月收益计算
  div.rule-content
    div 机器每月收益计算公式：整机算力值/全网总算力值*547,945*DBC价格*地域系数*大模型系数*1.3（被租用算力值增加30%）*30+整机算力值*地域系数*大模型系数*0.508*70%
    div.select
      div.topcon
        div.topitem 机器型号: 
          el-select.select_width210(v-model="gpu_type", size='mini', placeholder="请选择" @change='SelectGPU')
            el-option( v-for="(item, index) in options" , :key="item.value", :label="item.name + '-Mem:' + item.men", :value="item.cuda+'_'+item.men+'_'+item.large+'_'+index")
        div.topitem 显卡数量: 
          el-select.select_width100(v-model="gpu_num", size='mini', placeholder="请选择" @change='SelectGpuNum')
            el-option( v-for="item in options1" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem 内存数量: 
          el-select.select_width100(v-model="mem_num", size='mini', placeholder="请选择" @change='SelectMem')
            el-option( v-for="(item, index) in options2" , :key="item.value", :label="item.name", :value="item.value")
        div.topitem 地域: 
          el-select.select_width200(v-model="local", size='mini', placeholder="请选择" @change='SelectLocal')
            el-option( v-for="(item, index) in options3" , :key="index", :label="item.name", :value="item.value +'_'+index")
    div 当前每月收益为: {{Income}} USD等值DBC =  链上奖励收益: {{price3}} DBC(等值 {{ price1 }} USD 当前DBC价格: {{dbcPrice}} USD)+租金收益: {{ price2 }} USD等值DBC
  div.rule-title 四、惩罚机制
  div.rule-content
    div 无论上线机器或者下线机器都需要算工自己主动发送链上通知，如果机器出现问题，不主动发送链上通知，惩罚将会更加严重。机器一旦正式上链成功，则以后不能修改任何硬件配置信息。当机器闲置且同时处于下线状态，可以修改带宽和经纬度信息。当机器收到惩罚只扣除质押币，历史的奖励但是要在未来150天发放的这部分不会被扣除，但是没有新的在线奖励.当机器押金不足90%处于警告状态，当机器押金不足80%，将会没有在线奖励.
    | 质押数量：
  div.rule-content
    div 1). 验证人需要预先质押2万dbc
    div 2). 举报人需要预先质押2万dbc，否则无法举报
    div 3). 当验证人押金剩余50%时处于警告状态，当验证人押金不足40%则取消验证人资格。每次抢单消耗1000质押，订单状态完成，1000质押退还
  div.rule-title 1.算工主动发送下线通知的情况下：
  div.rule-title.fs16 只要机器上链不满一年，无论空闲多长时间，只要下线就惩罚
  div.rule-content
    div 1). 机器在被租用状态
      ul
        li 下线机器大于3分钟不超过7分钟，没有新的在线奖励，扣除2%质押币。100%进入国库。
        li 下线机器超过7分钟，扣除4%质押币。100%进入国库。
        li 下线机器超过48h，扣除30%质押币，10%给到用户，90%进入国库。
        li 下线机器超过120h，扣除50%押金。10%给到用户，90%进入国库。
    div 2). 机器在空闲状态
      ul
        //- li 处于空闲状态超过10天，此时下线机器，没有新的在线奖励，旧的奖励仍然线性释放。(机器下线后，如果机器从首次上线时间起超过365天，可以申请退回押金)
        li 处于空闲状态不到10天，此时下线机器，没有新的在线奖励，扣除2%质押币，质押币全部进入国库。
        li 处于空闲状态不到10天，此时下线机器超过7分钟，扣除4%质押币，质押币全部进入国库。
        li 处于空闲状态不到10天，此时下线机器超过48h，扣除30%质押币，质押币全部进入国库。
        li 处于空闲状态不到10天，此时下线机器超过240h，扣除80%质押币。质押币全部进入国库。如果机器从首次上线时间起超过365天，剩下20%押金可以申请退回。
  div.rule-title 2.算工没有主动发送下线通知，被举报的情况下：
  div.rule-content
    div 如果机器出问题，但是算工并没有发下线通知，而是被报告人被举报了。举报后，验证人抢单，并且验证机器是否有问题。机器处于租用状态，只有用户可以举报。
  div.rule-content
    div 1). 当机器处于租用状态，此时机器无法访问
      ul
        li 下线机器大于3分钟不超过7分钟，没有新的在线奖励，扣除4%质押币。10%给验证人，90%进入国库。
        li 下线超过7分钟，扣除8%质押币。10%给验证人，90%进入国库。
        li 下线超过48h，扣除60%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过120h，扣除100%押金。10%给到用户，20%给到验证人，70%进入国库。
    div 2). 当机器处于租用状态，此时确定机器硬件出现故障：
      ul
        li 下线不超过4小时，没有新的在线奖励，则扣除6%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过4小时，则扣除12%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过24小时，则扣除16%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过48小时，则扣除60%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过120小时，则扣除100%押金，10%给到用户，20%给到验证人，70%进入国库。
    div 3). 当机器处于租用状态，此时确定硬件参数配置造假（带宽实际值低于30%，经纬度误差在方圆30公里以外，或者其他硬件参数不一致）
      ul
        li 下线不超过4小时，没有新的在线奖励，则扣除12%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过4小时，则扣除24%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过24小时，则扣除32%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过48小时，则扣除60%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过120小时，则扣除100%押金，10%给到用户，20%给到验证人，70%进入国库。
    div 4). 当机器处于闲置状态，此时确定机器无法租用
      ul
        li 下线不超过4小时，没有新的在线奖励，则扣除6%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过4小时，则扣除12%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过24小时，则扣除16%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过48小时，则扣除60%质押币。10%给到用户，20%给到验证人，70%进入国库。
        li 下线超过120小时，则扣除100%押金，10%给到用户，20%给到验证人，70%进入国库。
  div.rule-title 五、申诉规则
  div.rule-content
    div 1. 如果机器被恶意举报，算工48小时内可以申诉，否则无效。如果申诉通过，取消任何惩罚。如果申诉不通过，所有惩罚翻倍。
    div 2. 如果确认报告人恶意举报，则扣除举报人10%等值dbc押金。报告人也可以48小时内申诉。
    div 3. 如果验证人是少数派或者恶意验证，则扣除验证人10%等值dbc押金。验证人也可以48小时内申诉。
    div 4. 任何一次举报，算工、举报人、验证人只要其中一个申诉过，其他不能再次申诉。
  div.rule-title 六、解质押币规则
  div.rule-content
    div 1. 当机器首次上线满足365天，可以重新质押，重新质押根据当前全网GPU数量以及币价重新计算需要新的质押币数量，如果新的质押币数量低于原来质押币，则解押差额的币。每间隔365天可以进行一次操作。
    div 2. 当机器首次上线满足365天，且机器闲置超过10天，则可以下线机器，解押所有币。
  div.rule-title 七、联系方式
  div.rule-content
    div 算工有任何问题可以咨询邮箱：feng@deepbrainchain.org
    //- div.rule-content
    //-   div 联系方式：
    //-     ul
    //-       li 邮箱：zhouyu@deepbrainchain.org；leo@deepbrainchain.org
    //-       li 微信：DeepBrainChain；DBC-Leo
    //-       li Telegram：18221230521；13681709317
  //- div.rule-title 声明
  //- div.rule-content 如果在比赛中发现了严重的BUG, 深脑链团队可能会提前结束比赛。在发现BUG之前的一段时间内仍然会得到奖励。如果将这样的BUG向深脑链团队披露，报告该BUG的团队将有资格获得最高达300万 DBC的奖励，具体取决于BUG的严重程度，由深脑链团队决定。
</template>
<style lang="less" scoped >
.li-style {
  margin-top: 0;
  padding-left: 20px;
  li {
    position: relative;
    margin: 10px 0;
    &::before {
      position: absolute;
      left: -15px;
      top: 12px;
      margin-top: -4px;
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: currentColor;
      border-radius: 100%;
      transform: scale(0.5);
    }
    span {
      font-weight: bold;
    }
  }
}
.rule-content {
  font-family: PingFang SC, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #666666;
  ul& {
    .li-style;
  }
  ul {
    .li-style;
  }
  .ruleimg{
    width: 100%;
  }
  .table {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #333;
    .table_con {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: space-between;
      border-bottom: 1px solid #333;
      div {
        width: 12.5%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 30px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:last-child {
          border: none;
        }
      }
    }
    .table_li {
      width: 100%;
      min-height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #333;
      &:last-child {
        border: none;
      }
      div {
        width: 12.5%;
        min-height: 60px;
        text-align: center;
        line-height: 60px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:last-child {
          border: none;
        }
      }
      .width60{
        width: 62.5%;
        display: flex;
        align-items: center;
        flex-direction: column;
        div.line{
          width: 100%;
          display: flex;
          min-height: 30px;
          line-height: 30px;
          align-items: center;
          border-bottom: 1px solid #333;
          border-right: none;
          &:last-child {
            border: none;
          }
          div{
            width: 33.333%;
            min-height: 30px;
            line-height: 30px;
            &:last-child {
              border: none;
            }
          }
        }
      }
      &.height30{
        div {
          min-height: 30px;
          line-height: 30px;
        }
      }
    }
    .hide{
      display: none;
    }
  }
  .table1 {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #333;
    .table_con {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: space-between;
      border-bottom: 1px solid #333;
      div {
        width: 25%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 30px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:last-child {
          border: none;
        }
      }
    }
    .table_li {
      width: 100%;
      min-height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid #333;
      &:last-child {
        border: none;
      }
      div {
        width: 25%;
        min-height: 40px;
        text-align: center;
        line-height: 40px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:nth-child(4n) {
          border: none;
        }
      }
    }
  }
  .table2 {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #333;
    .table_con {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: flex-start;
      border-bottom: 1px solid #333;
      div {
        width: 16.6%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 30px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:last-child {
          border: none;
        }
      }
    }
    .table_li {
      width: 100%;
      min-height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid #333;
      &:last-child {
        border: none;
      }
      div {
        width: 16.6%;
        min-height: 40px;
        text-align: center;
        line-height: 40px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:nth-child(6n) {
          border: none;
        }
      }
    }
  }
  .select{
    width: 100%;
    padding: 5px 0;
    box-sizing: border-box;
    .topcon{
      // padding: 0 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .topitem{
        color: #333;
        font-size: 14px;
        margin-right: 15px;
        margin-bottom: 10px;
        &.bold{
          font-weight: bold;
        }
        .select_width210{
          width: 210px;
        }
        .select_width200{
          width: 200px;
        }
        .select_width60 {
          width: 60px;
        }
        .select_width100 {
          width: 100px;
        }
      }
    }
  }
}
.rule-title {
  font-family: PingFang SC, sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
  margin-bottom: 10px;
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
  &.fs16{
    font-size: 16px;
  }
}
.rule-wrapper {
  margin: 32px auto;
  box-sizing: border-box;
  padding: 26px;
  width: 1000px;
  // height: 660px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(153, 146, 185, 0.06);
  border-radius: 6px;
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
  .rule-wrapper {
    .rule-title{
      line-height: 1.3;
    }
    .rule-content{
      line-height: 1.2;
      .table {
        .table_con {
          height: 10vw;
          div {
            height: 10vw;
            line-height: 1.2;
          }
        }
      }
    }
  }
}
</style>
<script>
import { defineComponent, ref, onMounted } from "vue";
import { getRewardInfo } from "../apis";
import { dbcPriceOcw } from '../untils/index'
export default defineComponent({
  name: "rule",
  setup() {
    const gpu_type = ref('')
    const gpu_num = ref('')
    const mem_num = ref('')
    const local = ref('')
    const gpu_type1 = ref('')
    const gpu_num1 = ref('')
    const mem_num1 = ref('')
    const local1 = ref('')
    const numList = ref([])
    const options = ref([
      {name: '1080', cuda: '2560', men: '8', large: 1},
      {name: '1080ti', cuda: '3584', men: '11', large: 1},
      {name: '1660', cuda: '1408', men: '6', large: 1},
      {name: '1660ti', cuda: '1536', men: '6', large: 1},
      {name: '1660s', cuda: '1408', men: '6', large: 1},
      {name: '2070s', cuda: '2560', men: '8', large: 1},
      {name: '2080', cuda: '2944', men: '8', large: 1},
      {name: '2080s', cuda: '3072', men: '8', large: 1},
      {name: '2080ti', cuda: '4352', men: '11', large: 1},
      {name: '3060', cuda: '3584', men: '12', large: 1},
      {name: '3060ti', cuda: '4864', men: '8', large: 1},
      {name: '3070', cuda: '5888', men: '8', large: 1},
      {name: '3070ti', cuda: '6144', men: '8', large: 1},
      {name: '3080', cuda: '8704', men: '10', large: 1},
      {name: '3080ti', cuda: '10240', men: '12', large: 1},
      {name: '3090', cuda: '10496', men: '24', large: 1},
      {name: 'A4000', cuda: '6144', men: '16', large: 1},
      {name: 'A5000', cuda: '8192', men: '24', large: 1},
      {name: 'A40', cuda: '10752', men: '48', large: 1},
      {name: 'A100 PCIe', cuda: '6912', men: '40', large: 2},
      {name: 'A100 PCIe', cuda: '6912', men: '80', large: 2},
      {name: 'A100 SXM4', cuda: '6912', men: '40', large: 2},
      {name: 'A100 SXM4', cuda: '6912', men: '80', large: 2},
      {name: 'A800 PCIe', cuda: '6912', men: '40', large: 2},
      {name: 'A800 PCIe', cuda: '6912', men: '80', large: 2},
      {name: 'A800 SXM5', cuda: '8192', men: '80', large: 2},
      {name: 'V100', cuda: '5120', men: '16', large: 2},
      {name: 'V100', cuda: '5120', men: '32', large: 2},
      {name: 'H100 SXM5', cuda: '16896', men: '80', large: 2},
      {name: 'H100 PCIe', cuda: '14592', men: '80', large: 2},
      {name: 'H100 NVL1', cuda: '16896', men: '94', large: 2},
      {name: 'H800 SXM5', cuda: '16896', men: '80', large: 2},
      {name: '4060', cuda: '3072', men: '8', large: 1},
      {name: '4060ti', cuda: '4352', men: '8', large: 1},
      {name: '4060ti', cuda: '4352', men: '16', large: 1},
      {name: '4070', cuda: '5888', men: '12', large: 1},
      {name: '4070 SUPER', cuda: '7168', men: '12', large: 1},
      {name: '4070ti', cuda: '7680', men: '12', large: 1},
      {name: '4070 Ti Super', cuda: '8448', men: '16', large: 1},
      {name: '4080', cuda: '9728', men: '16', large: 1},
      {name: '4080 SUPER', cuda: '10240', men: '16', large: 1},
      {name: '4080ti', cuda: '14080', men: '20', large: 1},
      {name: '4090', cuda: '16384', men: '24', large: 1},
      {name: '4090ti', cuda: '18176', men: '24', large: 1}
    ])
    const options1 = ref([
      {label: 1, value: 1},
      {label: 2, value: 2},
      {label: 3, value: 3},
      {label: 4, value: 4},
      {label: 5, value: 5},
      {label: 6, value: 6},
      {label: 7, value: 7},
      {label: 8, value: 8}
    ])
    const options2 = ref([])
    const options2_1 = ref([])
    const options3 = ref([
      { name: '中国大陆', key: 1, value: 1 },
      { name: '北美', key: 2, value: 1.2 },
      { name: '南美', key: 3, value: 1.3 },
      { name: '欧洲', key: 4, value: 1.5 },
      { name: '中东', key: 5, value: 1.6 },
      { name: '韩国', key: 6, value: 1.6 },
      { name: '日本', key: 7, value: 1.7 },
      { name: '中国台湾', key: 8, value: 1.3 },
      { name: '中国香港和澳门', key: 9, value: 1.3 },
      { name: '马来西亚', key: 10, value: 1.5 },
      { name: '印尼', key: 11, value: 1.5 },
      { name: '新加坡', key: 12, value: 1.5 },
      { name: '越南', key: 13, value: 1.3 }
    ])

    const Income = ref(0) // 月收益
    const dbcPrice = ref(0) // dbc价格
    const price1 = ref(0)
    const price2 = ref(0)
    const price3 = ref(0)
    const countVideo_num = ref(0) // 显存
    const countGpu_num = ref(0) // 显卡数量
    const countMem_num = ref(0) // 内存
    const countLarge_num = ref(1) // 大模型系数
    const countCuda_core = ref(0) // cuda数量
    const countLocal_num = ref(0) // 地域系数
    const totalCalcPoints = ref(0) // 总算力值
    const machineCalcPoints = ref(0) // 整机算力值

    const machinePoints = ref(0) // 整机算力值
    const countVideo_num1 = ref(0) // 显存
    const countGpu_num1 = ref(0) // 显卡数量
    const countMem_num1 = ref(0) // 内存
    const countLarge_num1 = ref(1) // 大模型系数
    const countCuda_core1 = ref(0) // cuda数量
    const countLocal_num1 = ref(0) // 地域系数
    
    const SelectGPU1 = (val) => {
      const arr = val.split('_')
      countCuda_core1.value = arr[0]
      countVideo_num1.value = arr[1]
      countLarge_num1.value = arr[2]
      machineCalc()
    }
    const SelectGpuNum1 = (val) => {
      countGpu_num1.value = val
      options2_1.value = []
      mem_num1.value = ''
      for (let i = 0; i < numList.value.length; i ++) {
        let mem_value = val * numList.value[i]
        options2_1.value.push({ name: mem_value, value: mem_value })
      }
      mem_num1.value = val * numList.value[0]
      countMem_num1.value = val * numList.value[0]
      machineCalc()
    }
    const SelectMem1 = (val) => {
      countMem_num1.value = val
      machineCalc()
    }
    const SelectLocal1 = (val) => {
      const arr = val.split('_')
      countLocal_num1.value = arr[0]
      machineCalc()
    }
    const machineCalc = () => {
      if (countCuda_core1.value&&countVideo_num1.value&&countGpu_num1.value
      &&countMem_num1.value&&countLarge_num1.value&&countLocal_num1.value) {
        machinePoints.value = countPoint(countGpu_num1.value, countMem_num1.value, countCuda_core1.value, countVideo_num1.value, countLocal_num1.value)*countLarge_num1.value
      }
    }

    const SelectGPU = (val) => {
      const arr = val.split('_')
      countCuda_core.value = arr[0]
      countVideo_num.value = arr[1]
      countLarge_num.value = arr[2]
      MonthlyIncome()
    }
    const SelectGpuNum = (val) => {
      countGpu_num.value = val
      options2.value = []
      mem_num.value = ''
      for (let i = 0; i < numList.value.length; i ++) {
        let mem_value = val * numList.value[i]
        options2.value.push({ name: mem_value, value: mem_value })
      }
      mem_num.value = val * numList.value[0]
      countMem_num.value = val * numList.value[0]
      MonthlyIncome()
    }
    const SelectMem = (val) => {
      countMem_num.value = val
      MonthlyIncome()
    }
    const SelectLocal = (val) => {
      const arr = val.split('_')
      countLocal_num.value = arr[0]
      console.log(val, arr, 'aaa')
      MonthlyIncome()
    }
    const countPoint = (Gpu_Num, Mem, Cuda, M_value, coe) => {
      var num = Math.round(((Gpu_Num*25+ Mem/3.5 + Math.sqrt(Cuda) * Math.sqrt(M_value/10)*Gpu_Num)*coe) * 100) / 100
      return num
    }
    const MonthlyIncome = () => {
      if (countCuda_core.value&&countVideo_num.value
      &&dbcPrice.value&&countGpu_num.value
      &&countMem_num.value&&countLarge_num.value
      &&countLocal_num.value&&totalCalcPoints.value) {
        machineCalcPoints.value = countPoint(countGpu_num.value, countMem_num.value, countCuda_core.value, countVideo_num.value, countLocal_num.value)
        
        price1.value = Math.round((machineCalcPoints.value/totalCalcPoints.value*547945*dbcPrice.value*1.3*30)*countLarge_num.value*100) / 100
        price2.value = Math.round((machineCalcPoints.value*0.508)*countLarge_num.value*100*0.7) / 100
        price3.value = Math.round((machineCalcPoints.value/totalCalcPoints.value*547945*1.3*30)*countLarge_num.value*100) / 100
        Income.value = Math.round((machineCalcPoints.value/totalCalcPoints.value*547945*dbcPrice.value*1.3*30+machineCalcPoints.value*0.508*0.7)*countLarge_num.value*100) / 100
      }
    }
    const getPrice = async () => {
      const priceNum = await dbcPriceOcw()
      dbcPrice.value = priceNum/1000000
      const rewardInfo = await getRewardInfo();
      totalCalcPoints.value = rewardInfo.totalCalcPoints/100
    }
    onMounted(() => {
      for (let i = 1; i < 33; i ++) {
        numList.value.push(16*i)
      }
      getPrice()
    })
    return {
      gpu_type,
      gpu_num,
      mem_num,
      local,
      gpu_type1,
      gpu_num1,
      mem_num1,
      local1,
      Income,
      price1,
      price2,
      price3,
      dbcPrice,
      machinePoints,
      options,
      options1,
      options2,
      options2_1,
      options3,
      SelectGPU,
      SelectGpuNum,
      SelectMem,
      SelectLocal,
      SelectGPU1,
      SelectGpuNum1,
      SelectMem1,
      SelectLocal1
    };
  }
});
</script>