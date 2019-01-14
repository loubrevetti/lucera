import { FETCH_BY_LP, FETCH_TRADES } from "../../actions/types";

const initialState = {
  trades: [],
  lp: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRADES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
