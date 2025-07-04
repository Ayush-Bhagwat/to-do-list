// Jarvis-themed Futuristic To-Do App
// Built with React + TailwindCSS + Vite

import { useState } from "react";
import { Check, Trash, Undo2 } from "lucide-react";

const JarvisTodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const filtered =
    filter === "completed"
      ? tasks.filter((t) => t.completed)
      : filter === "pending"
      ? tasks.filter((t) => !t.completed)
      : tasks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-cyan-400 font-mono p-6">
      <div className="max-w-3xl mx-auto bg-gray-950/80 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-cyan-500">
        <h1 className="text-4xl text-center mb-6 font-bold tracking-widest text-cyan-300">
          <span className="text-cyan-500">JARVIS</span> To-Do Console
        </h1>

        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Type your mission..."
            className="flex-1 bg-gray-800 text-cyan-300 placeholder-cyan-500 px-4 py-3 rounded-lg border border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            onClick={addTask}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded-lg transition-all"
          >
            Launch
          </button>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          {['all', 'completed', 'pending'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full border border-cyan-500 ${
                filter === f ? 'bg-cyan-600 text-black' : 'text-cyan-400'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <ul className="space-y-4">
          {filtered.map((t, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-900 border border-cyan-700 rounded-xl px-5 py-3 hover:bg-gray-800 transition-all"
            >
              <span
                className={`flex-1 ${
                  t.completed ? 'line-through text-cyan-700' : 'text-cyan-200'
                }`}
              >
                {t.text}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => toggleComplete(i)}
                  className="bg-cyan-800 hover:bg-cyan-600 p-2 rounded-full"
                  title={t.completed ? "Undo" : "Complete"}
                >
                  {t.completed ? <Undo2 size={18} /> : <Check size={18} />}
                </button>
                <button
                  onClick={() => deleteTask(i)}
                  className="bg-red-800 hover:bg-red-600 p-2 rounded-full"
                  title="Delete"
                >
                  <Trash size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JarvisTodoApp;
