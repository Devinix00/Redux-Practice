import React from "react";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import { useSelector } from "react-redux";

function ToDoList(): JSX.Element {
  const count = useSelector((state: IRootState) => state.counter);
  console.log(count);
  return (
    <React.Fragment>
      <Breadcrumb />
    </React.Fragment>
  );
}

export default ToDoList;
