import Link from "next/link";
import {
  FaKey,
  FaLock,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaUndoAlt,
  FaUser,
} from "react-icons/fa";
 
type ProfileProps = {
  user: User;
};

type MenuItems = {
  icon: JSX.Element;
  label: string;
};

type User = {
  avatarUrl: string;
  name: string;
  phone: string;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const menuItems: MenuItems[] = [
    { icon: <FaLock className="mr-2" />, label: "Order History" },
    { icon: <FaUndoAlt className="mr-2" />, label: "Return Orders" },
    { icon: <FaUser className="mr-2" />, label: "Account Info" },
    { icon: <FaKey className="mr-2" />, label: "Change Password" },
    { icon: <FaMapMarkerAlt className="mr-2" />, label: "Manage Addresses" },
    { icon: <FaSignOutAlt className="mr-2" />, label: "Log Out" },
  ];

  return (
    <div className="w-full">
      {/* User Info */}
      <div className="flex items-center space-x-4 border-b pb-2 ">
        <div>
          <img
            src={user.avatarUrl}
            alt="User Avatar"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.phone}</p>
        </div>
      </div>
      <div className="mt-4">
        {/* Menu */}

        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={"/account"}
                className="mb-1 block flex items-center  text-gray-700 hover:text-gray-900"
              >

                {item.icon}
                <span className="ms-2">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
