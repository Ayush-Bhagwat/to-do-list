const TaskList = () => (
  <div className="grid gap-4">
    {[1, 2, 3].map((_, i) => (
      <div
        key={i}
        className="bg-card p-4 rounded-xl shadow-md hover:shadow-neon transition border border-light_blue-700"
      >
        <h3 className="text-xl font-semibold text-light_blue-200">Task {i + 1}</h3>
        <p className="text-light_blue-400">This is a placeholder task description.</p>
      </div>
    ))}
  </div>
);
export default TaskList;
