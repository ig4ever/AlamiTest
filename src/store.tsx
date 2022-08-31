import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import {models, RootModel} from './models';
import immerPlugin from '@rematch/immer';
import loadingPlugin, {ExtraModelsFromLoading} from '@rematch/loading';

type FullModel = ExtraModelsFromLoading<RootModel>;

export const store = init<RootModel, FullModel>({
  models,
  redux: {
    rootReducers: {LOGOUT: () => undefined},
  },
  plugins: [loadingPlugin(), immerPlugin()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
