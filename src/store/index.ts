import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import rollStateSlice from "store/reducer/rollState.reducer";
import studentStateSlice from "./reducer/students.reducer";

const store = configureStore({
  reducer: {
    rollState: rollStateSlice,
    students: studentStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
