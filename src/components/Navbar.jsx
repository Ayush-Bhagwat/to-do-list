const Navbar = ({ darkMode, setDarkMode, setFilter }) => (
  <nav className="flex justify-between items-center p-4 shadow-neon bg-prussian_blue-500">
    <h1 className="text-2xl font-bold text-primary animate-pulseFast">🧠 To-Do JARVIS</h1>
    <div className="space-x-4 text-sm flex items-center">
      <button onClick={() => setFilter("All")} className="hover:text-primary transition">Dashboard</button>
      <button onClick={() => setFilter("Scheduled")} className="hover:text-primary transition">Scheduled</button>
      <button className="hover:text-primary transition">Settings</button>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 px-2 py-1 rounded text-white bg-gray-600 hover:opacity-80"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  </nav>
);

export default Navbar;
