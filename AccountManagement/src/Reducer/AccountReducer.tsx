import { createSlice } from '@reduxjs/toolkit';

const initialState = { accountData: {} };

const accountReducerSlice = createSlice({
    name: 'AccountReducer',
    initialState,
    reducers: {
        setAccountValue(state, action) {
            state.accountData = action.payload;
        },
    },
});

export const { setAccountValue } = accountReducerSlice.actions;
export default accountReducerSlice.reducer;
