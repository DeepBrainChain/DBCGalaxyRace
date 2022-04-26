<template lang="pug">
div.description
  | The DeepBrain Chain Galaxy Computing Power Race Incentive Program is a collaborative race to stress test the network, it encourages participation from miners around the world, and help prepare miners to operate the world's largest high-performance computing network.
div.rule-wrapper
  div.rule-title Rules of the Race
  div.rule-content The main network of DeepBrain Chain's computing power has been launched. When the 5,000 GPU competition of the entire network is automatically activated, the competition will last for 2 months after activation. During the competition, all computing workers will share 133 million DBC rewards. The top 5 computing workers can Get an additional 30 million DBC rewards! Before the Galaxy Contest is officially activated, computing workers enjoy both rental income and online rewards. The total number of online rewards per day is 1,09589 million DBC, and 100% of the rent will be destroyed after activation!
  div.rule-title I. Minimum requirements for GPU server parameters: Only when the parameters of the computing power server meet the minimum requirements, can it be reviewed and launched by the validator, otherwise no revenue will be obtained
  div.rule-content.fs16 Computing server configuration requirements for each parameter:
  ul.rule-content
    li 
      span GPU: 
      | Minimum 1 card, 2 or 4 cards recommended; Nvidia series graphics card is required.
    li 
      span Memory: 
      | The minimum memory requirement is 48G per card, and the minimum requirement of the whole machine is 64G (that is, if the memory allocated to each card reaches 48G, it can pass the chain review. If it is a new machine with 4 cards, 320G memory is recommended.); combined with the actual application scenario requirements of the user, if the GPU memory is greater than or equal to 10G and the CudaCore is greater than 4000, the recommended configuration of the server is large Memory, 256G is recommended for one card, 448G for two cards, and 832G for four cards)
    li 
      span CPU: 
      | Intel/AMD, clocked at 2.0Ghz and above, single CPU with 8 cores and above; special attention: Considering the medium and long-term rental rate and the 30% calculation power bonus under rental status, it is recommended that the CPU of the new machine follow The configuration is as follows: Intel, V3 or higher, frequency 2.4Ghz, turbo frequency 3.0Ghz or higher, a single CPU with 10 cores or more, an average of 5 cores and 10 threads or more per GPU, dual CPU is recommended for 4 card GPU servers;
    li 
      span Hard disk: 
      | System disk 100G SSD and above, data disk 1T nvme SSD and above (3.84T nvme SSD is recommended for new machine 4-card gpu server);
    li 
      span Network bandwidth: 
      | The uplink and downlink bandwidth of 4-card GPU machine is more than 20M, the uplink and downlink bandwidth of 2-card GPU machine is more than 10M, and the average bandwidth of each GPU is more than 5M; special attention, considering the medium and long-term rental rate, it is recommended that the machine hosting room in mainland China can support BGP and third-line bandwidth , Other overseas regions support BGP bandwidth;
    li
      span Graphics Virtualizer:
      | All on-chain server equipment needs to be equipped with a graphics card virtualizer (also known as a graphics card spoofer) with the corresponding number of graphics cards. New machines recommend 10 Gigabit network cards; machines without a graphics card virtualizer will not be able to pass the on-chain review
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
      | Taking into account the stability of the machine, the stability of online income and the penalty mechanism, it is recommended to use the manufacturer's brand machine, and the assembly machine is not recommended.
    li 
      span Recommended GPU model: 
      | 3080、3080Ti、3090、A5000、A6000
    li 
      span GPU server deployment for Galaxy Race document: 
      a(target="_blank" href="https://github.com/DeepBrainChain/DBC-DOC") https://github.com/DeepBrainChain/DBC-DOC
  div.rule-title Ⅱ. Computing power value calculation rules: 
  div.rule-content
    div In this model modification, the basic server value and memory are also included in the calculation model, and the rental fee of the user side in the entire ecosystem will also be unified with reference to the computing power value system for pricing. The rental income is 0.8468 USD/C/month.
    | The calculation model is as follows: computing power value of the whole machine = (25 * number of cards + memory/3.5 + (√(number of cuda) * √(memory/10)) * number of graphics cards ) * coefficient, when the local coefficient is 1, the computing power value is as follows:
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
            div 2
            div 96
            div 167.94
            div 142.22
            div 71.11
          div.line
            div 4
            div 192
            div 335.88
            div 284.45
            div 71.11
      div.table_li
        div 1080ti
        div 3584
        div 11
        div.width60
          div.line
            div 2
            div 96
            div 203.31
            div 171.92
            div 85.96
          div.line
            div 4
            div 192
            div 406.01
            div 343.84
            div 85.96
      div.table_li
        div 1660
        div 1408
        div 6
        div.width60
          div.line
            div 2
            div 96
            div 135.56
            div 114.80
            div 57.40
          div.line
            div 4
            div 192
            div 271.12
            div 229.60
            div 57.40
      div.table_li
        div 1660ti
        div 1536
        div 6
        div.width60
          div.line
            div 2
            div 96
            div 138.14
            div 116.99
            div 58.50
          div.line
            div 4
            div 192
            div 276.29
            div 233.98
            div 58.50
      div.table_li
        div 1660s
        div 1408
        div 6
        div.width60
          div.line
            div 2
            div 96
            div 135.56
            div 114.80
            div 57.40
          div.line
            div 4
            div 192
            div 271.12
            div 229.60
            div 57.40
      div.table_li
        div 2080
        div 2944
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 174.49
            div 147.77
            div 73.89
          div.line
            div 4
            div 192
            div 348.98
            div 295.54
            div 73.89
      div.table_li
        div 2080s
        div 3072
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 176.58
            div 149.54
            div 74.77
          div.line
            div 4
            div 192
            div 353.15
            div 299.08
            div 74.77
      div.table_li
        div 2080ti
        div 4352
        div 11
        div.width60
          div.line
            div 2
            div 96
            div 215.81
            div 182.76
            div 91.38
          div.line
            div 4
            div 192
            div 431.62
            div 365.52
            div 91.38
      div.table_li
        div 2080ti
        div 4352
        div 11
        div.width60
          div.line
            div 2
            div 448
            div 316.38
            div 267.93
            div 133.97
          div.line
            div 4
            div 832
            div 614.47
            div 520.38
            div 130.10
      div.table_li
        div 3060
        div 3584
        div 12
        div.width60
          div.line
            div 2
            div 96
            div 208.59
            div 176.65
            div 88.32
          div.line
            div 4
            div 192
            div 417.18
            div 353.30
            div 88.32
      div.table_li
        div 3060ti
        div 4864
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 202.19
            div 171.23
            div 85.61
          div.line
            div 4
            div 192
            div 404.38
            div 342.46
            div 85.61
      div.table_li
        div 3070
        div 5888
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 214.69
            div 182.82
            div 90.91
          div.line
            div 4
            div 192
            div 429.39
            div 363.64
            div 90.91
      div.table_li
        div 3070ti
        div 6144
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 217.65
            div 184.32
            div 92.16
          div.line
            div 4
            div 192
            div 435.29
            div 368.64
            div 92.16
      div.table_li
        div 3080
        div 8704
        div 10
        div.width60
          div.line
            div 2
            div 96
            div 264.02
            div 223.59
            div 111.80
          div.line
            div 4
            div 192
            div 528.04
            div 447.18
            div 111.80
      div.table_li
        div 3080
        div 8704
        div 10
        div.width60
          div.line
            div 2
            div 448
            div 364.59
            div 308.76
            div 154.38
          div.line
            div 4
            div 832
            div 710.90
            div 602.04
            div 150.51
      div.table_li
        div 3080ti
        div 10240
        div 12
        div.width60
          div.line
            div 2
            div 96
            div 299.13
            div 253.33
            div 126.66
          div.line
            div 4
            div 192
            div 598.26
            div 506.65
            div 126.66
      div.table_li
        div 3080ti
        div 10240
        div 12
        div.width60
          div.line
            div 2
            div 448
            div 399.70
            div 338.50
            div 169.25
          div.line
            div 4
            div 832
            div 781.12
            div 661.51
            div 165.38
      div.table_li
        div 3090
        div 10496
        div 24
        div.width60
          div.line
            div 2
            div 96
            div 394.86
            div 334.40
            div 167.20
          div.line
            div 4
            div 192
            div 789.72
            div 668.79
            div 167.20
      div.table_li
        div 3090
        div 10496
        div 24
        div.width60
          div.line
            div 2
            div 448
            div 495.43
            div 419.57
            div 209.78
          div.line
            div 4
            div 832
            div 972.57
            div 823.65
            div 205.91
      div.table_li
        div A4000
        div 6144
        div 16
        div.width60
          div.line
            div 2
            div 96
            div 275.73
            div 233.50
            div 116.75
          div.line
            div 4
            div 192
            div 551.45
            div 467.01
            div 116.75
      div.table_li
        div A5000
        div 8192
        div 24
        div.width60
          div.line
            div 2
            div 96
            div 357.86
            div 303.06
            div 151.53
          div.line
            div 4
            div 192
            div 715.73
            div 606.13
            div 151.53
      div.table_li.height30
        div A100
        div 6912
        div 40
        div.width60
          div.line
            div 4
            div 832
            div 1002.82 
            div 849.18
            div 212.29
      div.table_li.height30
        div A100
        div 6912
        div 80
        div.width60
          div.line
            div 4
            div 832
            div 1278.32
            div 1082.48
            div 270.62   
      div.table_li.height30
        div A40
        div 10752
        div 48
        div.width60
          div.line
            div 4
            div 832
            div 1246.42
            div 1055.47
            div 263.87 
      div.table_li.height30
        div V100
        div 5120
        div 16
        div.width60
          div.line
            div 4
            div 832
            div 699.75
            div 592.55
            div 148.14   
      div.table_li.height30
        div V100
        div 5120
        div 32
        div.width60
          div.line
            div 4
            div 832
            div 849.71 
            div 719.53
            div 179.88
      div.table_li.height30
        div T4
        div 2560
        div 16
        div.width60
          div.line
            div 4
            div 832
            div 593.71 
            div 502.75
            div 125.69  
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
  
  div.rule-title IV、Penalty rules
  div.rule-content
    div Regardless of whether the machine is online or offline, computing workers need to actively send on-chain notifications by themselves. If the machine fails to actively send on-chain notifications, the penalty will be more serious. Once the machine is officially on the chain successfully, you cannot modify any hardware configuration information in the future. When the machine is idle and offline at the same time, the bandwidth and latitude and longitude information can be modified. When the machine receives a penalty, only the pledged coins are deducted. The historical rewards that will be issued in the next 150 days will not be deducted, but there is no new online reward. When the machine deposit is less than 90%, it will be in a warning state, when the machine deposit is less than 80%. %, there will be no online rewards.
    | Number of pledges:
  div.rule-content
    div 1). The validator needs to pledge 20,000 dbc in advance
    div 2). The reporter needs to pledge 20,000 dbc in advance, otherwise the report cannot be reported
    div 3). When the validator's deposit is 50% remaining, it will be in a warning state. When the validator's deposit is less than 40%, the validator's qualification will be cancelled. Each time an order is rushed, 1000 pledges are consumed, and the order status is completed, 1000 pledges will be refunded
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
  div.rule-title Ⅶ、Contact details
  div.rule-content
    div If you have any questions, please contact email: zhouyu@deepbrainchain.org; leo@deepbrainchain.org
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
