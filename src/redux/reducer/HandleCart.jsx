const cart = [];

const HandleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case 'ADDITEM':
      const exist = state.find(x => x.id === product.id);
      if (exist) {
        return state.map(x => x.id === product.id ? {...x, qty: x.qty +1} : x);
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          }
        ];
      }
    case 'DELETEITEM':
      const existOne = state.find(x => x.id === product.id);
      if (existOne.qty === 1) {
        return state.filter(x => x.id !== existOne.id);
      } else {
        return state.map(x => x.id === product.id ? {...x, qty: x.qty -1} : x);
      }
    default:
      return state;
  }
  
};

export default HandleCart;