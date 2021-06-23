<template lang="pug">
div.description
  | 深脑链银河算力竞赛激励计划是一项协作竞赛，目的是对该网络进行压力测试，鼓励全世界的算工参与，并帮助算工为运营世界上最大的高性能算力网络做好准备。
div.rule-wrapper
  div.rule-title 竞赛规则
  div.rule-content 银河算力竞赛公测一从北京时间2021年7月18号-2021年8月17号，银河算力竞赛公测二从北京时间2021年8月18号-2021年9月17号，银河算力竞赛主网部署上线北京时间2021年9月18号，当满足全网5000张GPU竞赛自动激活，激活后竞赛将持续2个月时间，竞赛期间所有矿工共同瓜分1.33亿DBC奖励，算力前5名矿工可以额外获得3000万DBC奖励。在银河竞赛正式激活之前，算工享有租金收益和在线奖励双收益，每月在线奖励总数3333万DBC，激活后租金100%销毁！
  div.rule-title 一、GPU服务器参数最低要求：算力服务器各项参数只有满足最低要求，才可以通过上线审核，否则无法获得收益
  ul.rule-content
    li 
      span GPU：
      | 最低1卡，建议2卡或者4卡；英伟达Nvidia系列显卡，最低要求8G显存；考虑到出租率，显卡类型推荐3080ti、3080、3090、3070ti、2080ti、3070等；如果是新配置机器，每个GPU配置一个显卡欺骗器；
    li 
      span 内存：
      | 最低1卡需要224g，2卡-224g，3卡336g，4卡-448g，以此类推；
    li 
      span CPU：
      | Intel/AMD，主频2.0Ghz及其以上，单颗CPU 8核及其以上，平均每个GPU配8核以上；特别注意：考虑到中长期出租率，以及出租状态下30%的算力值加成，建议新机器的CPU按照如下配置：Intel，V3以上，主频2.5Ghz、睿频3.0Ghz及其以上，单颗CPU 10核以上，平均每颗GPU分配5核10线程以上，4卡GPU服务器推荐双CPU；
    li 
      span 硬盘：
      | 4卡GPU及4卡以下数量GPU机器，系统盘480G及以上(SSD)，数据盘2T及以上（机械硬盘也可以）；4卡以上系统盘1T SSD、数据盘4T（机械硬盘也可以）；
    li 
      span 网络带宽：
      | 4卡GPU机器上下行20M带宽以上，2卡GPU机器上下行10M带宽以上，平均每个GPU 5M带宽以上；特别注意，考虑中长期出租率，建议机器托管机房可以支持三线带宽（移动、联通、电信），可以根据用户需求灵活调整；
    li 
      span 有独立固定IP；
    li 
      span 托管IDC：
      | 机器放在标准数据中心T3以上，考虑到中长期出租率，建议机器托管在长江沿线城市、沿海城市，或者这些城市周边地区，优先推荐华东、华南，西南、华中、华北适量放置；
    li 
      span 特别注意：
      | 考虑到机器使用稳定性、在线收益稳定性以及惩罚机制，建议使用厂商品牌机，不推荐组装机。
    li 
      span GPU服务器参与银河竞赛部署文档：
      | https://github.com/DeepBrainChain/DBC-DOC
  div.rule-title 二.算力值计算规则
  div.rule-content
    div 单个GPU算力值有两个影响指标：GPU Cuda Core数量 和显存大小，GPU Cuda Core数量影响占比70%，显存影响占比30%，3080ti是参考标准，GPU算力值计算公式：基础算力值=13+0.7×√(cuda数量)+0.3×显存/24×√(cuda数量)上述公式中，√ 表示平方根，部分显卡基础算力值参考如下：
    //- div 2080ti算力点数：4352=4352*80%+4352*11/11*20%
    //- div 3070算力点数：5302=5608*80%+5608*8/11*20%
    //- div 3070Ti 8G显存版本算力点数：5734=6144*80%+6144*8/11*20%
    //- div 3070Ti 16G显存版本算力点数：6703=6144*80%+6144*16/11*20%
    //- div 3080算力点数：8546=8704*80%+8704*10/11*20%
    //- div 3080Ti算力点数：10426=10240*80%+10240*12/11*20%
    //- div 3090算力点数：12977=10496*80%+10496*24/11*20%
    div.table
      div.table_con
        div 显卡类型
        div Cuda core
        div 显存
        div 算力值
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
  div.rule-title 三、比赛奖励计算规则
  div.rule-content
    div 影响算工DBC奖励的几个因素：
    ul
      li 每个GPU的算力值
      li 拥有的GPU数量
      li 单个钱包拥有的GPU数量，单个钱包每多拥有一个GPU，所有机器点数增加0.01%，一直到增加10%为止
      li GPU是否被租用，被租用的GPU算力值增加30%
      li 算工每日获得的奖励=算工拥有的算力值占全网算力值的比例*333万DBC，其中25%立马获得，75%释放150天，每天释放0.5% 。
  div.rule-title 举一个例子
  div.rule-content
    div 假设DBC每天产出3,333,333个；全网总算力值是80万，算力供给者A用同一个钱包在DBC网络中加入了500个GPU，每个算力值都为99，其中450卡处于被租用状态，50卡闲置状态，则A算工24小时可以获得的DBC奖励为：
    div A算工总算力值：450*99*(1+5%)*130%+50*99*(1+5%)=66,008.25
    div 全网总算力值：800,000
    div A算工获得的24小时奖励为：66,008.25 /800,000*3,333,333= 275,034.3个DBC
  div.rule-title 声明
  div.rule-content 如果在比赛中发现了严重的BUG, 深脑链团队可能会提前结束比赛。在发现BUG之前的一段时间内仍然会得到奖励。如果将这样的BUG向深脑链团队披露，报告该BUG的团队将有资格获得最高达300万 DBC的奖励，具体取决于BUG的严重程度，由深脑链团队决定。
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
      top: 50%;
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
    margin: 10px 0;
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
