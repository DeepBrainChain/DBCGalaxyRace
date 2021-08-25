<template lang="pug">
div.description
  | 深脑链银河算力竞赛激励计划是一项协作竞赛，目的是对该网络进行压力测试，鼓励全世界的算工参与，并帮助算工为运营世界上最大的高性能算力网络做好准备。
div.rule-wrapper
  div.rule-title 竞赛规则
  div.rule-content 银河算力竞赛公测一从北京时间2021年7月18号-2021年8月17号，银河算力竞赛公测二从北京时间2021年8月18号-2021年9月17号，银河算力竞赛主网部署上线北京时间2021年9月18号，当满足全网5000张GPU竞赛自动激活，激活后竞赛将持续2个月时间，竞赛期间所有算工共同瓜分1.33亿DBC奖励，算力前5名算工可以额外获得3000万DBC奖励。在银河竞赛正式激活之前，算工享有租金收益和在线奖励双收益，每月在线奖励总数3333万DBC,激活后租金100%销毁！
  div.rule-title 一、GPU服务器参数最低要求：算力服务器各项参数只有满足最低要求，才可以通过上线审核，否则无法获得收益
  ul.rule-content
    li
      span GPU：
      | 最低1卡，推荐2卡或者4卡；必须英伟达Nvidia系列显卡；
    li
      span 内存：
      | 内存最低要求每卡48G，整机最低64G（即每卡分配内存达48G即可通过上链审核）；结合用户端实际应用场景需求，如果GPU显存大于等于10G且CudaCore大于4000的服务器推荐配置大内存，一卡推荐256G，两卡推荐448G，四卡推荐832G）
    li
      span CPU：
      | Intel/AMD，主频2.0Ghz及其以上，CPU 单颗8核及其以上；特别注意：考虑到中长期出租率，以及出租状态下30%的算力值加成，建议新机器的CPU按照如下配置：Intel，V3以上，主频2.4Ghz、睿频3.0Ghz及其以上，单颗CPU 10核以上，平均每颗GPU分配5核10线程以上，4卡GPU服务器推荐双CPU；
    li
      span 硬盘：
      | 系统盘100G及以上(SSD)，数据盘1T及以上（机械硬盘也可以）；
    li
      span 网络带宽：
      | 4卡GPU机器上下行20M带宽以上，2卡GPU机器上下行10M带宽以上，平均每个GPU 5M带宽以上；特别注意，考虑中长期出租率，建议机器托管机房可以支持三线带宽（移动、联通、电信），可以根据用户需求灵活调整；
    li
      span 显卡虚拟器：
      | 所有上链的服务器设备需要配备相应显卡数量的显卡虚拟器（又称显卡欺骗器），新机器推荐万兆网卡；没有显卡虚拟器的机器将无法通过上链审核
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
      a(target="_blank" href="https://github.com/DeepBrainChain/DBC-DOC") https://github.com/DeepBrainChain/DBC-DOC
  div.rule-title 二.算力值计算规则
  div.rule-content
    div 本次模型修改将服务器基础值以及内存等也纳入计算模型，整个生态中用户端的租用费用也将统一参考算力值系统定价。
    | 计算模型如下：整机算力值=50*√（卡数）+内存/3.5+(√(cuda数量)*√（显存/10））*显卡数量
    div.table
      div.table_con
        div 显卡类型
        div Cuda core
        div 显存
        div 显卡卡数
        div 内存(G)
        div 整机算力(C)
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
  div.rule-title 三、比赛奖励计算规则
  div.rule-content
    div 影响算工DBC奖励的几个因素：
    ul
      li 服务器设备的整机算力值
      li 拥有的GPU数量
      li 单个钱包拥有的GPU数量，单个钱包每多拥有一个GPU，所有机器点数增加0.01%，一直到增加10%为止
      li GPU是否被租用，被租用的GPU算力值增加30%
      li 算工每日获得的奖励=算工拥有的算力值占全网算力值的比例*109.59万DBC，其中25%立马获得，75%释放150天，每天释放0.5%
  //- div.rule-title.fs16 举一个例子
  //- div.rule-content
  //-   div 假设DBC每天产出3,333,333个；全网总算力值是80万，算力供给者A用同一个钱包在DBC网络中加入了500个GPU，每个算力值都为99，其中450卡处于被租用状态，50卡闲置状态，则A算工24小时可以获得的DBC奖励为：
  //-   div A算工总算力值：450*99*(1+5%)*130%+50*99*(1+5%)=66,008.25
  //-   div 全网总算力值：800,000
  //-   div A算工获得的24小时奖励为：66,008.25 /800,000*3,333,333= 275,034.3个DBC
  div.rule-title 四、惩罚机制
  div.rule-content
    div 无论上线机器或者下线机器都需要算工自己主动发送链上通知，如果机器出现问题，不主动发送链上通知，惩罚将会更加严重。机器一旦正式上链成功，则以后不能修改任何硬件配置信息。当机器闲置且同时处于下线状态，可以修改带宽和经纬度信息。当机器收到惩罚只扣除质押币，历史的奖励但是要在未来150天发放的这部分不会被扣除，但是没有新的在线奖励.当机器押金不足90%处于警告状态，当机器押金不足80%，将会没有在线奖励.
    | 质押数量：
  div.rule-content
    div 1). 验证人需要预先质押2万dbc
    div 2). 举报人需要预先质押2万dbc，否则无法举报
    div 3). 当押金50%处于警告状态，当机器押金不足40%则取消验证人资格。每次抢单消耗1000质押，订单状态完成，1000质押退还
  div.rule-title.fs16 1.算工主动发送下线通知的情况下：
  div.rule-content
    div 1). 机器在被租用状态
      ul
        li 下线机器大于3分钟不超过7分钟，没有新的在线奖励，扣除2%质押币。100%进入国库。
        li 下线机器超过7分钟，扣除4%质押币。100%进入国库。
        li 下线机器超过48h，扣除30%质押币，10%给到用户，90%进入国库。
        li 下线机器超过120h，扣除50%押金。10%给到用户，90%进入国库。
    div 2). 机器在空闲状态
      ul
        li 处于空闲状态超过10天，此时下线机器，没有新的在线奖励，旧的奖励仍然线性释放。(机器下线后，如果机器从首次上线时间起超过365天，可以申请退回押金)
        li 处于空闲状态不到10天，此时下线机器，没有新的在线奖励，扣除2%质押币，质押币全部进入国库。
        li 处于空闲状态不到10天，此时下线机器超过7分钟，扣除4%质押币，质押币全部进入国库。
        li 处于空闲状态不到10天，此时下线机器超过48h，扣除30%质押币，质押币全部进入国库。
        li 处于空闲状态不到10天，此时下线机器超过240h，扣除80%质押币。质押币全部进入国库。如果机器从首次上线时间起超过365天，剩下20%押金可以申请退回。
  div.rule-title.fs16 2.算工没有主动发送下线通知，被举报的情况下：
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
        li 下线不超过4小时，没有新的在线奖励，则扣除6%质押币。10%给到用户，20%给到验证人，50%进入国库。
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
  div.rule-title 七、其他规则
  div.rule-content
    div 参与测试的算工可以向我们多反馈意见建议以便于规则的修改，共享共建。
    div.rule-content
      div 联系方式：
        ul
          li 邮箱：zhouyu@deepbrainchain.org；leo@deepbrainchain.org
          li 微信：DeepBrainChain；DBC-Leo
          li Telegram：18221230521；13681709317
  div.rule-title 声明
  div.rule-content 如果在比赛中发现了严重的BUG, 深脑链团队可能会提前结束比赛。在发现BUG之前的一段时间内仍然会得到奖励。如果将这样的BUG向深脑链团队披露，报告该BUG的团队将有资格获得最高达300万 DBC的奖励，具体取决于BUG的严重程度，由深脑链团队决定。
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
