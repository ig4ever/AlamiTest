import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import {models, RootModel} from './models';
import immerPlugin from '@rematch/immer';

const persistConfig = {
  key: 'root',
  whitelist: ['authToken', 'showIntroduction', 'messageNotSent', 'role'],
};

export const store = init<RootModel>({
  models,
  redux: {
    rootReducers: {LOGOUT: () => undefined},
  },
  plugins: [immerPlugin()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
