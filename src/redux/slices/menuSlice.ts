import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
    key: number;
}

const initialState: MenuState = {
    key: 4,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        changeMenuKey: (state, action: PayloadAction<number>) => {
            state.key = action.payload;
        }
    },
});

export const { changeMenuKey } = menuSlice.actions;
export default menuSlice.reducer;