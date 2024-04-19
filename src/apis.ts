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
 * chain_getBlock 获取戳及块高
 * onlineProfile_getStakerNum: 算工数量
 * onlineProfile_getStakerListInfo: 分页获取数据
 * onlineProfile_getOpInfo: 获取奖励信息
 * onlineProfile_getPosGpuInfo: 获取地图算力节点
 * onlineProfile_getStakerInfo: 获取总金额
 * onlineProfile_getStakerIdentity: 获取算工名称
 */
 type Methods =
 | "chain_getBlockHash"
 | "chain_getBlock"
 | "onlineProfile_getOpInfo"
 | "onlineProfile_getStakerNum"
 | "onlineProfile_getPosGpuInfo"
 | "onlineProfile_getStakerListInfo"
 | "onlineProfile_getStakerInfo"
 | "onlineProfile_getStakerIdentity";

class DBCRequest {
  ws: WebSocket;
  keepAlive: boolean = true;
  wsOpened: boolean = false;
  // url: string = "wss://infotest2.dbcwallet.io";
  url: string = 'wss://info1.dbcwallet.io';
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
        this.ws = new WebSocket(this.url);
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
  calcPoints: number;
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
   * 已解锁奖励
   */
  unlockReward: string;
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
  totalRentFee: string| number;
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
const getRent = (num: number):string => {
  if( num>=100 ){
    return '100'
  }
  let num1 = String(num);
  return num1.substring(0,num1.indexOf(".")+3);
}

export const getNumber =  async () => {
  return request.sendUnique<number>("onlineProfile_getStakerNum")
};

// export const getList = async (currentPage: number = 0, numOfEachPage: number = 20) => {
//   // const hash = await request.send<string>("chain_getBlockHash");
//   const [list, total] = await Promise.all([
//     request.send<Array<ItemType>>("onlineProfile_getStakerListInfo", [
//       // hash,
//       currentPage == 0 ? 0 : currentPage - 1,
//       numOfEachPage
//     ]),
//     request.sendUnique<number>("onlineProfile_getStakerNum")
//   ]);
//   // const data = await getStakerInfo(list)
//   return {
//     list: list.map(
//       (s,i) => ({
//           ...s,
//           totalRentFee: Math.round(Number(s.totalRentFee)/ Math.pow(10,15)),
//           calcPoints: Number(s.calcPoints)/100,
//           unlockReward: getnum(s.totalReward),
//           // totalReward: getnum(String(data[i]*4/3)),
//           totalReward: '···',
//           index: s.index >= 0?s.index+1:i+1,
//           name: s.stakerName.length ? byteToStr(s.stakerName): s.stakerAccount ,
//           rentRate: Number(s.totalRentedGpu) != 0 ?(getRent(Number(s.totalRentedGpu)/Number(s.totalGpuNum)*100)+'%') : 0
//         })
//       ),
//     total
//   };
// };

export const getList = async (currentPage: number = 0, numOfEachPage: number = 50) => {
  let list:Array<any> = []
  await request.send<Array<ItemType>>("onlineProfile_getStakerListInfo", [
    // hash,
    currentPage == 0 ? 0 : currentPage - 1,
    numOfEachPage
  ]).then(res => {
    list = res
  })
  return {
    list: list.map(
      (s,i) => ({
        ...s,
        totalRentFee: Math.round(Number(s.totalRentFee)/ Math.pow(10,15)),
        calcPoints: Number(s.calcPoints)/100,
        unlockReward: getnum(s.totalReleasedReward),
        totalReward: getnum(s.totalReward),
        index: s.index >= 0?s.index+1:i+1,
        name: s.stakerName.length ? byteToStr(s.stakerName): s.stakerAccount ,
        rentRate: Number(s.totalRentedGpu) != 0 ?(getRent(Number(s.totalRentedGpu)/Number(s.totalGpuNum)*100)+'%') : 0
      })
    )
  };
};

export const getPosGpuInfo = async () => {
  return request.sendUnique<Array<any>>("onlineProfile_getPosGpuInfo");
};

// export const getStakerInfo = async (list: any) => {
//   let bewArray:Array<any> = []
//   for(let i=0; i< list.length;i++){
//     await request.send<any>("onlineProfile_getStakerInfo",[list[i].stakerAccount]).then(
//       res => {
//         // let data = 0
//         // res.stashStatistic.linearReleaseReward && res.stashStatistic.linearReleaseReward.map( (el: string) => {
//         //   data += Number(el)
//         // })
//         bewArray[i] = res.stashStatistic.totalEarnedReward
//       }
//     )
//   }
//   return bewArray 
// };
export const getBlock = async ()=>{
  const hash = await request.sendUnique<any>("chain_getBlock");
  let block = Number(hash.block.header.number)
  return block
}
export const getStakerIdentity = async (list: any) => {
  let bewArray:Array<any> = []
  for(let i=0; i< list.length;i++){
    await request.send<any>("onlineProfile_getStakerIdentity",[list[i].machine_owner]).then(
      res => {
        bewArray.push(res)
      }
    )
  }
  return bewArray
};
// 可根据算力值排序
export const compare = (property: any) => {
  return function(a: any, b: any){
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
  }
}
