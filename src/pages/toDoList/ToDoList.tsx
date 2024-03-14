import React from "react";
import { useSelector } from "react-redux";
import AddToDoForm from "../../components/common/toDoList/addToDoForm/AddToDoForm";
import ToDo from "../../components/common/toDoList/toDo/ToDo";
import { RootState } from "../../redux/store/store";
import useAddToDos from "../../hooks/useAddToDo";

function ToDoList(): JSX.Element {
  const toDos = useSelector((state: RootState) => state.toDos);
  const { inputValue, setInputValue, handleSubmit } =
    useAddToDos("withOutAjax");

  return (
    <React.Fragment>
      <AddToDoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      <ul>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} toDo={toDo} type="withOutAjax" />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ToDoList;
