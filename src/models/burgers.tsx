import {createModel} from '@rematch/core';
import {RootModel} from '.';
import * as api from '../services/api/burgers';

export const burgers = createModel<RootModel>()({
  state: [],
  reducers: {
    updateData(state, payload) {
      state = payload;
      return state;
    },
    resetData(state) {
      state = [];
      return state;
    },
  },
  effects: dispatch => ({
    async getBurgers() {
      const response = await api.getBurgers();
      dispatch.burgers.updateData(response);
      return response;
    },
  }),
});
