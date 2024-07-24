import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import ReactSwitch from "react-switch";

const Todo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTodo = () => {
    if (task) {
      const to_do = {
        id: list.length + 1,
        title: task,
        toggle: false,
      };
      setList([to_do, ...list]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    const filterTak = list.filter((task) => task.id !== id);
    setList(filterTak);
  };

  const handleToggle = (id) => {
    const updateTask = list.map((task) =>
      task.id === id ? { ...task, toggle: !task.toggle } : task
    );
    setList(updateTask);
  };

  return (
    <div className=" bg-indigo-400 h-screen">
      <div className="flex flex-col items-center pt-7">
        <h1 className="font-bold text-2xl text-white">Todo List</h1>
        <div className="flex flex-row pt-4 space-x-3 items-center w-80">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            className="px-4 py-2 outline-none font-bold text-xl text-sky-800 rounded-md"
            placeholder="Enter task..."
          />
          <button onClick={addTodo}>
            <FaPlus />
          </button>
        </div>
        {list.length === 0 ? (
          <h1 className="font-bold text-xl text-green-700 m-7">Add Task</h1>
        ) : (
          <div className="bg-sky-500 mt-4 p-1 w-80">
            {list.map((task) => (
              <div
                className={`bg-gray-700 px-4 py-2 flex flex-row justify-center items-center rounded m-2 ${
                  task.toggle && " bg-cyan-900"
                }
                }`}
                key={task.id}
              >
                <h4
                  className={`mr-auto font Bold text-xl text-white ${
                    task.toggle && "line-through"
                  }`}
                >
                  {task.title}
                </h4>
                <button
                  className="text-red-500 text-2xl"
                  onClick={() => handleDelete(task.id)}
                >
                  <MdOutlineDeleteForever />
                </button>
                <ReactSwitch
                  checked={task.toggle}
                  onChange={() => handleToggle(task.id)}
                  onColor="#4299el"
                  offColor="#ccc"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  handleDiameter={18}
                  width={40}
                  height={20}
                  className="ml-2"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
