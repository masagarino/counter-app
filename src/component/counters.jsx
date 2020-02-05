import React from "react";
import Counter from "./counter";
import { connect } from "react-redux";
import { onReset } from "../actions";

// class Counters extends Component {
const Counters = ({ counters, onReset }) => {
  // console.log(counters);
  // render() {
  // const {counters, onReset, onDelete, onIncrement, onDecrement} = this.props;
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map(counter => (
        <Counter key={counter.id} counter={counter} />
      ))}
    </div>
  );
  // }
};

const mapStateToProps = state => ({
  counters: state.counters.counters
});
const mapDispatchToProps = (dispatch) => {
  return { onReset: () => dispatch(onReset()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
