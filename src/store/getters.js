export default {
  token:state => (state.user.userInfo||{}).token,
  userInfo:state => state.user.userInfo,
  routes:state => state.permission.routes,
  isCollapse:state => state.setting.isCollapse,
  cachedViews: state => state.tagsView.cachedViews,
  visitedViews: state => state.tagsView.visitedViews,
}
