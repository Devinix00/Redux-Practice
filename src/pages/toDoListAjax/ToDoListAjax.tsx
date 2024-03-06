import React from "react";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import AddToDoForm from "../../components/common/toDoList/addToDoForm/AddToDoForm";
import ToDo from "../../components/common/toDoList/toDo/ToDo";
import useAddToDos from "../../hooks/useAddToDo";
import { useGetTodosQuery } from "../../redux/api/toDosApi";

function ToDoListAjax(): JSX.Element {
  const { data: toDos } = useGetTodosQuery();
  const { inputValue, setInputValue, handleSubmit } = useAddToDos("ajax");

  return (
    <React.Fragment>
      <Breadcrumb />
      <AddToDoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      <ul>
        {toDos?.map((toDo: IToDo) => (
          <ToDo key={toDo.id} toDo={toDo} type="ajax" />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ToDoListAjax;
