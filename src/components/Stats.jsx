const Stats = ({ tasks, setFilter }) => {
  const count = (status) => tasks.filter((t) => t.status === status).length;

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {["Pending", "Completed"].map((label) => (
        <div
          key={label}
          onClick={() => setFilter(label)}
          className="bg-prussian_blue-300 p-4 rounded-xl shadow shadow-neon text-center cursor-pointer hover:opacity-80 transition"
        >
          <h3 className="text-light_blue-400 text-sm">{label}</h3>
          <p className="text-2xl font-bold text-primary mt-1">{count(label)}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
