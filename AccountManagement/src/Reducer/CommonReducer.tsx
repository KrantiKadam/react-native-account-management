import { combineReducers } from 'redux';
import AccountReducer from './AccountReducer';
export default function getRootReducer() {
    return combineReducers({
        // nav: navReducer,
        accountReducer: AccountReducer,
    });
}
