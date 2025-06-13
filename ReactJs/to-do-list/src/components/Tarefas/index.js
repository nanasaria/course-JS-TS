import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          {tarefa}
          <span>
            <FaEdit
              onClick={(e) => handleEdit(e, index)}
              className="edit"
            ></FaEdit>
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            ></FaWindowClose>
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
