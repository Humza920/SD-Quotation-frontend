import React, { useState } from "react";
import {
  User,
  Settings,
  ChevronRight,
  ChevronDown,
  Bell,
  MessageCircle,
  Info,
  LogOut,
} from "lucide-react";
import Userimg from "../assets/Userimg.png"

const ProfileSidebar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const MenuItem = ({ icon, label, hasArrow = true, onClick }) => (
    <button
      className="w-full flex items-center justify-between p-3 pb-[5px] rounded-lg text-gray-700 hover:bg-gray-50 transition duration-150 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <span className="text-xl">{icon}</span>
        <span className="text-sm">{label}</span>
      </div>

      {hasArrow && <ChevronRight className="w-5 h-5 text-gray-400" />}
    </button>
  );

  const navigationItems = [
    {
      id: 1,
      icon: <User className="w-5 h-5" />,
      label: "My Profile",
      hasArrow: true,
    },
    {
      id: 2,
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      hasArrow: false,
      isDropdown: true,
    },
    {
      id: 3,
      icon: <Bell className="w-5 h-5" />,
      label: "Notifications",
      hasArrow: true,
    },
    {
      id: 4,
      icon: <MessageCircle className="w-5 h-5" />,
      label: "FAQ",
      hasArrow: true,
    },
    {
      id: 5,
      icon: <Info className="w-5 h-5" />,
      label: "About App",
      hasArrow: true,
    },
  ];

  const settingsItems = [
    { id: 1, label: "Account" },
    { id: 2, label: "Privacy" },
  ];

  return (
    <div className="w-[255px] h-screen bg-white shadow-xl flex flex-col p-4 font-sans">
      {/* Profile Header */}
      <div className="flex items-center space-x-[10px] mt-[10px] mb-[38px] pb-[5px] ml-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={Userimg}
          alt="Profile"
        />
        <div className="flex flex-col">
          <p className="text-base font-semibold text-gray-800">Brown Martin</p>
          <p className="text-xs text-gray-500">brownmartin@gmail.com</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-grow space-y-[38px]">
        {navigationItems.map((item, index) => (
          <div key={item.id}>
            {item.isDropdown ? (
              // Settings Dropdown
              <div>
                <button
                  className="w-full flex items-center justify-between p-3 pb-[5px] rounded-lg text-gray-700 hover:bg-gray-50 transition duration-150 cursor-pointer"
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                >
                  <div className="flex items-center space-x-4">
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transform transition duration-200 ${
                      isSettingsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Items */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isSettingsOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {settingsItems.map((settingItem) => (
                    <button
                      key={settingItem.id}
                      className="w-full text-left pl-12 py-2 pb-[5px] text-sm text-gray-600 hover:bg-gray-100 transition duration-150"
                    >
                      {settingItem.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Regular Menu Item
              <MenuItem
                icon={item.icon}
                label={item.label}
                hasArrow={item.hasArrow}
              />
            )}

            {/* Add HR after every item - including the last one (About App) */}
            <hr className="border-gray-200 mx-2" />
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-4 mb-[146px] border-gray-200 pb-[5px]">
        <button className="w-full flex items-center p-3 pb-[5px] rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition duration-150">
          <LogOut className="w-5 h-5" />
          <span className="ml-4 text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
