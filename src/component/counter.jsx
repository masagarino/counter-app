import React, { Component } from "react";

class Counter extends Component {

  componentDidUpdate(prevProps, prevState){
    console.log("Counter - Component did Update");
    console.log('prevProps ', prevProps);
    console.log('prevState ', prevState);
    if(prevProps.counter.value !== this.props.counter.value){
      //Ajax call to get new data
      console.log("GET NEW DATA!!!")

    }
  }

  componentWillUnmount(){
    console.log("Counter - Unmount");
  }

  render() {
    const {counter, onIncrement, onDecrement, onDelete} = this.props;
    console.log("Counter - Rendered");
    return (
      <div className='row' >
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          {/* <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button> */}
          <div className="col d-flex">
            <button
              className="btn btn-secondary btn-sm d-inline-flex"
              onClick={() => onIncrement(counter)}
            >
              +
            </button>
            <button
              className="btn btn-secondary btn-sm m-2 d-inline-flex"
              onClick={() => onDecrement(counter)}
              disabled={counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => onDelete(counter.id)}
              className="btn btn-danger btn-sm m-2 d-inline-flex"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
