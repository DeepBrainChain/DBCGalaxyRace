<template lang="pug">
div.description
  | 深脑链银河算力竞赛激励计划是一项协作竞赛，目的是对该网络进行压力测试，鼓励全世界的算工参与，并帮助算工为运营世界上最大的高性能算力网络做好准备。
div.rule-wrapper
  div.rule-title 竞赛规则
  div.rule-content 比赛从北京时间2021年7月1号10:00分开始，持续30天时间，
    |所有算工根据算力点数占比共同瓜分1亿DBC奖励，当GPU数量超过10000卡，算力前5名算工可以额外获得3000万DBC奖励。
  div.rule-title 一、GPU服务器参数最低要求
  ul.rule-content
    li GPU硬件：4卡或者2卡，2080ti/3070/3080/3080ti/3090  （必须为Nvidia显卡，GPU显存最低要求8G）；
    li 内存：800g(4卡)或者400g(2卡) ；
    li CPU：双路CPU（2.5Ghz及其以上) ；
    li 硬盘：系统盘600g(SSD)，数据盘 2T（可以机械硬盘） ；
    li 网络带宽：上下行20M以上(4卡)或者10M以上(2卡) ；
    li 有独立固定IP ；
    li 机器放在标准数据中心T3级别以上，保持网络和电的稳定性 。
  div.rule-title 二、算力点数计算规则
  div.rule-content
    div 只有GPU服务器满足最低要求，才可以获得奖励单个GPU算力点数有两个影响指标：GPU Cuda Core数量 和显存大小，GPU Cuda Core数量影响  占比80%，显存影响占比 20%，2080ti 是参考标准。
    div 2080ti算力点数：4352=4352*80%+4352*11/11*20%
    div 3070算力点数：5302=5608*80%+5608*8/11*20%
    div 3070Ti 8G显存版本算力点数：5734=6144*80%+6144*8/11*20%
    div 3070Ti 16G显存版本算力点数：6703=6144*80%+6144*16/11*20%
    div 3080算力点数：8546=8704*80%+8704*10/11*20%
    div 3080Ti算力点数：10426=10240*80%+10240*12/11*20%
    div 3090算力点数：12977=10496*80%+10496*24/11*20%
  div.rule-title 三、比赛奖励计算规则
  div.rule-content
    div 影响算工DBC奖励的几个因素：
    ul
      li 每个GPU的算力点数
      li 拥有的GPU数量
      li 单个钱包拥有的GPU数量，单个钱包每多拥有一个GPU，所有机器点数增加0.01%，一直到增加10%为止
      li GPU是否被租用，被租用的GPU点数增加30%
      li 算工每日获得的奖励=算工拥有的算力点数占全网算力点数的比例*333万DBC，其中25%立马获得，75%释放150天，每天释放0.5% 。
  div.rule-title 举一个例子
  div.rule-content
    div 比如全网总点数为：80,000,000，A算工在DBC网络中加入了500个GPU，每个算力点数都为 10426，A算工都是用一个钱包，其中450卡处于被租用状态，50卡闲置状态，则A算工24小时可以获得的DBC奖励为：
    div A算工总点数：450*10426*(1+5%)*130%+50*10426*(1+5%)=6,951,536 ；
    div 全网总点数：86,951,536
    div A算工获得的24小时奖励为：6,951,536/86,951,536*3,333,333=266,490.7995 个DBC 。
  div.rule-title 声明
  div.rule-content 如果在比赛中发现了严重的BUG, 深脑链团队可能会提前结束比赛。在发现BUG之前的一段时间内仍然会得到奖励。如果将这样的BUG向深脑链团队披露，报告该BUG的团队将有资格获得最高达300万 DBC的奖励，具体取决于BUG的严重程度，由深脑链团队决定。
</template>
<style lang="less">
.li-style {
  margin-top: 0;
  padding-left: 20px;
  li {
    position: relative;
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
