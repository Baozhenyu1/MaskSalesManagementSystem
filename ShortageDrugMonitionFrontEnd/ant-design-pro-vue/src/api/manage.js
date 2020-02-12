import { axios } from '@/utils/request'

const api = {
  test: '/ShortageDrugMonitoring/api-backend/ntest/?format=json',
  tableList: '/ShortageDrugMonitoring/api-backend/StoreTable/?format=json',
  analysisList: '/ShortageDrugMonitoring/api-backend/SellTable/?format=json',
  deliveryList: '/ShortageDrugMonitoring/api-backend/deliveryTable/?format=json',
  quotaLIst: '/ShortageDrugMonitoring/api-backend/quotaTable/?format=json',
  lineChart: '/ShortageDrugMonitoring/api-backend/sellLineChart/?format=json',
  storeDetail: '/ShortageDrugMonitoring/api-backend/storeDetail/?format=json',

  user: '/user',
  role: '/role',
  service: '/ShortageDrugMonitoring/api-backend/ManShortagedataTable/?format=json',
  mapGeo: '/ShortageDrugMonitoring/api-backend/ProvincialAdministrativeDivision/?format=json',
  reNum: '/ShortageDrugMonitoring/api-backend/ProDrugCnt/?format=json',
  item: '/ShortageDrugMonitoring/api-backend/ManShortagedata/?format=json',
  info: '/ShortageDrugMonitoring/api-backend/ManShortagedataList/?format=json',
  report: '/ShortageDrugMonitoring/api-backend/ManShortagedataReport/?format=json',
  reportItem: '/ShortageDrugMonitoring/api-backend/ManShortagedataReportTable/?format=json',
  drugcount: '/ShortageDrugMonitoring/api-backend/DrugCount/?format=json',//'http://111.231.88.241:4567/drugcount',
  rank: '/ShortageDrugMonitoring/api-backend/DayRanking/?format=json',
  company: '/ShortageDrugMonitoring/api-backend/CompanyDrugCount/?format=json',
  subscribeList: '/ShortageDrugMonitoring/api-backend/Subscribe/?format=json',
  subscribeAdd: '/ShortageDrugMonitoring/api-backend/SubscribeAdd/?format=json',
  subscribeUpdate: '/ShortageDrugMonitoring/api-backend/SubscribeUpdate/?format=json',
  subscribeDelete: '/ShortageDrugMonitoring/api-backend/SubscribeDelete/?format=json',
  noticeGet: '/ShortageDrugMonitoring/api-backend/MessageGet/?format=json',
  noticeDelete: '/ShortageDrugMonitoring/api-backend/MessageDelete/?format=json',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree',
  newtable: '/ShortageDrugMonitoring/api-backend/NewTable/?format=json',
  subtitle: '/ShortageDrugMonitoring/api-backend/GetSubtitles/?format=json',
  alterDrug: '/ShortageDrugMonitoring/api-backend/AlternativeDrug/?format=json',
  feedbackList: '/ShortageDrugMonitoring/api-backend/FeedbackList/?format=json',
  feedbackAdd: '/ShortageDrugMonitoring/api-backend/FeedbackAdd/?format=json',
  feedbackDelete: '/ShortageDrugMonitoring/api-backend/FeedbackDelete/?format=json',
  drugdataList: '/ShortageDrugMonitoring/api-backend/DrugdataList/?format=json',
  drugbidList: '/ShortageDrugMonitoring/api-backend/DrugBidList/?format=json',
  drugInfo: '/ShortageDrugMonitoring/api-backend/DrugIndication/?',
  wordCloud: '/ShortageDrugMonitoring/api-backend/wordcnt/',


  // 两张地图
  saleData: '/ShortageDrugMonitoring/api-backend/SellTable/',
  saleReservationData: '/ShortageDrugMonitoring/api-backend/SaleReservationRatio/',
}

export default api

export function apiTest () {
  return axios({
    url: api.test,
    method: 'get'
  })
}

export function getStoreDetail (parameter) {
  return axios({
    url: api.storeDetail,
    method: 'get',
    params: parameter
  })
}

export function getLineChart () {
  return axios({
    url: api.lineChart,
    method: 'get'
  })
}

export function getQuotaList (parameter) {
  return axios({
    url: api.quotaLIst,
    method: 'get',
    params: parameter
  })
}

