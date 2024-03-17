import React from "react";
import styled from "styled-components";
import { TbMessage } from "react-icons/tb";
import { HiOutlineMenuAlt2 } from "react-icons/hi";


export const TodoCard = ({ id, title, No_of_message, index }) => {
  console.log(id, index, "id");

  return (
    <TODOCARD>
      <div className="main">
        <input type="range" />
        <p>{title}</p>

        <div className="icon">
          <span>
            <HiOutlineMenuAlt2 />
          </span>{" "}
          <span>
            <TbMessage />
            <span>{No_of_message}</span>
          </span>
        </div>
      </div>
     
    </TODOCARD>
  );
};
const TODOCARD = styled.div`
  border-radius: 4px;
  margin-top: 1rem;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  cursor: pointer;
  .main {
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    cursor: pointer;
    transition: 0.2s;
  }

  .main:hover {
    box-shadow: 0 0 5px;
    transform: scale(1.03);
  }

  input[type="range"] {
    margin: 0px;
    padding: 0px;
  }

  p {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 0px;
    padding: 0px;
    justify-items: start;
    align-items: start;
  }

  .icon {
    display: flex;
    padding-top: 1rem;
    gap: 2rem;
  }
`;
