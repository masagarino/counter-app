import { INCREMENT, DECREMENT, DELETE, RESET } from "./types";

//ACTION
export const onIncrement = counter => {
  return {
    type: INCREMENT,
    payload: counter
  };
};

export const onDecrement = counter => {
  return {
    type: DECREMENT,
    payload: counter
  };
};

export const onDelete = id => {
  return {
    type: DELETE,
    payload: id
  };
};

export const onReset = () => {
  return {
    type: RESET,
  };
};
