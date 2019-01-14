import { FETCH_TRADES } from "../types";

export const fetchTrades = (start, end, currentTrades = []) => dispatch => {
  fetch(`http://localhost:4100/api/v1/trades?start=${start}&end=${end}`)
    .then(response => response.json())
    .then(trades =>
      dispatch({
        type: FETCH_TRADES,
        payload: [...currentTrades, ...trades]
      })
    );
};
