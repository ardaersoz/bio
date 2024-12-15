import { Link } from 'react-router-dom';
import { HomeIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: <HomeIcon className="h-6 w-6" /> },
    { name: 'Articles', path: '/admin/articles', icon: <DocumentTextIcon className="h-6 w-6" /> },
    { name: 'Settings', path: '/admin/articles/add', icon: <CogIcon className="h-6 w-6" /> },
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // Simulate a delay to show the sidebar (replace with your actual loading logic)
    const timeoutId = setTimeout(() => {
      setShowSidebar(true);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    showSidebar && (
      <div className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-4 text-lg font-bold border-b border-blue-500">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center p-2 rounded hover:bg-blue-500"
            >
              {item.icon}
              <span className="ml-4">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    )
  );
};

export default Sidebar;
