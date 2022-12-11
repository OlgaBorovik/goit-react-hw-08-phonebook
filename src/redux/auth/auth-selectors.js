const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUserName = state => state.auth.user.name;
const selectUserEmail = state => state.auth.user.email;

const selectIsRefreshing = state => state.auth.user.isRefreshing;

const authSelectors = {
    selectIsLoggedIn,
    selectUserName,
    selectUserEmail,
    selectIsRefreshing,
}
export default authSelectors