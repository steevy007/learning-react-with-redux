

import { useSelector, useDispatch  } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter=useSelector(state=>state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementByFive=()=>{
    dispatch(counterActions.increase(15))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decreement());
  };

  return (
    <main className={classes.counter}>
      <h1>Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFive}>Increment By Five</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter

/* class Counter extends Component {

  incrementHandler() {
    this.props.increment()
  }

  decrementHandler() {
    this.props.decrement()
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    counter:state.counter
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    increment:()=>dispatch({type:'increment'}),
    decrement:()=>dispatch({type:'decrement'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Counter); */
