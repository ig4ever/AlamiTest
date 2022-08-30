import {createModel} from '@rematch/core';
import {RootModel} from '.';

export const cart = createModel<RootModel>()({
  state: [] as any[],
  reducers: {
    add(state, payload: any) {
      state.push(payload);
      return state;
    },
    remove(state, payload) {
      const indexOfObject = state.findIndex(
        (data: any) => data?.id === payload?.id,
      );

      state.splice(indexOfObject, 1);
      return state;
    },
  },
});
