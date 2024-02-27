import React from "react";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import CounterExample from "../../components/counterExample/CounterExample";

function Home(): JSX.Element {
  return (
    <React.Fragment>
      <Breadcrumb />

      <CounterExample />
    </React.Fragment>
  );
}

export default Home;
