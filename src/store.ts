import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the user state
interface UserState {
    name: string;
    age: number;
}

// Initial state for the user
const initialState: UserState = {
    name: 'Jan Kowalski',
    age: 30,
};

// Create a slice for the user state
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Action to update the user's name
        updateName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        // Action to update the user's age
        updateAge: (state, action: PayloadAction<number>) => {
            state.age = action.payload;
        },
    },
});

// Export the actions to be used in components
export const { updateName, updateAge } = userSlice.actions;

// Create the Redux store
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
