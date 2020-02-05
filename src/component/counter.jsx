import React from "react";
import { connect } from "react-redux";
import { onIncrement, onDecrement, onDelete } from "../actions";

// class Counter extends Component {
const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  // render() {
  // const { counter, onIncrement, onDecrement, onDelete } = this.props;
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  return (
    <div className="row">
      <div className="col-1">
        <span className={getBadgeClasses()}>{formatCount()}</span>
      </div>
      <div className="col">
        <button onClick={onIncrement} className="btn btn-secondary btn-sm">
          +
        </button>
        <button
          onClick={onDecrement}
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button onClick={onDelete} className="bnt btn-danger btn-sm">
          Delete
        </button>
      </div>
    </div>
  );
  // }
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  const counter = ownProps.counter;
  return {
    onIncrement: () => dispatch(onIncrement(counter)),
    onDecrement: () => dispatch(onDecrement(counter)),
    onDelete: () => dispatch(onDelete(counter.id))
  };
};
export default connect(null, mapDispatchtoProps)(Counter);