export function getDeliveryList () {
  return axios({
    url: api.deliveryList,
    method: 'get'
  })
}

export function getTableList (parameter) {
  return axios({
    url: api.tableList,
    method: 'get',
    params: parameter
  })
}

export function getAnalysisList (parameter) {
  return axios({
    url: api.analysisList,
    method: 'get',
    params: parameter
  })
}

export function getWordCloud () {
  return axios({
    url: api.wordCloud,
    method: 'get'
  })
}

export function getDrugInfo (parameter) {
  return axios({
    url: api.drugInfo + 'medicine_name=' + parameter,
    method: 'get'
  })
}



export function getDrugBidList (parameter) {
  return axios({
    url: api.drugbidList,
    method: 'get',
    params: parameter
  })
}

export function getDrugDataList (parameter) {
  return axios({
    url: api.drugdataList,
    method: 'get',
    params: parameter
  })
}

export function sendFeedbackDelete (parameter) {
  return axios({
    url: api.feedbackDelete,
    method: 'get',
    params: parameter
  })
}

export function sendFeedbackAdd (parameter) {
  return axios({
    url: api.feedbackAdd,
    method: 'post',
    data: parameter
  })
}

export function getFeedbackList (parameter) {
  return axios({
    url: api.feedbackList,
    method: 'get',
    params: parameter
  })
}

export function getAlternative (parameter) {
  return axios({
    url: api.alterDrug,
    method: 'get',
    params: parameter
  })
}

export function getNewTable (parameter) {
  return axios({
    url: api.newtable,
    method: 'get',
    params: parameter
  })
}

export function getNoticeList () {
  return axios({
    url: api.noticeGet,
    method: 'get'
  })
}

export function getSubscribeList () {
  return axios({
    url: api.subscribeList,
    method: 'get'
  })
}

export function deleteNoticeItem (parameter) {
  return axios({
    url: api.noticeDelete + parameter,
    method: 'get'
  })
}

export function sendSubscribeAdd (parameter) {
  return axios({
    url: api.subscribeAdd,
    method: 'post',
    data: parameter
  })
}

export function sendSubscribeUpdate (parameter) {
  return axios({
    url: api.subscribeUpdate,
    method: 'post',
    data: parameter
  })
}

export function sendSubscribeDelete (parameter) {
  return axios({
    url: api.subscribeDelete + "&key=" + parameter,
    method: 'get'
  })
}

export function getUserList (parameter) {
  return axios({
    url: api.user,
    method: 'get',
    params: parameter
  })
}

export function getCompanyDrugCount (parameter) {
  return axios({
    url: api.company + "&threshold=" + parameter,
    method: 'get'
  })
}

export function getMapGeo () {
  return axios({
    url: api.mapGeo,
    method: 'get'
  })
}
export function getMapRe (parameter) {
  return axios({
    url: api.reNum + parameter,
    method: 'get'
  })
}

export function getInfo () {
  return axios({
    url: api.info,
    method: 'get'
  })
}

export function getItem (parameter) {
  return axios({
    url: api.item,
    method: 'get',
    params: parameter
  })
}

export function getSubtitle (parameter) {
  return axios({
    url: api.subtitle,
    method: 'get',
    params: parameter
  })
}

export function getReportItem (parameter) {
  return axios({
    url: api.reportItem + '&id_=' + parameter.split('id=')[1],
    method: 'get'
  })
}

export function getRoleList (parameter) {
  return axios({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getServiceList (parameter) {
  return axios({
    url: api.service + parameter,
    method: 'get'
  })
}

export function getDayRank (parameter) {
  return axios({
    url: api.rank + parameter,
    method: 'get'
  })
}

export function getDrugCount (parameter) {
  return axios({
    url: api.drugcount + parameter,
    method: 'get'
  })
}

export function getServiceReport (parameter) {
  return axios({
    url: api.report + parameter,
    method: 'get'
  })
}

export function getPermissions (parameter) {
  return axios({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return axios({
    url: api.orgTree,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return axios({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}


export function getSaleData () {
  return axios({
    url: api.saleData,
    method: 'get',
    params:{'map':1}
  })
}
export function getSaleReservationData () {
  return axios({
    url: api.saleReservationData,
    method: 'get'
  })
}