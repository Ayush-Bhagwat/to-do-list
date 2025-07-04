import { useState } from "react";

const TaskInput = () => {
  const [task, setTask] = useState("");

  return (
    <div className="my-4 flex items-center space-x-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 px-4 py-2 bg-card border border-light_blue-700 rounded-xl outline-none text-white placeholder-light_blue-400"
        placeholder="Enter a new task..."
      />
      <button className="bg-primary text-black px-4 py-2 rounded-xl shadow-neon hover:brightness-110 transition">
        Add
      </button>
    </div>
  );
};
export default TaskInput;
