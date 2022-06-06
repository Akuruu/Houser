import { ADD_CAR, START_CAR, STOP_CAR } from "./actions";

// Here we pass a default value of initalState if none is provided
export default function reducer(state = initalState, action) {
  switch (action.type) {
    case ADD {},
    default: {
      return state;
    }
  }
}
