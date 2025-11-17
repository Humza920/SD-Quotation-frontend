import { NavLink } from "react-router-dom";
import {
  Users,
  ChevronLeft,
  FileText,
  LayoutDashboard,
  UserPlus,
  Plus,
} from "lucide-react";
import Logo from "../assets/Logo.png";
import LogoText from "../assets/LogoText.png";
// DUMMY IMAGE URL
const PROFILE_IMAGE_URL = "https://i.ibb.co/L9LzK2b/brown-martin.png";

const Sidebar = () => {
  return (
    <aside className="w-[255px] bg-white shadow-xl flex flex-col h-screen fixed top-0 left-0 border-r border-gray-200">
      <div className="flex justify-between items-center ml-2 mt-7 mb-4 px-4">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2 flex items-center justify-center">
            <span className="text-3xl text-blue-600 font-extrabold">
              <img src={Logo} alt="" />
            </span>
          </div>
          <img src={LogoText} alt="" />
        </div>

        <button className="text-gray-500 hover:bg-gray-100 border border-gray-300 w-6 h-6 rounded-md flex items-center justify-center text-[15px] font-semibold">
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Grey HR line full width */}
      <hr className="border-gray-300 mb-4" />

      {/* 2. Navigation Links Section */}
      <nav className="flex flex-col flex-grow px-2 ml-2 space-y-0.5">
        {/* Create Quotation (Blue when not active, Black when active) */}
        <NavLink
          to="/dashboard/create-quotation"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-md font-medium shadow-sm transition-colors mx-2
            ${
              isActive
                ? "text-white bg-[#22272B] hover:bg-gray-800"
                : "text-white bg-blue-600 hover:bg-blue-700"
            }`
          }
        >
          <Plus className="w-5 h-5 font-bold" />
          Create Quotation
        </NavLink>

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-md font-medium transition-colors mx-2 mt-2
            ${
              isActive
                ? "text-white bg-[#22272B] hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </NavLink>

        {/* Other Links */}
        {/* Other Links */}
        <div className="space-y-0.5">
          {[
            { to: "/dashboard/client-list", icon: Users, label: "Client List" },
            { to: "/dashboard/templates", icon: FileText, label: "Templates" },
            {
              to: "/dashboard/user-management",
              icon: UserPlus,
              label: "User Management",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-md font-medium transition-colors mx-2 mt-2
          ${
            isActive
              ? "text-white bg-[#22272B] hover:bg-gray-800"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`
                }
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* 3. Profile Section (Fixed at the bottom) */}
      <div className="p-4 border-t border-gray-200 ml-2 mt-auto">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img
              src={PROFILE_IMAGE_URL}
              alt="Brown Martin"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">Brown Martin</p>
            <p className="text-xs text-gray-500">Business owner</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
