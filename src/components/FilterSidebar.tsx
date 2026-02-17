interface Props {
  selectedRole: string;
  setSelectedRole: (value: string) => void;
}

const FilterSidebar = ({ selectedRole, setSelectedRole }: Props) => {
  const roles = ["All", "Frontend", "Backend", "AI"];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="font-bold text-lg mb-3">Filter by Role</h2>
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => setSelectedRole(role)}
          className={`block w-full text-left px-3 py-2 rounded-lg mb-2 transition ${
            selectedRole === role
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {role}
        </button>
      ))}
    </div>
  );
};

export default FilterSidebar;