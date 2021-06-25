<template lang="pug">
div.description
  | The DeepBrain Chain Galaxy Computing Power Race Incentive Program is a collaborative race to stress test the network, it encourages participation from miners around the world, and help prepare miners to operate the world's largest high-performance computing network.
div.rule-wrapper
  div.rule-title Rules of the Race
  div.rule-content Galaxy Computing Power Race public test phase 1 is from July 18th, 2021 Beijing time - August 17th, 2021; public test phase 2 is from August 18th, 2021 Beijing time - September 17th, 2021. Galaxy Computing Power Race mainnet deployment online is Beijing time September 18th, 2021, when the whole network reaches 5,000 GPU the race is automatically activated, after the activation the race will continue for 2 months, during the race period all miners together will divide 133 million DBC rewards,  the top 5 miners can get an additional 30 million DBC rewards!Before the official activation of the Galaxy Race, the miners enjoy the double income of rental income and online rewards, with a total monthly online reward of 33.33 million DBC, and 100% destruction/burning of the rent after activation!
  div.rule-title I. Computing power server configuration requirements. Computing server parameters: only when a machine meets the minimum requirements will it pass the online audit, otherwise it can not obtain node revenue.

  div.rule-content(style='font-size:16px') Computing server configuration requirements for each parameter:
  ul.rule-content
    li 
      span GPU: 
      | minimum 1 card, recommended 2 or 4 cards. Nvidia's Nvidia series graphics cards, with a minimum requirement of 8G video memory. Considering the rental rate, the type of graphics card recommended are: 3080ti, 3080, 3090, 3070ti, 2080ti, 3070, etc. Notes on the configuration of DBC Computing Server:In case of newly configured machines, one graphics deceiver per GPU is required.
    li 
      span Memory: 
      | Minimally 1 graphic card needs 224g, 2 cards - 224g, 3 cards 336g, 4 cards - 448g, and so on.
    li 
      span CPU: Intel/AMD: 
      | Main frequency 2.0Ghz and above, single CPU 8 cores and above, with an average of 8 or more cores per GPU. Important Notes: Considering the medium and long-term rental rate, as well as the 30% bonus of computing power value in the rental state, it is recommended that the CPU of the new machine be configured as follows:
      | Intel, V3 or above, main frequency 2.5Ghz, core frequency 3.0Ghz and above, single CPU 10 cores or above, average each GPU allocated 5 cores 10 threads or above, 4 cards GPU server recommended dual CPU.
    li 
      span Hard disk: 
      | GPU machine with 4 graphic cards and below: system disk 480G and above (SSD), data disk 2T and above (mechanical hard disk is also acceptable). GPU machine with 4 graphic cards and/or above: system disk 1T ssd, data disk 4T (mechanical hard disk is also acceptable).
    li 
      span Network bandwidth: 
      | GPU machine with 4 graphic cards: uplink and downlink bandwidth 20M or more; GPU machine with 2 cards: uplink and downlink bandwidth 10M or more, an average of 5M bandwidth per GPU or more. ＊Important Notes: considering the medium and long-term rental rate, it is recommended that the machine is hosted somewhere that supports three-line bandwidth (see Chinese telecom companies: CMCC, CUCC, CTCC), which can be flexibly adjusted according to user needs.
    li 
      span Each machine has an independent fixed IP 
    li 
      span Hosting IDC: 
      | the machine is placed in a standard data center T3 or higher, taking into account the rental occupancy rate, it is recommended that the machine be hosted in cities along the Yangtze River, coastal cities, or the surrounding areas of these cities, with priority recommended for East China, South China; Southwest, Central China, North China placed in moderation;
    li 
      span Note: 
      | taking into account the stability of machine use and online reward stability, and there is a pledge, it is recommended to use the manufacturer brand machines, assembly machines not recommended.
    li 
      span GPU server deployment for Galaxy Race document: 
      a(target="_blank" href="https://github.com/DeepBrainChain/DBC-DOC") https://github.com/DeepBrainChain/DBC-DOC
  div.rule-title II. Computing power value calculation rules: 
  div.rule-content
    div A single GPU's computing power value has two impact indicators: the number of GPU Cuda Core and video memory size, the number of GPU Cuda Core accounts for 70%, and video memory accounts for 30%. 3080ti is the reference standard. GPU computing power value calculation formula: Base computing power value = 13 + 0.7 x √(number of cuda) + 0.3 x  memory/24 x √(number of cuda) In the above formula, √ indicates the square root, and some of the graphics card base computing power value reference is as follows:
    //- div 2080ti算力点数：4352=4352*80%+4352*11/11*20%
    //- div 3070算力点数：5302=5608*80%+5608*8/11*20%
    //- div 3070Ti 8G显存版本算力点数：5734=6144*80%+6144*8/11*20%
    //- div 3070Ti 16G显存版本算力点数：6703=6144*80%+6144*16/11*20%
    //- div 3080算力点数：8546=8704*80%+8704*10/11*20%
    //- div 3080Ti算力点数：10426=10240*80%+10240*12/11*20%
    //- div 3090算力点数：12977=10496*80%+10496*24/11*20%
    div.table
      div.table_con
        div GPU type
        div Cuda core
        div Video memory
        div Computing Power Value
      div.table_li
        div 2080ti
        div 4352
        div 11
        div 68.25
      div.table_li
        div 3060ti
        div 4864
        div 8
        div 68.79
      div.table_li
        div 3070
        div 5888
        div 8
        div 74.39
      div.table_li
        div 3070ti
        div 6144
        div 8
        div 75.71
      div.table_li
        div 3080
        div 8704
        div 10
        div 89.96
      div.table_li
        div 3080ti
        div 10240
        div 12
        div 99.01
      div.table_li
        div 3090
        div 10496
        div 24
        div 115.45
  div.rule-title Galaxy Race reward calculation rules:
  div.rule-content
    div Several factors affect the miners' DBC rewards.
    ul
      li 1) The computing power value of each GPU
      li 2) The number of GPUs owned
      li 3) The number of GPUs owned by a single wallet, for each additional GPU owned by a single wallet, the value of all machines increases by 0.01%, until it increases by 10%
      li 3) Whether the GPU is rented or not, the computing power value of the rented GPU increases by 30%
      li Miner's daily reward = the proportion of the miner's computing power value of the whole network * 3.33 million DBC, of which 25% is immediately released, 75% is released in the next 150 days, 0.5% is released every day
  div.rule-title(style='font-size:16px') Example:
  div.rule-content
    div Assume that the amount of DBCs produced is 333,333,333 per day; the total network-wide computing power value is 800,000, and the computing power provider A adds 500 GPUs under the same wallet to the DBC network, each with a computing power value of 99, of which 450 graphic cards are in the leased state and 50 cards are idle, then
    div A's Total computing power value: 450*99*(1+5%)*130%+50*99*(1+5%)=66008.25
    div Reward obtained by A in 24 hours is: 66008.25 /800,000*3,333,333= 275,034.3 DBC
  div.rule-title Disclaimer:
  div.rule-content If a serious bug is found during the Race, the DeepBrain Chain team may end the race early. Rewards will still be given for the period of time prior to the discovery of the bug. If such a bug is disclosed to the DeepBrain Chain team, the team reporting the bug will be eligible for a reward of up to 3 million DBC, depending on the severity of the bug, as determined by the DeepBrain Chain team.
</template>
<style lang="less">
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
  .table{
    width: 800px;
    margin: 10px auto;
    border: 1px solid #333;
    .table_con{
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: space-between;
      border-bottom: 1px solid #333;
      div{
        width: 200px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:last-child{
          border: none;
        }
      }
    }
    .table_li{
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #333;
      &:last-child{
        border: none;
      }
      div{
        width: 200px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:last-child{
          border: none;
        }
      }
    }
  }
}
.rule-title {
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
  margin-bottom: 10px;
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
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
</style>
