import { API } from "../api/api";

const SET_ORDERS = 'SET_ORDERS';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

let initialState = {
  orders: [],
  loading: true
};

const ordersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ORDERS:
      return { ...state, orders: action.orders };
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};



export const setOrders = (orders: any) => ({ type: SET_ORDERS, orders })
export const toggleLoading = (loading: any) => ({ type: TOGGLE_LOADING, loading })

export const getOrders = () => async (dispatch: any) => {
  dispatch(toggleLoading(true));
  let data = await API.getOrders();
  dispatch(toggleLoading(false));
  dispatch(setOrders(data));
}

export default ordersReducer;
