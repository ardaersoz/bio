import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Topbar/Topbar';
import PropTypes from 'prop-types';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 h-screen">
        <Navbar />
        <main className="p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
