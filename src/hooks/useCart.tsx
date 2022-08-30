import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../store';

const useCart = () => {
  const burgers = useSelector((rootState: RootState) => rootState.burgers);
  const cart = useSelector((rootState: RootState) => rootState.cart);

  const dispatch = useDispatch<Dispatch>();

  const initListBurgers = useCallback(() => {
    dispatch.burgers.getBurgers();
  }, [dispatch.burgers]);

  const addToCart = (data: any) => {
    dispatch.cart.add(data);
  };

  const removeFromCart = (data: any) => {
    dispatch.cart.remove(data);
  };

  useEffect(() => {
    initListBurgers();
  }, [initListBurgers]);

  return {
    cart,
    burgers,
    addToCart,
    removeFromCart,
  };
};

export default useCart;
