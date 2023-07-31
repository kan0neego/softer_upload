import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userSlice } from "@/entities/user";
import { diskSlice } from "@/entities/disk";
import { filesSlice } from "@/entities/files";

export const store = configureStore({
  reducer: {
    user: userSlice,
    disk: diskSlice,
    files: filesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
