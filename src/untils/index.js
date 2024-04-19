import { ApiPromise, WsProvider } from '@polkadot/api'
import BigNumber from "bignumber.js";

const node = {
  dbc: 'wss://info1.dbcwallet.io' // 公链正式链
}
let api  = null

// 链接账户
export const initNetwork = async () => {
  if (!api) {
    const provider = new WsProvider(node.dbc)
    api = await ApiPromise.create({ 
      provider
    })
  }
  return {
    api
  }
}


/**
 * dbcPriceOcw 获取链上DBC的实时价格
 * 
 * @return data:返回链上DBC的实时价格
 */
 export const dbcPriceOcw = async () => {
  await initNetwork();
  let de = await api.query.dbcPriceOCW.avgPrice();
  return de?.toJSON()
}

/**
 * totalDestroy 返回链上DBC的销毁数量
 * 
 * @return data:返回链上DBC的销毁数量
 */

const getnum1 = (num) => {
  const num1 = new BigNumber(Number(num)/ Math.pow(10,15)).toFormat()
  return num1.substring(0,num1.indexOf("."));
}

export const totalDestroy = async () => {
  await initNetwork();
  let de = await api.query.genericFunc.totalDestroy('5GR31fgcHdrJ14eFW1xJmHhZJ56eQS7KynLKeXmDtERZTiw2');
  let num = de?.toJSON()
  const returnNum = getnum1(num)
  return returnNum
}

//
export const getBalance = async () => {
  await initNetwork()
  const balance = await api.query.system.account('5GR31fgcHdrJ14eFW1xJmHhZJ56eQS7KynLKeXmDtERZTiw2')
  const returnData = balance.toJSON()
  const data = Number(returnData.data.free) / Math.pow(10, 15) // 可转账DBC
  return data
}