import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  // State for tracking the input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate title input
    if (title.trim() === '') {
      return;
    }
    
    // Create a new task object
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      isComplete: false,
    };

    // Invoke the onAdd callback with the new task
    onAdd(newTask);

    // Reset the input values
    setTitle('');
    setDescription('');
  };

  // Event handler for updating the title input value
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Event handler for updating the description input value
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col">
        {/* Heading */}
        <p className='text-2xl hidden md:block md:text-4xl mb-6 font-semibold underline pl-1'>Add To-Do Here</p>

        {/* Title input */}
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="p-4 text-lg md:text-2xl border border-gray-300 rounded-md md:rounded-2xl mb-2 md:mb-6 md:pl-6"
          placeholder="Task Title"
        />

        {/* Description input */}
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className="p-4 text-lg md:text-2xl border border-gray-300 rounded-md md:rounded-2xl mb-2 md:mb-6 w-full md:pl-6"
          placeholder="Task Description"
          rows="3"
        ></textarea>

        {/* Add Task button */}
        <button className="bg-green-500 text-white p-2 mt-4 mb-2 rounded-lg md:m-0 md:rounded-2xl md:w-1/6 md:text-2xl md:h-14 hover:bg-green-600 transition-colors duration-300">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;



