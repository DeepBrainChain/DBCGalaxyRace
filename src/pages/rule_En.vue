<template lang="pug">
div.description
  | The DeepBrain Chain Galaxy Computing Power Race Incentive Program is a collaborative race to stress test the network, it encourages participation from miners around the world, and help prepare miners to operate the world's largest high-performance computing network.
div.rule-wrapper
  div.rule-title Rules of the Race
  div.rule-content The public beta of the Galaxy Hash Power Contest is from July 18, 2021, Beijing time to August 17, 2021, and the public test of the Galaxy Hash Power Contest is from August 18, 2021, to September 17, 2021, Beijing time. The pre-mainnet deployment will go live on September 18, 2021, Beijing time. It will be upgraded to the mainnet after the pre-mainnet security audit is passed. When it meets the 5000 GPU competition of the whole network, it will be automatically activated. After activation, the competition will last for 2 months. During this period, all computing workers will share 133 million DBC rewards together, and the top 5 computing workers can receive an additional 30 million DBC rewards! Before the official activation of the Galaxy Race, the miners enjoy the double income of rental income and online rewards, with a total monthly online reward of 33.33 million DBC, and 100% destruction/burning of the rent after activation!
  div.rule-title I. Computing power server configuration requirements. Computing server parameters: only when a machine meets the minimum requirements will it pass the online audit, otherwise it can not obtain node revenue.
  div.rule-content.fs16 Computing server configuration requirements for each parameter:
  ul.rule-content
    li 
      span GPU: 
      | Minimum 1 card, 2 or 4 cards recommended; Nvidia series graphics card is required.
    li 
      span Memory: 
      | The minimum memory requirement is 48G per card, and the minimum requirement of the whole machine is 64G (that is, 48G per card is allocated to pass the chain review); combined with the actual application scenario requirements of the user, if the GPU memory is greater than or equal to 10G and the CudaCore is greater than 4000, the recommended configuration of the server is large Memory, 256G is recommended for one card, 448G for two cards, and 832G for four cards)
    li 
      span CPU: 
      | Intel/AMD, clocked at 2.0Ghz and above, single CPU with 8 cores and above; special attention: Considering the medium and long-term rental rate and the 30% calculation power bonus under rental status, it is recommended that the CPU of the new machine follow The configuration is as follows: Intel, V3 or higher, frequency 2.4Ghz, turbo frequency 3.0Ghz or higher, a single CPU with 10 cores or more, an average of 5 cores and 10 threads or more per GPU, dual CPU is recommended for 4 card GPU servers;
    li 
      span Hard disk: 
      | System disk 100G and above (SSD), data disk 1T and above (mechanical hard disk is also available)
    li 
      span Network bandwidth: 
      | 4 card GPU machines have a bandwidth of more than 20M for uplink and downlink, and 2 card GPU machines have a bandwidth of more than 10M for uplink and downlink. The average bandwidth of each GPU is more than 5M. Pay special attention to the medium and long-term rental rate. Telecom), which can be flexibly adjusted according to user needs;
    li
      span Graphics Virtualizer:
      | All on-chain server equipment needs to be equipped with a graphics card virtualizer (also known as a graphics card spoofer) with the corresponding number of graphics cards. New machines recommend 10 Gigabit network cards; machines without a graphics card virtualizer will not be able to pass the on-chain review
    li 
      span Each machine has an independent fixed IP 
    li 
      span Hosting IDC: 
      | The machine is placed in the standard data center above T3. Considering the medium and long-term occupancy rate, it is recommended that the machine be hosted in cities along the Yangtze River, coastal cities, or the surrounding areas of these cities.
    li 
      span Note: 
      | Taking into account the stability of the machine, the stability of online income and the penalty mechanism, it is recommended to use the manufacturer's brand machine, and the assembly machine is not recommended.
    li 
      span GPU server deployment for Galaxy Race document: 
      a(target="_blank" href="https://github.com/DeepBrainChain/DBC-DOC") https://github.com/DeepBrainChain/DBC-DOC
  div.rule-title Ⅱ. Computing power value calculation rules: 
  div.rule-content
    div In this model modification, the basic server value and memory are also included in the calculation model, and the rental fee of the user side in the entire ecosystem will also be unified with reference to the computing power value system for pricing. The rental income is 0.8468 USD/C/month.
    | The calculation model is as follows: the computing power value of the whole machine=50*√(number of cards)+memory/3.5+(√(number of cuda)*√(video memory/10))*number of graphics cards
    div.table
      div.table_con
        div GPU type
        div Cuda core
        div Video memory
        div Graphics card number
        div RAM(G)
        div Computing power of the whole machine(C)
      div.table_li
        div 1080
        div 2560
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 188.65
          div.line
            div 4
            div 192
            div 335.88
      div.table_li
        div 1080ti
        div 3584
        div 11
        div.width60
          div.line
            div 2
            div 96
            div 223.72
          div.line
            div 4
            div 192
            div 406.01
      div.table_li
        div 1660
        div 1408
        div 6
        div.width60
          div.line
            div 2
            div 96
            div 156.27
          div.line
            div 4
            div 192
            div 271.12
      div.table_li
        div 1660ti
        div 1536
        div 6
        div.width60
          div.line
            div 2
            div 96
            div 158.85
          div.line
            div 4
            div 192
            div 276.29
      div.table_li
        div 1660s
        div 1408
        div 6
        div.width60
          div.line
            div 2
            div 96
            div 156.27
          div.line
            div 4
            div 192
            div 271.12
      div.table_li
        div 2080
        div 2944
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 195.20
          div.line
            div 4
            div 192
            div 348.98
      div.table_li
        div 2080ti
        div 4352
        div 11
        div.width60
          div.line
            div 2
            div 96
            div 236.52
          div.line
            div 4
            div 192
            div 431.62
      div.table_li
        div 2080ti
        div 4352
        div 11
        div.width60
          div.line
            div 2
            div 448
            div 337.09
          div.line
            div 4
            div 832
            div 614.47
      div.table_li
        div 3060
        div 3584
        div 12
        div.width60
          div.line
            div 2
            div 96
            div 229.30
          div.line
            div 4
            div 192
            div 417.18
      div.table_li
        div 3060ti
        div 4864
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 222.90
          div.line
            div 4
            div 192
            div 404.38
      div.table_li
        div 3070
        div 5888
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 235.40
          div.line
            div 4
            div 192
            div 429.39
      div.table_li
        div 3070ti
        div 6144
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 238.36
          div.line
            div 4
            div 192
            div 435.29
      div.table_li
        div 3080
        div 8704
        div 10
        div.width60
          div.line
            div 2
            div 96
            div 284.73
          div.line
            div 4
            div 192
            div 528.04
      div.table_li
        div 3080
        div 8704
        div 10
        div.width60
          div.line
            div 2
            div 448
            div 385.30
          div.line
            div 4
            div 832
            div 710.90
      div.table_li
        div 3080ti
        div 10240
        div 12
        div.width60
          div.line
            div 2
            div 96
            div 319.84
          div.line
            div 4
            div 192
            div 598.26
      div.table_li
        div 3080ti
        div 10240
        div 12
        div.width60
          div.line
            div 2
            div 448
            div 420.41
          div.line
            div 4
            div 832
            div 781.12
      div.table_li
        div 3090
        div 10496
        div 24
        div.width60
          div.line
            div 2
            div 96
            div 415.57
          div.line
            div 4
            div 192
            div 789.72
      div.table_li
        div 3090
        div 10496
        div 24
        div.width60
          div.line
            div 2
            div 448
            div 516.14
          div.line
            div 4
            div 832
            div 972.57
  div.rule-title Ⅲ. Galaxy Race reward calculation rules:
  div.rule-content
    div Several factors affect the miners' DBC rewards.
    ul
      li The computing power of the server device
      li The number of GPUs owned
      li The number of GPUs owned by a single wallet. For each additional GPU owned by a single wallet, the points of all machines will increase by 0.01% until it increases by 10%.
      li Whether the GPU is rented or not, the computing power value of the rented GPU increases by 30%
      li Daily rewards obtained by computing workers = the percentage of computing power owned by computing workers in the total network computing power * 1.0959 million DBC, of which 25% are obtained immediately, 75% are released for 150 days, and 0.5% is released every day
  //- div.rule-title.fs16 Example:
  //- div.rule-content
  //-   div Assume that the amount of DBCs produced is 333,333,333 per day; the total network-wide computing power value is 800,000, and the computing power provider A adds 500 GPUs under the same wallet to the DBC network, each with a computing power value of 99, of which 450 graphic cards are in the leased state and 50 cards are idle, then
  //-   div A's Total computing power value: 450*99*(1+5%)*130%+50*99*(1+5%)=66008.25
  //-   div Reward obtained by A in 24 hours is: 66008.25 /800,000*3,333,333= 275,034.3 DBC
  
  div.rule-title IV、Penalty rules
  div.rule-content
    div Regardless of whether the machine is online or offline, computing workers need to actively send on-chain notifications by themselves. If the machine fails to actively send on-chain notifications, the penalty will be more serious. Once the machine is officially on the chain successfully, you cannot modify any hardware configuration information in the future. When the machine is idle and offline at the same time, the bandwidth and latitude and longitude information can be modified. When the machine receives a penalty, only the pledged coins are deducted. The historical rewards that will be issued in the next 150 days will not be deducted, but there is no new online reward. When the machine deposit is less than 90%, it will be in a warning state, when the machine deposit is less than 80%. %, there will be no online rewards.
    | Number of pledges:
  div.rule-content
    div 1). The validator needs to pledge 20,000 dbc in advance
    div 2). The reporter needs to pledge 20,000 dbc in advance, otherwise the report cannot be reported
    div 3). When the deposit 50% is in the warning state, when the machine deposit is less than 40%, the validator qualification will be cancelled. Each time an order is rushed, 1000 pledges are consumed, and the order status is completed, 1000 pledges will be refunded
  div.rule-title.fs16 1. In the case that the machine provider takes the initiative to send offline notification:
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
  div.rule-title.fs16 2. If the machine provider does not send an offline notification proactively and is reported instead:
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
  div.rule-title Ⅶ、Other rules
  div.rule-content
    div The computing workers participating in the test can give us more feedback and suggestions to facilitate the modification of the rules and share and build together.
    div.rule-content
      div Contact details：
        ul
          li Mail：zhouyu@deepbrainchain.org；leo@deepbrainchain.org
          li WeChat：DeepBrainChain；DBC-Leo
          li Telegram：18221230521；13681709317
  div.rule-title Disclaimer:
  div.rule-content If a serious bug is found during the Race, the DeepBrain Chain team may end the race early. Rewards will still be given for the period of time prior to the discovery of the bug. If such a bug is disclosed to the DeepBrain Chain team, the team reporting the bug will be eligible for a reward of up to 3 million DBC, depending on the severity of the bug, as determined by the DeepBrain Chain team.
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
        width: 16.67%;
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
        width: 16.66%;
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
        width: 50%;
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
    }
    .hide{
      display: none;
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
  &fs16{
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
