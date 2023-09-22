<template lang="pug">
div.description
  | The DeepBrain Chain Galaxy Computing Power Race Incentive Program is a collaborative race to stress test the network, it encourages participation from miners around the world, and help prepare miners to operate the world's largest high-performance computing network.
div.rule-wrapper
  div.rule-title Rules of the Race
  //- div.rule-content The main network of DeepBrain Chain's computing power has been launched. When the 5,000 GPU competition of the entire network is automatically activated, the competition will last for 2 months after activation. During the competition, all computing workers will share 133 million DBC rewards. The top 5 computing workers can Get an additional 30 million DBC rewards! Before the Galaxy Contest is officially activated, computing workers enjoy both rental income and online rewards. The total number of online rewards per day is 1,09589 million DBC, and 100% of the rent will be destroyed after activation!
  div.rule-content The DeepBrain Chain computing power mainnet has been launched. When 5,000 GPUs in the entire network are reached, the competition will be automatically activated. After activation, the competition will last for 2 months. During the competition, all computing workers will share 133 million DBC rewards. The top 5 computing workers can Get an additional 30 million DBC rewards! Before the official activation of the Galaxy Competition, the calculation workers enjoy the double benefits of rental income and online rewards. The total number of online rewards every day is 1.09589 million DBC. The rental destruction is divided into three stages. Phase 1: 1 card to 4999 card rent 30% is destroyed; Phase 2: 70% of rentals from 5,000 cards to 9,999 cards are destroyed; Phase 3: 100% of rentals from 10,000 cards and above are destroyed, and the Galaxy Competition starts when 5,000 cards are reached
  div.rule-title I. Minimum requirements for GPU server parameters: Only when the parameters of the computing power server meet the minimum requirements, can it be reviewed and launched by the validator, otherwise no revenue will be obtained
  div.rule-content.fs16 Computing server configuration requirements for each parameter:
  ul.rule-content
    li 
      span GPU: 
      | Minimum 1 card, cloud internet cafes recommend 4 and 6 card machines, AI recommends 8 card machines; Must have Nvidia series graphics card;
    li
      span Memory:<br>
      | Meet the requirements of cloud games: the minimum memory requirement is 16G per card. <br>
      | Meet the requirements of AI: the minimum memory requirement is 48G per card, and the minimum requirement for the whole machine is 64G (that is, the allocated memory of each card reaches 48G to pass the on-chain audit, and if it is a new machine with 4 cards, 320G memory is recommended); combined with the actual application scenario requirements of the user end, If the GPU memory is greater than or equal to 10G and the CudaCore is greater than 4000, it is recommended to configure a large memory. One card recommends 256G, two cards recommend 448G, and four cards recommend 832G.
    li
      span CPU:<br>
      | Meet the requirements of cloud games: Intel/AMD, main frequency 3.5Ghz and above; each GPU needs to be configured with a separate CPU<br>
      | Meet the requirements of AI: Intel/AMD, main frequency 2.0Ghz and above, single CPU with 8 cores and above; special attention: considering the mid-to-long-term rental rate and the 30% computing power bonus in the rental state, it is recommended The CPU of the new machine is configured as follows: Intel, V3 or above, main frequency 2.4Ghz, turbo frequency 3.0Ghz and above, a single CPU with more than 10 cores, and an average of 5 cores and 10 threads per GPU. 4-card GPU servers recommend dual CPU;
    li
      span Hard disk:<br>
      | Meet the requirements of cloud games: the system disk is 100G SSD or above, no data disk is required, and a diskless system can be used<br>
      | Meet the requirements of AI: system disk 100G SSD and above, data disk 1T nvme SSD and above (3.84T nvme SSD is recommended for new machines with 4 cards gpu server);
    li
      span Network bandwidth:<br>
      | Meet the requirements of cloud games: each GPU machine must have at least 10M bandwidth;<br>
      | Meet the requirements of AI: 4-card GPU machines have a bandwidth of more than 20M uplink and downlink, 2-card GPU machines have a bandwidth of more than 10M uplink and downlink, and the average bandwidth of each GPU is more than 5M; special attention, considering the medium and long-term rental rate, it is recommended that the machine hosting room in mainland China can Support BGP and third-line bandwidth, and other overseas regions support BGP bandwidth;
    //-   span Graphics Virtualizer:
    //-   | All on-chain server equipment needs to be equipped with a graphics card virtualizer (also known as a graphics card spoofer) with the corresponding number of graphics cards. New machines recommend 10 Gigabit network cards; machines without a graphics card virtualizer will not be able to pass the on-chain review
    li
      span 10 Gigabit network card:
      | The GPU server is at least configured with a 10 Gigabit network card;
    li
      span Each machine has an independent fixed IP :
      | Each GPU server is configured with an independent public network IP and maintains scalability. Some user scenarios require each GPU to have a public network IP, that is, 4 GPU servers need 5 IPs
    li 
      span Hosting IDC: 
      | The machine is placed in the standard data center above T3. Considering the medium and long-term occupancy rate, it is recommended that the machine be hosted in cities along the Yangtze River, coastal cities, or the surrounding areas of these cities.
    li
      span IDC room switch:
      | The access layer needs to support 10G intranet switches, the core layer switches need to be more than twice the bandwidth of the access layer, and need to support 20G intranet bandwidth;
    li 
      span Note: 
      | Each GPU can pledge up to USD 1,500 worth of DBC, and at least 100,000 DBC. Considering the stability of machine use, online income stability, and penalty mechanism, it is recommended to use a manufacturer’s brand machine instead of an assembled machine.
    li
      span Recommended switch and network architecture in the computer room: 
      | All GPU machine ETH0 network ports belong to one Vlan, and this network port is configured with server network information. All GPU server ETH1 network ports and storage server ETHx network ports belong to the same new Vlan, network ports do not need any IP configuration, and storage server ETHx network ports need to be configured with vlan information
    img.ruleimg(src="../assets/rule.png")
    li 
      span Recommended GPU model: 
      | 3080、3080Ti、3090、A5000、A6000
    li 
      span GPU server deployment for Galaxy Race document: 
      a(target="_blank" href="https://github.com/DeepBrainChain/DBC-DOC") https://github.com/DeepBrainChain/DBC-DOC
  div.rule-title Ⅱ. Computing power value calculation rules: 
  div.rule-content
    div In this model modification, the basic server value and memory are also included in the calculation model, and the rental fee of the user side in the entire ecosystem will also be unified with reference to the computing power value system for pricing. The rental income is 0.508 USD/C/month. According to the price change of GPU in the market, this parameter will be changed through community referendum.
    | The calculation model is as follows: computing power value of the whole machine = (25 * number of cards + memory/3.5 + (√(number of cuda) * √(memory/10)) * number of graphics cards ), when the local coefficient is 1, the computing power value is as follows:
    div.table
      div.table_con
        div GPU type
        div Cuda core
        div Video memory
        div Graphics card number
        div RAM(G)
        div.fs10 Computing power of the whole machine(C)
        div Machine rental(USD)
        div.fs10 Rent USD/month/card (USD)
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
    div The regional coefficients are as follows:
    div.table1
      div.table_con
        div Regional coefficient
        div Coefficient
        div Regional coefficient
        div Coefficient
      div.table_li
        div China
        div 1
        div North America
        div 1.2
      div.table_li
        div South America
        div 1.3
        div Europe
        div 1.5
      div.table_li
        div Middle East
        div 1.6
        div Korea
        div 1.6
      div.table_li
        div Japan
        div 1.7
        div Taiwan, China
        div 1.3
      div.table_li
        div Hong Kong and Macau, China
        div 1.3
        div Malaysia
        div 1.5
      div.table_li
        div Indonesia
        div 1.5
        div Singapore
        div 1.5
      div.table_li
        div Vietnam
        div 1.3
    div Large model coefficients, supporting machine computing power values for large models * 2
    div.table2
      div.table_con
        div GPU type
        div Cuda core
        div Video memory
        div GPU type
        div Cuda core
        div Video memory
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
    div Computing power value of the whole machine: (25 * number of cards + memory/3.5 + (√(number of cuda) * √(memory/10)) * number of graphics cards ) * coefficient * large model factor
    div.select
      div.topcon
        div.topitem GPU type: 
          el-select.select_width210(v-model="gpu_type1", size='mini', placeholder="choose" @change='SelectGPU1')
            el-option( v-for="(item, index) in options" , :key="item.value", :label="item.name + '-Mem:' + item.men", :value="item.cuda+'_'+item.men+'_'+item.large+'_'+index")
        div.topitem Graphics card number: 
          el-select.select_width110(v-model="gpu_num1", size='mini', placeholder="choose" @change='SelectGpuNum1')
            el-option( v-for="item in options1" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem RAM(G): 
          el-select.select_width110(v-model="mem_num1", size='mini', placeholder="choose" @change='SelectMem1')
            el-option( v-for="(item, index) in options2_1" , :key="item.value", :label="item.name", :value="item.value")
        div.topitem Regional coefficient: 
          el-select.select_width280(v-model="local1", size='mini', placeholder="choose" @change='SelectLocal1')
            el-option( v-for="(item, index) in options3" , :key="index", :label="item.name", :value="item.value +'_'+index")
    div The current machine computing power value is: {{machinePoints}}
  div.rule-title Ⅲ. Galaxy Race reward calculation rules:
  div.rule-content
    div Several factors affect the miners' DBC rewards.
    ul
      li The computing power of the server device
      li The number of GPUs owned
      li The number of GPUs owned by a single wallet. For each additional GPU owned by a single wallet, the points of all machines will increase by 0.01% until it increases by 10%.
      li Whether the GPU is rented or not, the computing power value of the rented GPU increases by 30%
      li Daily rewards obtained by computing workers = the percentage of computing power owned by computing workers in the total network computing power * 1.09589 million DBC, of which 25% are obtained immediately, 75% are released for 150 days, and 0.5% is released every day
  //- div.rule-title.fs16 Example:
  //- div.rule-content
  //-   div Assume that the amount of DBCs produced is 333,333,333 per day; the total network-wide computing power value is 800,000, and the computing power provider A adds 500 GPUs under the same wallet to the DBC network, each with a computing power value of 99, of which 450 graphic cards are in the leased state and 50 cards are idle, then
  //-   div A's Total computing power value: 450*99*(1+5%)*130%+50*99*(1+5%)=66008.25
  //-   div Reward obtained by A in 24 hours is: 66008.25 /800,000*3,333,333= 275,034.3 DBC
  div.rule-title.fs16 Machine monthly income calculation
  div.rule-content
    div The formula for calculating the monthly income of the machine: the computing power value of the whole machine / the total computing power value of the whole network * 1,095,890 * DBC price * regional coefficient * large model coefficient * 1.3 (the rented computing power value increases by 30%) * 30 + the computing power value of the whole machine *Regional coefficient*Large model coefficient*0.508
    div.select
      div.topcon
        div.topitem GPU type: 
          el-select.select_width210(v-model="gpu_type", size='mini', placeholder="choose" @change='SelectGPU')
            el-option( v-for="(item, index) in options" , :key="item.value", :label="item.name + '-Mem:' + item.men", :value="item.cuda+'_'+item.men+'_'+item.large+'_'+index")
        div.topitem Graphics card number: 
          el-select.select_width110(v-model="gpu_num", size='mini', placeholder="choose" @change='SelectGpuNum')
            el-option( v-for="item in options1" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem RAM(G): 
          el-select.select_width110(v-model="mem_num", size='mini', placeholder="choose" @change='SelectMem')
            el-option( v-for="(item, index) in options2" , :key="item.value", :label="item.name", :value="item.value")
        div.topitem Regional coefficient: 
          el-select.select_width280(v-model="local", size='mini', placeholder="choose" @change='SelectLocal')
            el-option( v-for="(item, index) in options3" , :key="index", :label="item.name", :value="item.value +'_'+index")
    div The current monthly income is: {{Income}} USD equivalent DBC = on-chain reward income: {{price3}} DBC (equivalent to {{ price1 }} USD current DBC price: {{dbcPrice}} USD)+rental income:{{ price2 }} USD equivalent DBC
  div.rule-title IV、Penalty rules
  div.rule-content
    div Regardless of whether the machine is online or offline, computing workers need to actively send on-chain notifications by themselves. If the machine fails to actively send on-chain notifications, the penalty will be more serious. Once the machine is officially on the chain successfully, you cannot modify any hardware configuration information in the future. When the machine is idle and offline at the same time, the bandwidth and latitude and longitude information can be modified. When the machine receives a penalty, only the pledged coins are deducted. The historical rewards that will be issued in the next 150 days will not be deducted, but there is no new online reward. When the machine deposit is less than 90%, it will be in a warning state, when the machine deposit is less than 80%. %, there will be no online rewards.
    | Number of pledges:
  div.rule-content
    div 1). The validator needs to pledge 20,000 dbc in advance
    div 2). The reporter needs to pledge 20,000 dbc in advance, otherwise the report cannot be reported
    div 3). When the validator's deposit is 50% remaining, it will be in a warning state. When the validator's deposit is less than 40%, the validator's qualification will be cancelled. Each time an order is rushed, 1000 pledges are consumed, and the order status is completed, 1000 pledges will be refunded
  div.rule-title 1. In the case that the machine provider takes the initiative to send offline notification:
  div.rule-title.fs16 As long as the machine has been on the chain for less than a year, no matter how long it is idle, it will be punished as long as it is offline.
  div.rule-content
    div 1). If the machine is in the leased state
      ul
        li The offline machine is more than 3 minutes but not more than 7 minutes, and there is no new online reward, and 2% pledge coins will be deducted. 100% goes to the treasury.
        li If the machine is offline for more than 7 minutes, 4% pledged coins will be deducted. 100% into the treasury
        li If the machine is offline for more than 48 hours, 30% of the pledged coins will be deducted, 10% will be given to the user, and 90% will go to the treasury.
        li If the machine is offline for more than 120 hours, 50% of the deposit will be deducted. 10% goes to users and 90% goes to the treasury.
    div 2). If the machine is in idle state
      ul
        li After being idle for more than 10 days, the machine is offline, and there is no new online reward, and the old reward is still released linearly. (After the machine is offline, if the machine is more than 365 days from the first online time, you can apply for a refund of the deposit)
        li I have been idle for less than 10 days. At this time, the machine is offline and there is no new online reward. 2% of the pledged coins will be deducted, and all the pledged coins will enter the national treasury.
        li I have been idle for less than 10 days, when the machine is offline for more than 7 minutes, 4% of pledged coins will be deducted, and all pledged coins will enter the treasury
        li After being idle for less than 10 days, when the machine is offline for more than 48 hours, 30% of the pledged coins will be deducted, and all the pledged coins will enter the national treasury.
        li If the machine has been idle for less than 10 days, and the machine is offline for more than 240 hours, 80% of the pledged coins will be deducted. All pledged coins enter the national treasury. If the machine has been online for more than 365 days since the first time it went online, the remaining 20% of the deposit can be refunded.
  div.rule-title 2. If the machine provider does not send an offline notification proactively and is reported instead:
  div.rule-content
    div If there is a problem with the machine, but the calculation worker does not send a offline notice, but the reporter has been reported. After the report, the verifier grabs the order and verifies whether there is a problem with the machine. The machine is in a leased state, and only users can report it.
  div.rule-content
    div 1). When the machine is in a rented state, the machine is not accessible at this time:
      ul
        li The offline machine is more than 3 minutes but not more than 7 minutes, and there is no new online reward, and 4% pledge coins will be deducted. 10% goes to the validator and 90% goes to the treasury.
        li When offline for more than 7 minutes, 8% pledged coins will be deducted. 10% goes to the validator and 90% goes to the treasury.
        li When offline for more than 48 hours, 60% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 120 hours, 100% deposit will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
    div 2). When the machine is in a rented state, and at this time it has been  determined that the machine has hardware failure:
      ul
        li When offline for less than 4 hours and no new online rewards, 6% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 4 hours, 12% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 24 hours, 16% of pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 48 hours, 60% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 120 hours, 100% of the deposit will be deducted, 10% will be given to the user, 20% to the validator, and 70% to the treasury.
    div 3). When the machine is in a leased state, it is determined that the hardware parameter configuration is fraudulent (the actual bandwidth value is less than 30%, the latitude and longitude error is outside 30 kilometers, or other hardware parameters are inconsistent)
      ul
        li When offline for no more than 4 hours, and no new online rewards, 12% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 4 hours, 24% of pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 24 hours, 32% of pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 48 hours, 60% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 120 hours, 100% of the deposit will be deducted, 10% will be given to the user, 20% to the validator, and 70% to the treasury.
    div 4). When the machine is in an idle state, and it is determined that the machine can not be rented
      ul
        li When offline for less than 4 hours and no new online rewards, 6% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 4 hours, 12% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 24 hours, 16% of pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 48 hours, 60% pledged coins will be deducted. 10% goes to users, 20% goes to validators, and 70% goes to the treasury.
        li When offline for more than 120 hours, 100% of the deposit will be deducted, 10% will be given to the user, 20% to the validator, and 70% to the treasury.
    div.rule-title V、Grievance rules
  div.rule-content
    div 1. If the machine is maliciously reported, the machine provider can appeal within 48 hours, otherwise it is invalid. If the complaint is passed, the network will cancel any penalties. If the complaint is not passed, all penalties are doubled.
    div 2. If it is confirmed that the reporter made a malicious report, the 10% equivalent dbc deposit of the reporter will be deducted. Reporters can also appeal within 48 hours
    div 3. If the validator is a minority or malicious verification, the validator's 10% equivalent dbc deposit will be deducted. The verifier can also appeal within 48 hours.
    div 4. In any given report, out of the three parties, machine provider, reporter and validator, as long as one of them has appealed, the other can not appeal again
  div.rule-title Ⅵ、Mechanism of unlocking the pledged DBCs
  div.rule-content
    div 1. When the machine is online for the first time for 365 days, it can be re-pledged, and the re-pledging will be based on the current number of GPU of the whole network and token price, and if the new pledged tokens are lower than the original pledged tokens, the difference will be ''un-pledged''. The operation can be performed once every 365 days.
    div 2. When the machine has been online for 365 days for the first time, and the machine has been idle for more than 10 days, the machine can be taken offline and all tokens can be released.
  div.rule-title Ⅶ、Contact details
  div.rule-content
    div If you have any questions, please contact email: feng@deepbrainchain.org
    //- div.rule-content
    //-   div Contact details：
    //-     ul
    //-       li Mail：zhouyu@deepbrainchain.org；leo@deepbrainchain.org
    //-       li WeChat：DeepBrainChain；DBC-Leo
    //-       li Telegram：18221230521；13681709317
  //- div.rule-title Disclaimer:
  //- div.rule-content If a serious bug is found during the Race, the DeepBrain Chain team may end the race early. Rewards will still be given for the period of time prior to the discovery of the bug. If such a bug is disclosed to the DeepBrain Chain team, the team reporting the bug will be eligible for a reward of up to 3 million DBC, depending on the severity of the bug, as determined by the DeepBrain Chain team.
