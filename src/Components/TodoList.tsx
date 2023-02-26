import React from "react";
import { Todo } from "../Model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todoElement) => (
        <SingleTodo
          todo={todoElement}
          key={todoElement.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};
