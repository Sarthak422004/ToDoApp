import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  // State for filter and search
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Event handler for filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Event handler for search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to filter tasks based on filter value
  const filterTasks = (tasks, filter) => {
    if (filter === 'completed') {
      return tasks.filter((task) => task.isComplete);
    } else if (filter === 'active') {
      return tasks.filter((task) => !task.isComplete);
    } else {
      return tasks;
    }
  };

  // Function to search tasks based on search term
  const searchTasks = (tasks, searchTerm) => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
        // Uncomment the following line if you want to search in task descriptions as well
        // || task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Apply filter and search to tasks
  const filteredTasks = filterTasks(tasks, filter);
  const searchedTasks = searchTasks(filteredTasks, searchTerm);

  return (
    <div>
      <hr className='mb-4'></hr>
      
      {/* Filter dropdown */}
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2 text-xl font-medium">
          Filter:&nbsp; &nbsp;
        </label>
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-md p-[5px] w-1/2 md:p-2 md:w-1/3 text-lg"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </div>
      
      {/* Search input */}
      <div className="mb-4">
        <label htmlFor="search" className="mr-2 text-xl font-medium">
          Search:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md p-[5px] md:p-2 w-1/2 md:w-1/3 text-lg "
          placeholder="Search tasks"
        />
        <hr className='my-4'></hr>
      </div>
      
      {/* Heading */}
      <h3 className="pb-2 py-10 underline font-medium text-2xl md:pt-14 md:pb-4 md:text-3xl">
        Your Todos
      </h3>
      
      {/* Render tasks */}
      {searchedTasks.length === 0 ? (
        <p className="text-xl">No tasks found...</p>
      ) : (
        <div>
          {searchedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;


