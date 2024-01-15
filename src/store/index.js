import {
  createReduxStore,
  register,
} from '@wordpress/data';

const storeName = 'example/items';

const defaultState = [];

const actions = {};
const reducer = () => [];
const selectors = {};


register(
  createReduxStore(
    storeName,
    {
      actions,
      reducer,
      selectors,
    }
  )
);
