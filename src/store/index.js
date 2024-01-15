import {
  createReduxStore,
  register,
} from '@wordpress/data';

const storeName = 'example/items';

const defaultState = [];

const actions = {
  addItem(item) {
    return {
      type: 'ADD_ITEM',
      item,
    };
  }
};
const reducer = (
  state = defaultState,
  action
) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];
  }
  return state;
};
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
