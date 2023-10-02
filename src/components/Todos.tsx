import React from "react";
import { Todo } from "../Model";
import "./styles.css";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedtodos: Todo[];
  setcompletedtodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos = ({
  todos,
  settodos,
  completedtodos,
  setcompletedtodos,
}: Props) => {
  return (
    <div className="main">
      <Droppable droppableId="Todo">
        {(provided) => (
          <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="heading">In Progress</span>
            {todos.map((todo,index) => {
              return (
                <SingleTodo  index={index} todos={todos} settodos={settodos} todo={todo} />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="Completed">
        {
          (provided)=>(
            <div className="completedtodos" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="heading">Completed</span>
            {completedtodos.map((todo,index) => {
              return (
                <SingleTodo
                index={index}
                  todos={completedtodos}
                  settodos={setcompletedtodos}
                  todo={todo}
                />
              );
            })}
            {provided.placeholder}
          </div>

          )
        }
       
      </Droppable>
    </div>
  );
};

export default Todos;
