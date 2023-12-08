import UserHeader from "./UserHeader";
import UserItems from "./UserItems";

const UserInventory = ({ title, users }) => {
  const columnTitles = ["Nombre", "Email", "Activo"];

  return (
    <div className="mx-4 mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md">
          <caption className="text-lg font-semibold p-4 text-blue-500">
            {title}
          </caption>
          <UserHeader titles={columnTitles} />
          <UserItems users={users} />
        </table>
      </div>
    </div>
  );
};

export default UserInventory;