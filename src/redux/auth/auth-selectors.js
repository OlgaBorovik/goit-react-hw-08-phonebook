const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUserName = state => state.auth.user.name;

const selectIsRefreshing = state => state.auth.user.isRefreshing;

const authSelectors = {
    selectIsLoggedIn,
    selectUserName,
    selectIsRefreshing,
}
export default authSelectors