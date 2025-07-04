import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import QuickActions from "./components/QuickActions";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [scheduledAt, setScheduledAt] = useState("");
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(true);

  const handleAddTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: taskInput.trim(),
        completed: false,
        status: scheduledAt ? "Scheduled" : "Pending",
        scheduledAt,
      },
    ]);
    setTaskInput("");
    setScheduledAt("");
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              status: task.completed ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  return (
    <div
      className={`${
       darkMode ? "bg-background text-white" : "bg-[#ffe7e7] text-black"


      } flex flex-col min-h-screen font-sans`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setFilter={setFilter} />
      <div className="flex-1 flex flex-col lg:flex-row">
        <Sidebar setFilter={setFilter} />
        <main className="flex-1 p-4">
          <Hero />

          {/* Task Input */}
          <div className="flex flex-col gap-3 mt-4 md:flex-row">
            <input
              type="text"
              className="bg-card text-white p-2 rounded w-full outline-none"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddTask();
              }}
              placeholder="Add a new task..."
            />
            <input
              type="datetime-local"
              className="bg-card text-white p-2 rounded outline-none"
              value={scheduledAt}
              onChange={(e) => setScheduledAt(e.target.value)}
            />
            <button
              className="bg-primary px-4 py-2 rounded shadow-neon hover:opacity-80 transition"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>

          {/* Task List */}
          <div className="mt-6 space-y-3">
            {filteredTasks.length === 0 ? (
              <p className="text-gray-400 text-sm">No tasks found.</p>
            ) : (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-card p-3 rounded flex justify-between items-center"
                >
                  <div
                    onClick={() => handleToggleTask(task.id)}
                    className={`cursor-pointer ${
                      task.completed ? "line-through text-gray-700" : ""
                    }`}
                  >
                    {task.text}
                    {task.scheduledAt && (
                      <div className="text-xs text-gray-400 mt-1">
                        📅 {new Date(task.scheduledAt).toLocaleString()}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-red-500 hover:text-red-300 transition"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          <Stats tasks={tasks} setFilter={setFilter} />
          <QuickActions setTasks={setTasks} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
