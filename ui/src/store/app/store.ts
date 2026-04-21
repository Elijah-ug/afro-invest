import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/userQuery';
import { receiverQuery } from '../features/receiverQuery';
import { investmentQuery } from '../features/investmentQuery';
import { investmentPlansQuery } from '../features/investmentPlansQuery';

export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    [receiverQuery.reducerPath]: receiverQuery.reducer,
    [investmentQuery.reducerPath]: investmentQuery.reducer,
    [investmentPlansQuery.reducerPath]: investmentPlansQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userSlice.middleware,
      receiverQuery.middleware,
      investmentQuery.middleware,
      investmentPlansQuery.middleware,
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
