import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  // State for tasks and filtered tasks
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Load tasks from local storage on initial mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Update local storage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Event handler for adding a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Event handler for deleting a task
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Event handler for updating a task
  const handleUpdateTask = (taskId, newTitle, newDescription, isComplete) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
          description: newDescription,
          isComplete: isComplete,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Event handler for searching tasks
  const handleSearch = (searchTerm) => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filteredTasks);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="mx-10 md:px-60 md:mx-auto ">
        <h1 className="text-3xl font-bold my-6 md:font-semibold md:text-5xl md:pt-4 md:pb-10 text-center underline">
          To-Do List
        </h1>
        <div className="flex flex-col w-full md:flex-row md:space-x-4 ">
          <div className="w-full">
            {/* Add task component */}
            <AddTask onAdd={handleAddTask} />
            
            {/* Task list component */}
            <TaskList
              tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;

