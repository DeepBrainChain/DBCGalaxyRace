import BigNumber from "bignumber.js";

function byteToStr(arr: Array<number>) {
  if (typeof arr === "string") {
    return arr;
  }
  var str = "",
    _arr = arr;
  for (var i = 0; i < _arr.length; i++) {
    var one = _arr[i].toString(2),
      v = one.match(/^1+?(?=0)/);
    if (v && one.length == 8) {
      var bytesLength = v[0].length;
      var store = _arr[i].toString(2).slice(7 - bytesLength);
      for (var st = 1; st < bytesLength; st++) {
        store += _arr[st + i].toString(2).slice(2);
      }
      str += String.fromCharCode(parseInt(store, 2));
      i += bytesLength - 1;
    } else {
      str += String.fromCharCode(_arr[i]);
    }
  }
  return str;
}

/**
 * chain_getBlockHash： 高度hash
 * onlineProfile_getStakerNum: 算工数量
 * onlineProfile_getStakerListInfo: 分页获取数据
 * onlineProfile_getOpInfo: 获取奖励信息
 */
type Methods =
  | "chain_getBlockHash"
  | "onlineProfile_getOpInfo"
  | "onlineProfile_getStakerNum"
  | "onlineProfile_getStakerListInfo";

class DBCRequest {
  ws: WebSocket;
  keepAlive: boolean = true;
  wsOpened: boolean = false;
  url: string = "wss://innertest.dbcwallet.io";
  constructor(keepAlive: boolean = true) {
    this.ws = new WebSocket(this.url);
    this.keepAlive = keepAlive;
    this.ws.onclose = () => {
      this.wsOpened = false;
    };
  }
  _send<T>(method: Methods, params: Array<any> = []) {
    return new Promise<T>(resolve => {
      const sendParam = {
        jsonrpc: "2.0",
        id: 1,
        method,
        params
      };
      this.ws.send(JSON.stringify(sendParam));
      this.ws.onmessage = evt => {
        resolve(JSON.parse(evt.data).result);
        if (!this.keepAlive) {
          this.ws.close();
        }
      };
    });
  }
  send<T = any>(method: Methods, params: Array<any> = []) {
    return new Promise<T>(resolve => {
      if (this.wsOpened) {
        this._send<T>(method, params).then(resolve);
      } else {
        // this.ws = new WebSocket(this.url);
        this.ws.onopen = () => {
          this.wsOpened = true;
          this._send<T>(method, params).then(resolve);
        };
      }
    });
  }
  sendUnique<T = any>(method: Methods, params: Array<any> = []) {
    this.ws = new WebSocket(this.url);
    this.wsOpened = false;
    this.ws.onclose = () => {
      this.wsOpened = false;
    };
    return this.send<T>(method, params);
  }
}

const request = new DBCRequest();

export type RewardInfoType = {
  /**
   * 总算力值
   */
  totalCalcPoints: string;
  /**
   * gpu总数
   */
  totalGpuNum: string;
  /**
   * 租用gpu总数
   */
  totalRentedGpu?: string;
  /**
   * 算机DBC质押数
   */
  totalStake: string;
  /**
   * 算工总数
   */
  totalStaker: string;
  /**
   * 租用率
   */
  Rent: string;
  /**
   * 租金数
   */
  totalRentFee: string; 
  /**
   * 销毁数
   */
  totalBurnFee?: string; 
  /**
   * 全网质押总数
   */
  totalStakeAll?: string; // 这里随意写的目前没有这个key
};
/**
 *
 * @returns RewardInfo
 */
export const getRewardInfo = async () => {
  return request.sendUnique<RewardInfoType>("onlineProfile_getOpInfo");
};

export type ItemType = {
   /**
   * 竞赛排名
   */
  index: number | number;
  /**
   * 算力值
   */
  calcPoints: string;
  /**
   * gpu数量
   */
  totalGpuNum: string;
  /**
   * 租用gpu数量
   */
  totalRentedGpu: string;
  /**
   * 算工名称的byte数组
   */
  stakerName: Array<number>;
  /**
   * 算工钱包地址
   */
  stakerAccount: string;
  /**
   * 算工名称转换后的string;
   */
  name: string;
  /**
   * 奖励总数
   */
  totalReward: string;
  /**
   * 租用率
   */
  rentRate: string | number;
  /**
   * 租金数
   */
  totalRentFee: string;
  /**
   * 销毁数
   */
  totalBurnFee: string;
};
// calcPoints: 0      算力值
// stakerAccount: "5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc"      钱包地址
// stakerName: [98, 111, 98, 95, 115, 116, 97, 115, 104]       线上身份
// totalBurnFee: "0" 
// totalGpuNum: 0       gpu总数
// totalRentFee: "0"     租金数
// totalRentedGpu: 0   租用Gpu个数
// totalReward: "0"     奖励总数

const getnum = (num: string):string => { 
  const num1 = new BigNumber(Number(num)/ Math.pow(10,15)).toFormat()
  return num1.substring(0,num1.indexOf(".")+5); 
}

export const getList = async (currentPage: number = 0, numOfEachPage: number = 20) => {
  // const hash = await request.send<string>("chain_getBlockHash");
  const [list, total] = await Promise.all([
    request.send<Array<ItemType>>("onlineProfile_getStakerListInfo", [
      // hash,
      currentPage == 0 ? 0 : currentPage - 1,
      numOfEachPage
    ]),
    request.sendUnique<number>("onlineProfile_getStakerNum")
  ]);
  return {
    list: list.map(
      (s,i) => ({
          ...s, 
          totalReward: getnum(s.totalReward),
          index: s.index?s.index:i+1,
          name: s.stakerName.length ? byteToStr(s.stakerName): s.stakerAccount , 
          rentRate: Number(s.totalRentedGpu) != 0 ?((Number(s.totalRentedGpu)/Number(s.totalGpuNum)*100)+'%') : 0
        })
      ),
    total
  };
};

// 可根据算力值排序
// var arr = [
//   {name:'zopp',age:0},
//   {name:'gpp',age:18},
//   {name:'yjj',age:8}
// ];

// function compare(property){
//   return function(a,b){
//       var value1 = a[property];
//       var value2 = b[property];
//       return value1 - value2;
//   }
// }
// console.log(arr.sort(compare('age')))

// 截取后四位
// (function getnum() { 
//   var num = '22.123456'; 
//   var result = num.substring(0,num.indexOf(".")+3); 
//   console.log(result);
// })()