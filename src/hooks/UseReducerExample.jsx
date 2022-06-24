import { useReducer } from "react";

/*
 * NOTE
 * -- useReducer
 * 1- reducer -> functions -> handle state
 * 2- action -> Object -> dispatch to reducer (type, payload)
 * 3- store -> stores state
 */

function init(initialCount) {
  return {count: initialCount};
}

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET:"RESET"
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + action.payload };
    case ACTIONS.DECREMENT:
      return { count: state.count - action.payload };
    case ACTIONS.RESET:
      return  init (0) ;
    default:
      return state;
  }
};

const UseReducerExample = ({initialCount}) => {

  const [state, dispatch] = useReducer(reducer, initialCount=0, init);

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT, payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT, payload: 1 });
  };

  const reset = () => {
    dispatch({ type: ACTIONS.RESET, payload:0 });
  };

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-info text-center">آشنایی با هوک useReducer</h5>
      <p className="alert alert-warning text-center">
        شمارش شما دوست عزیز برابر است با :{" "}
        <span className="badge rounded-pill bg-success">{state.count}</span>
      </p>
      <button className="btn btn-primary" onClick={increment}>
        اضافه بنما 😉
      </button>
     
      <button className="btn btn-danger" onClick={decrement}>
        کم بنما 🤠
      </button>
      <button className="btn btn-danger" onClick={reset}>
       ریست
      </button>
    </div>
  );
};

export default UseReducerExample;
