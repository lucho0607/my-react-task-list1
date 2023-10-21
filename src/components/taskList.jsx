import React from "react";
import { useState, useRef, useEffect } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function Tasklist() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, { list: task, id: Date.now(), status: false }]);
      console.log(tasks);
      setTask("");
    }
    if (editId) {
      const editTask = tasks.find((task) => task.id == editId);
      const updateTask = tasks.map((ta) =>
        ta.id === editTask.id
          ? (ta = { id: ta.id, list: task })
          : (ta = { id: ta.id, list: ta.list })
      );
      setTasks(updateTask);
      setEditId(0);
      setTask("");
    }
  };
  const inputRef = useRef("null");

  useEffect(() => {
    inputRef.current.focus();
  });

  const onDelete = (id) => {
    setTasks(tasks.filter((ta) => ta.id !== id));
  };

  const onComplete = (id) => {
    let complete = tasks.map((list) => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    });
    setTasks(complete);
  };
  const onEdit = (id) => {
    const editTask = tasks.find((ta) => ta.id === id);
    console.log("edit id" + editTask);
    setTask(editTask.list);
    setEditId(editTask.id);
    console.log(editTask);
  };

  return (
    <div>
      <h2>Task list</h2>
      <form className="form-group " onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          ref={inputRef}
          placeholder="new task"
          className="control"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={addTask}>{editId ? "EDIT" : "ADD"}</button>
      </form>
      <div className="list">
        <ul>
          {tasks.map((ta) => (
            <li className="list-items">
              <div className="list-item-list" id={ta.status ? "lsit-item" : ""}>
                {ta.list}
              </div>
              <span>
                <IoMdDoneAll
                  className="list-item-icons"
                  id="complete"
                  title="complete"
                  onClick={() => onComplete(ta.id)}
                />
                <FiEdit
                  className="list-item-icons"
                  id="edit"
                  title="edit"
                  onClick={() => onEdit(ta.id)}
                />
                <MdDelete
                  className="list-item-icon"
                  id="delete"
                  title="delete"
                  onClick={() => onDelete(ta.id)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
