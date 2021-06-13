import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from "./../Utils/ActionTypes";
const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};
