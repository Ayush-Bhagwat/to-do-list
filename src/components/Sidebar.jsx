const Sidebar = ({ setFilter }) => (
  <aside className="w-full lg:w-60 bg-prussian_blue-300 p-4">
    <h2 className="text-lg font-bold mb-4 text-light_blue-200">Sections</h2>
    <ul className="space-y-2 text-light_blue-300 text-sm">
      <li onClick={() => setFilter("All")} className="hover:text-primary cursor-pointer">⚡ Today</li>
      <li onClick={() => setFilter("Scheduled")} className="hover:text-primary cursor-pointer">📅 Scheduled</li>
      <li onClick={() => setFilter("Trash")} className="hover:text-primary cursor-pointer">🗑️ Trash</li>
    </ul>
  </aside>
);

export default Sidebar;
