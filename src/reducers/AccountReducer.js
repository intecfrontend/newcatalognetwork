const initialState = {
    loginScreen: false,
    accountData: ""
}

const AccountReducer = (state = initialState, action) => {

    switch (action.type) {
        case "TOGGLE_LOGIN_SCREEN": {
            return {
                ...state,
                loginScreen: action.value
            }
        }
        case "UPDATE_ACCOUNT_INFO": {
            return {
                ...state,
                accountData: action.value
            }
        }

        default:
            return state;
    }
}

export default AccountReducer;