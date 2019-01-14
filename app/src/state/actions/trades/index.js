import { FETCH_TRADES, FETCH_BY_LP } from "../types";

export const fetchTrades = (start, end) => dispatch => {
  fetch(`http://localhost:4100/api/v1/trades?start=${start}&end=${end}`)
    .then(response => response.json())
    .then(trades =>
      dispatch({
        type: FETCH_TRADES,
        payload: trades
      })
    );
};
