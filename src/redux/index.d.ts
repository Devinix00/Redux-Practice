interface IRootState {
  counterReducer: number;
  toDosReducer: ToDo[];
}

interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}


