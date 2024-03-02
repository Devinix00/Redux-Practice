import React from "react";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import CounterExample from "../../components/counterPage/counterExample/CounterExample";

function Counter(): JSX.Element {
  return (
    <React.Fragment>
      <Breadcrumb />

      <CounterExample />
    </React.Fragment>
  );
}

export default Counter;
