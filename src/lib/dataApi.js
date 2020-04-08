import Server from './Server'
export default{
  // 货车列表---------
  enquiryRefreshTruck (params) {
    return Server({
      url: 'columbus-boss/enquiry/existNewTruck',
      params,
      method: "POST"
    })
  },
  enquiryValidTruck (data) {
    return Server({
      url: 'columbus-boss/enquiry/validateTruckState',
      data,
      method: "POST"
    })
  },
  // 询价列表--------
  truckInfo (data) {
    return Server({
      url: 'columbus-boss/enquiry/truckDetail',
      data,
      method: "POST"
    })
  },
  enquiryValidCargo (data) {
    return Server({
      url: 'columbus-boss/enquiry/validateCargoState',
      data,
      method: "POST"
    })
  },
  lockCargo (data) {
    return Server({
      url: 'columbus-boss/enquiry/tryLockCurrentCargo',
      data,
      method: "POST"
    })
  },
  // 待派货车------
  dispatchRefreshTruck (data) {
    return Server({
      url: 'columbus-boss/dispatch/checkTruckListChange',
      data,
      method: "POST"
    })
  },
  dispatchValidTruck (data) {
    return Server({
      url: 'columbus-boss/dispatch/checkTruckDispatch',
      data,
      method: "POST"
    })
  },
  // 待派代单------
  dispatchRefreshCargo (data) {
    return Server({
      url: 'columbus-boss/dispatch/checkTruckCargoListChange',
      data,
      method: "POST"
    })
  },
  toOrder (data) {
    return Server({
      url: 'columbus-boss/dispatch/generateOrder',
      data,
      method: "POST"
    })
  },
  toCommon (data) {
    return Server({
      url: 'columbus-boss/dispatch/turnToOrdinary',
      data,
      method: "POST"
    })
  },
  cargoDetail (data) {
    return Server({
      url: 'columbus-boss/enquiry/cargoAndDecisionDetail',
      data,
      method: "POST"
    })
  },
  // 字典项
  getDic (data) {
    return Server({
      url: 'columbus-boss/common/dictData',
      data,
      method: "POST"
    })
  },
  // 编辑备注
  editRemarkInfo (data) {
    return Server({
      url: 'columbus-boss/enquiry/editRemarkInfo',
      data,
      method: "POST"
    })
  },
  checkRuleLine (data) {
    return Server({
      url: 'columbus-boss/enquiry/fixedLineCargoListInit',
      data,
      method: "POST"
    })
  },
  isNeedPage (data) {
    return Server({
      url: 'columbus-boss/enquiry/isNeedPage',
      data,
      method: "POST"
    })
  },
  queryDriverStatus (data) {
    return Server({
      url: 'columbus-boss/enquiry/queryDriverOrderStatus',
      data,
      method: "POST"
    })
  },
  queryUser (data) {
    return Server({
      url: 'columbus-boss/driver/suggestUserList',
      data,
      method: "POST"
    })
  },
  backDeposit (data) {
    return Server({
      url: 'columbus-boss/contract/deposit/return',
      data,
      method: "POST"
    })
  },
  updateDeposit (data) {
    return Server({
      url: 'columbus-boss/contract/deposit/update',
      data,
      method: "POST"
    })
  },
  addDeposit (data) {
    return Server({
      url: 'columbus-boss/contract/deposit/add',
      data,
      method: "POST"
    })
  },
  validDeposit (data) {
    return Server({
      url: 'columbus-boss/contract/deposit/checkDriver',
      data,
      method: "POST"
    })
  }
}
// V1.7
// 暂时不用
export function addTemp (data) {
  return Server({
    url: 'columbus-boss/contract/deposit/checkDriver',
    data,
    method: "POST"
  })
}
export function hasNewHiddenCargo (data) {
  return Server({
    url: 'columbus-boss/enquiry/hasNewHiddenCargo',
    data,
    method: "POST"
  })
}
export function queryTempList (data) {
  return Server({
    url: 'columbus-boss/contract/queryContractTemplateList',
    data,
    method: "POST"
  })
}
export function checkBeforeSign (data) {
  return Server({
    url: 'columbus-boss/sign/checkBeforeSign',
    data,
    method: "POST"
  })
}
export function queryContractInfo (data) {
  return Server({
    url: 'columbus-boss/contract/querySignInContractInfo',
    data,
    method: "POST"
  })
}
export function queryProcess (data) {
  return Server({
    url: 'columbus-boss/sign/processOfSign',
    data,
    method: "POST"
  })
}
export function saveContract (data) {
  return Server({
    url: 'columbus-boss/sign/saveContract',
    data,
    method: "POST",
    needLoading: true
  })
}
export function deleteContract (data) {
  return Server({
    url: 'columbus-boss/sign/deleteContract',
    data,
    method: "POST"
  })
}
export function noticeDriver (data) {
  return Server({
    url: 'columbus-boss/sign/noticeDriverForSign',
    data,
    method: "POST"
  })
}
export function initiate (data) {
  return Server({
    url: 'columbus-boss/sign/launchSign',
    data,
    method: "POST"
  })
}
export function stamp (data) {
  return Server({
    url: 'columbus-boss/sign/sealForSign',
    data,
    method: "POST"
  })
}
export function unSignReason (data) {
  return Server({
    url: 'columbus-boss/unSign/unSignReason',
    data,
    method: "POST"
  })
}
export function confirmUnSign (data) {
  return Server({
    url: 'columbus-boss/unSign/confirmUnSign',
    data,
    method: "POST"
  })
}
export function queryContractDriverInfo (data) {
  return Server({
    url: 'columbus-boss/driver/driverInfo',
    data,
    method: "POST"
  })
}
/** 0116需求 */
export function queryCostInfo (data) {
  return Server({
    url: 'columbus-boss/driver/order/costInformationQuery',
    data,
    method: "POST",
    needLoading: true
  })
}
// 查询定金信息
export function queryDepositInfo (data) {
  return Server({
    url: 'columbus-boss/driver/order/depositInfo',
    data,
    method: "POST",
    needLoading: true
  })
}
// 取消司机支付定金
export function cancelDepositItem (data) {
  return Server({
    url: 'columbus-boss/driver/order/cancelDepositItem',
    data,
    method: "POST",
    needLoading: true
  })
}
export function saveCostInfo (data) {
  return Server({
    url: 'columbus-boss/driver/order/costInformationEdit',
    data,
    method: "POST"
  })
}
export function queryExcItemList (data) {
  return Server({
    url: 'columbus-boss/driver/order/additionalItemList',
    data,
    method: "POST"
  })
}
export function addExceptionInfo (data) {
  return Server({
    url: 'columbus-boss/driver/order/orderExceptionCostAdd',
    data,
    method: "POST"
  })
}
export function addPlatformReward (data) {
  return Server({
    url: 'columbus-boss/driver/order/platformRewardCostAdd',
    data,
    method: "POST"
  })
}
export function getDic (data) {
  return Server({
    url: 'columbus-boss/common/dictData',
    data,
    method: "POST"
  })
}
export function getDriverBaseInfo (data) {
  return Server({
    url: 'columbus-boss/driver/driverDetail',
    data,
    method: "POST"
  })
}
export function returnAdditionCost (data) {
  return Server({
    url: 'columbus-boss/settle/returnAdditionCost',
    data,
    method: "POST"
  })
}
export function markAdditionCostSettled (data) {
  return Server({
    url: 'columbus-boss/settle/markAdditionCostSettled',
    data,
    method: "POST",
  })
}
export function markOrderFinishSettle (data) {
  return Server({
    url: 'columbus-boss/settle/markOrderFinishSettle',
    data,
    method: "POST"
  })
}
export function markOrderStartSettle (data) {
  return Server({
    url: 'columbus-boss/settle/markOrderStartSettle',
    data,
    method: "POST"
  })
}
export function qrCodeInitAmount (data) {
  return Server({
    url: 'columbus-boss/orderFreight/qrCodeInitAmount',
    data,
    method: "POST",
  })
}
export function qrCodeAndOtherInfo (data) {
  return Server({
    url: 'columbus-boss/orderFreight/qrCodeAndOtherInfo',
    data,
    method: "POST"
  })
}
export function validateDelete (data) {
  return Server({
    url: 'columbus-boss/contract/deposit/validateDelete',
    data,
    method: "POST"
  })
}
export function deleteDeposit (data) {
  return Server({
    url: 'columbus-boss/contract/deposit/delete',
    data,
    method: "POST"
  })
}
export function queryChangeReason (data) {
  return Server({
    url: 'columbus-boss/driver/queryChangeReason',
    data,
    method: "POST"
  })
}
export function updateChangeReason (data) {
  return Server({
    url: 'columbus-boss/driver/updateChangeReason',
    data,
    method: "POST"
  })
}
export function checkDriverRegister (data) {
  return Server({
    url: 'columbus-boss/driver/checkDriverIsAuthentication',
    data,
    method: "POST"
  })
}
export function querySMSLeftNumber (data) {
  return Server({
    url: 'columbus-boss/driver/querySMSNumber',
    data,
    method: "POST"
  })
}
export function queryTruckInfo (data) {
  return Server({
    url: 'columbus-boss/driver/queryTruckInfoByDriverAccount',
    data,
    method: "POST"
  })
}
export function querySMSTemplateList (data) {
  return Server({
    url: 'columbus-boss/driver/querySMSTemplateList',
    data,
    method: "POST"
  })
}
export function sendSMSToDriver (data) {
  return Server({
    url: 'columbus-boss/driver/sendSMSToDriver',
    data,
    method: "POST"
  })
}
export function queryOldLine (data) {
  return Server({
    url: 'columbus-boss/routecost/queryExperiencedDriverRoutepoint',
    data,
    method: "POST",
  })
}
export function queryRoutePlan (data) {
  return Server({
    url: 'columbus-boss/routecost/queryRoutePlan',
    data,
    method: "POST"
  })
}
export function reportRoute (data) {
  return Server({
    url: 'columbus-boss/routecost/missingRouteRecord',
    data,
    method: "POST"
  })
}
export function saveRoutePlan (data) {
  return Server({
    url: 'columbus-boss/routecost/saveRoutePlan',
    data,
    trimNull: false,
    method: "POST"
  })
}
export function selfCheckDriverCargo (data) {
  return Server({
    url: 'columbus-boss/common/selfCheckDriverCargo',
    data,
    method: "POST"
  })
}
export function querySchedulerReferenceInfo (data) {
  return Server({
    url: 'columbus-boss/schedulerReferenceInfo/querySchedulerReferenceInfo',
    data,
    method: "POST"
  })
}
export function queryctrlWorkbenchTop (data) {
  return Server({
    url: '/columbus-boss/ctrlWorkbench/topBar',
    data,
    mock: true,
  })
}
export function queryctrlWorkbenchContract (data) {
  return Server({
    url: 'columbus-boss/ctrlWorkbench/contractInfo',
    data,
    mock: true,
    method: "POST"
  })
}
export function queryctrlWorkbenchDriverInfo (data) {
  return Server({
    url: 'columbus-boss/ctrlWorkbench/driverInfoDegreeOfPerfection',
    data,
    method: "POST",
    mock: true,
  })
}

export function getAttendanceData (data) {
  return Server({
    url: 'columbus-boss/driver/clockIn/assignMonthClockInInfo',
    data,
    method: "POST"
  })
}

export function orderCard (data) {
  return Server({
    url: 'columbus-boss/ctrlWorkbench/orderCard',
    data,
    mock: true,
    method: "POST"
  })
}
