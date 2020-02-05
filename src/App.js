import React from "react";
import Counters from "./component/counters";
import Navbar from "./component/navbar";
import { connect } from "react-redux";
import "./App.css";

const App = ({ counters }) => {
  return (
    <React.Fragment>
      <Navbar totalCounters={counters.filter(c => c.value > 0).length} />
      <main role="main" className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  counters: state.counters.counters
});
export default connect(mapStateToProps, {})(App);
