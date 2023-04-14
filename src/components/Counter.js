import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increment5 = () => {
    dispatch(counterActions.increment5(5));
  };
  function decrement5 () {
    dispatch(counterActions.decrement5(5));
  };


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{ counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increment5}>+5</button>
        <button onClick={decrement5}>-5</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
