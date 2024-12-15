const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow flex items-center px-4 justify-between">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default Navbar;
