import { INCREMENT, DECREMENT, DELETE, RESET } from "../actions/types";

const initialState = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]
};

const counterReset = state =>
  state.counters.map(c => {
    c = { ...c, value: 0 };
    return c;
  });
//REDUCER
const counterReducer = (state = initialState, action) => {
  const counters = [...state.counters];
  const index = counters.indexOf(action.payload);
  switch (action.type) {
    case INCREMENT:
      counters[index] = { ...action.payload };
      counters[index].value++;
      return { ...state, counters: counters };
    case DECREMENT:
      counters[index] = { ...action.payload };
      counters[index].value--;
      return { ...state, counters: counters };
    case DELETE:
      const countersDelete = counters.filter(c => c.id !== action.payload);
      return { counters: countersDelete };
    case RESET:
      const reset = counterReset(state);
      return { ...state, counters: reset };
    default:
      return state;
  }
};

export default counterReducer;
