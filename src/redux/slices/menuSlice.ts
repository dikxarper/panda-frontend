import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
    key: number;
}

const initialState: MenuState = {
    key: 1,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeMenuKey: (state, action: PayloadAction<number>) => {
            state.key = action.payload;
        }
    },
});

export const { changeMenuKey } = authSlice.actions;
export default authSlice.reducer;