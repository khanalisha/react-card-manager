import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { AddTodo } from "./todo/AddTodo";
import { TodoCard } from "./todo/TodoCard";
import { AddProgressTodo } from "./progress/AddProgressTodo";
import { AddProgressCard } from "./progress/AddProgressCard";

export const Dashboard = ({
  todo,
  setTodo,
  Todos,
  setTodos,
  progressTodo,
  setProgressTodo,
  setProgressTodos,
  progressTodos,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReview, setIsOpenReview] = useState(false);
  const [isOpenProgress, setIsOpenProgress] = useState(false);
  const [isOpenToDO, setIsOpenToDO] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    console.log("true");
  };
  const ReviewAddHandle = () => {
    setIsOpenReview(true);
  };

  const handleProgressAdd = () => {
    setIsOpenProgress(true);
  };
  const handleOpenAddTod = () => {
    setIsOpenToDO(true);
  };
  return (
    <SECTION>
      <p className="p-heading">Todos</p>

      <div className="container">
        <div className="box">
          <div className="header">
            <span>To Do</span>{" "}
            <span>
              <BsThreeDots />
            </span>
          </div>
          <div className="cards">
            {Todos.length > 0 &&
              Todos.map((el, index) => (
                <div>
                  <TodoCard
                    key={el.id}
                    Todos={Todos}
                    {...el}
                    index={index}
                    className="todo-card"
                  />{" "}
                </div>
              ))}
          </div>
          <div className="add-todo">
            {!isOpenToDO ? (
              <div onClick={handleOpenAddTod}>
                {" "}
                <span>
                  <FiPlus />
                </span>{" "}
                <span>Add a card</span>
              </div>
            ) : (
              <AddTodo
                todo={todo}
                setTodo={setTodo}
                Todos={Todos}
                setTodos={setTodos}
                isOpenToDO={isOpenToDO}
                setIsOpenToDO={setIsOpenToDO}
              />
            )}
          </div>
        </div>

        <div className="box progress">
          <div className="header">
            <span>In Progress</span>{" "}
            <span>
              <BsThreeDots />
            </span>
          </div>
          <div className="cards">
            {progressTodos.length > 0 &&
              progressTodos.map((ele, index) => (
                <AddProgressCard
                  progressTodos={progressTodos}
                  key={ele.id}
                  index={index}
                  {...ele}
                />
              ))}
          </div>
          <div className="add-todo">
            {!isOpenProgress ? (
              <div onClick={handleProgressAdd}>
                {" "}
                <span>
                  <FiPlus />
                </span>{" "}
                <span>Add a card</span>
              </div>
            ) : (
              <AddProgressTodo />
            )}
          </div>
        </div>
      </div>
    </SECTION>
  );
};

const SECTION = styled.div`
  .p-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: white;
  }
  .container {
    /* border: 2px solid red; */
    display: flex;
    width: 95%;
    margin-top: 10px;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 5rem;
    margin: 1rem;
  }

  .box {
    display: flex;
    width: 50.5%;
    flex-direction: column;
    padding: 16px;
    border-radius: 5px;
    background-color: #f1f2f4;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }
`;
