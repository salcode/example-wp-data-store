import {
  createReduxStore,
  register,
} from '@wordpress/data';

const storeName = 'example/items';

const defaultState = [];

const actions = {};
const reducer = () => [];
const selectors = {
  getItems( state ) {
    return state;
  }
};

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
