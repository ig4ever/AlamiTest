import {Models} from '@rematch/core';
import {cart} from './cart';
import {burgers} from './burgers';

export interface RootModel extends Models<RootModel> {
  cart: typeof cart;
  burgers: typeof burgers;
}

export const models: RootModel = {cart, burgers};
