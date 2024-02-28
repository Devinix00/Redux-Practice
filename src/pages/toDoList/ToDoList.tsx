import React from "react";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import { useSelector } from "react-redux";
import AddToDoForm from "../../components/addToDoForm/AddToDoForm";
import ToDo from "../../components/toDo/ToDo";

function ToDoList(): JSX.Element {
  const toDos = useSelector((state: IRootState) => state.toDosReducer);

  return (
    <React.Fragment>
      <Breadcrumb />
      <AddToDoForm />
      <ul>
        {toDos?.map((toDo, i) => (
          <ToDo key={i} toDo={toDo} />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ToDoList;
