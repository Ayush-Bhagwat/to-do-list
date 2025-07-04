const QuickActions = ({ setTasks }) => {
  const handleClearAll = () => {
    if (window.confirm("Delete all tasks?")) {
      setTasks([]);
    }
  };

  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={handleClearAll}
        className="bg-prussian_blue-300 text-primary border border-primary px-6 py-2 rounded-xl shadow hover:bg-primary hover:text-black transition"
      >
        🗑️ Clear All
      </button>
    </div>
  );
};

export default QuickActions;
