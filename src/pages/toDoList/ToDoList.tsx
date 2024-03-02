import React from "react";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import { useSelector } from "react-redux";
import AddToDoForm from "../../components/addToDoForm/AddToDoForm";
import ToDo from "../../components/toDo/ToDo";
import { RootState } from "../../redux/store/store";

function ToDoList(): JSX.Element {
  const toDos = useSelector((state: RootState) => state.toDos);

  return (
    <React.Fragment>
      <Breadcrumb />
      <AddToDoForm />
      <ul>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} toDo={toDo} />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ToDoList;
