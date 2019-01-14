import { FETCH_BY_LP } from "../types";

export const fetchByLp = (
  start,
  end,
  currentTrades = [],
  lp,
  changedFilter
) => dispatch => {
  const filteredTrades = changedFilter ? [] : currentTrades;
  fetch(`http://localhost:4100/api/v1/trades/${lp}?start=${start}&end=${end}`)
    .then(response => response.json())
    .then(trades =>
      dispatch({
        type: FETCH_BY_LP,
        payload: [...filteredTrades, ...trades]
      })
    );
};