</template>
<style lang="less" scoped>
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
    span{
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
      .fs10{
        font-size: 10px;
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
        .line{
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
        .select_width280{
          width: 280px;
        }
        .select_width60 {
          width: 60px;
        }
        .select_width110 {
          width: 110px;
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
      {name: '4070ti', cuda: '7680', men: '12', large: 1},
      {name: '4080', cuda: '9728', men: '16', large: 1},
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
      { name: 'China', key: 1, value: 1 },
      { name: 'North America', key: 2, value: 1.2 },
      { name: 'South America', key: 3, value: 1.3 },
      { name: 'Europe', key: 4, value: 1.5 },
      { name: 'Middle East', key: 5, value: 1.6 },
      { name: 'Korea', key: 6, value: 1.6 },
      { name: 'Japan', key: 7, value: 1.7 },
      { name: 'Taiwan, China', key: 8, value: 1.3 },
      { name: 'Hong Kong and Macau, China', key: 9, value: 1.3 },
      { name: 'Malaysia', key: 10, value: 1.5 },
      { name: 'Indonesia', key: 11, value: 1.5 },
      { name: 'Singapore', key: 12, value: 1.5 },
      { name: 'Vietnam', key: 13, value: 1.3 }
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
        price1.value = Math.round((machineCalcPoints.value/totalCalcPoints.value*1095890*dbcPrice.value*1.3*30)*countLarge_num.value*100) / 100
        price2.value = Math.round((machineCalcPoints.value*0.508)*countLarge_num.value*100*0.7) / 100
        price3.value = Math.round((machineCalcPoints.value/totalCalcPoints.value*1095890*1.3*30)*countLarge_num.value*100) / 100
        Income.value = Math.round((machineCalcPoints.value/totalCalcPoints.value*1095890*dbcPrice.value*1.3*30+machineCalcPoints.value*0.508*0.7)*countLarge_num.value*100) / 100
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
