import { FETCH_BY_LP } from "../../actions/types";

const initialState = {
  lp: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BY_LP:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
