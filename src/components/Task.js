import React, { useState } from "react";

const Task = ({ task, onDelete, onUpdate }) => {
  // State for tracking edit mode and new task data
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  // Event handler for deleting a task
  const handleDelete = () => {
    onDelete(task.id);
  };

  // Event handler for entering edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for updating the task title
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  // Event handler for updating the task description
  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  // Event handler for saving task updates
  const handleUpdate = () => {
    onUpdate(task.id, newTitle, newDescription);
    setEditing(false);
  };

  return (
    <>
      <div className="flex items-center my-4">
        {!editing ? (
          // Display task details without edit mode
          <div className="flex-grow">
            <div className="flex items-center md:pb-5">
              {/* Checkbox for task completion */}
              <input
                type="checkbox"
                checked={task.isComplete}
                onChange={() =>
                  onUpdate(
                    task.id,
                    task.title,
                    task.description,
                    !task.isComplete
                  )
                }
                className="mr-4 w-[20px] h-[20px] md:w-7 md:h-7"
              />
              {/* Task title */}
              <p
                className={`font-semibold text-2xl md:text-3xl underline underline-offset-8 ${
                  task.isComplete ? "line-through" : "no-underline"
                }`}
              >
                {task.title}
              </p>
            </div>
            {/* Task description */}
            <p
              className={`text-gray-600 ml-9 text-lg mt-3 md:mt-1 md:ml-11 md:text-xl ${
                task.isComplete ? "line-through" : ""
              }`}
            >
              {task.description}
            </p>
            <div className="flex ml-7 pt-3 md:ml-9 md:pt-4">
              {/* Edit button */}
              <button
                onClick={handleEdit}
                className="bg-blue-500 text-white px-2 py-1 md:text-xl md:px-5 md:py-2 rounded-md ml-2 hover:bg-blue-600 transition-colors duration-300"
              >
                Edit
              </button>
              {/* Delete button */}
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-2 py-1 md:text-xl md:px-5 md:py-2 rounded-md ml-2 md:ml-4 hover:bg-red-600 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          // Display task details in edit mode
          <div className="flex-grow">
            {/* Input for editing task title */}
            <input
              type="text"
              value={newTitle}
              onChange={handleTitleChange}
              className="p-1 border w-full h-12 text-xl md:text-2xl md:h-14 border-gray-300 rounded-md mb-2"
            />
            {/* Textarea for editing task description */}
            <textarea
              value={newDescription}
              onChange={handleDescriptionChange}
              className="p-1 border w-full h-28 text-lg md:text-xl md:h-30 border-gray-300 rounded-md"
              rows=""
            ></textarea>
            <div className="flex">
              {/* Save button */}
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-2 py-1 md:text-lg md:px-4 md:py-[6px] rounded-md mt-2 mr-2 md:mr-3 hover:bg-green-600 transition-colors duration-300"
              >
                Save
              </button>
              {/* Cancel button */}
              <button
                onClick={() => setEditing(false)}
                className="bg-gray-500 text-white px-2 py-1 md:text-lg md:px-4 md:py-[6px] rounded-md mt-2 mr-2 md:mr-3 hover:bg-gray-600 transition-colors duration-300"
              >
                Cancel
              </button>
              {/* Delete button */}
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-2 py-1 md:text-lg md:px-4 md:py-[6px] rounded-md mt-2 hover:bg-red-600 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
      <hr className="mb-4"></hr>
    </>
  );
};

export default Task;
