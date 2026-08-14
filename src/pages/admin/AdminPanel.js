import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminLayout from '../../components/admin/AdminLayout';
import AdminHomeEditor from './AdminHomeEditor';
import AdminAboutEditor from './AdminAboutEditor';
import AdminProjectsEditor from './AdminProjectsEditor';
import AdminContactEditor from './AdminContactEditor';
import '../../CSS/admin.css';

function AdminPanel() {
  const [activeSection, setActiveSection] = useState('home');
  const [status, setStatus] = useState(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleStatus = (message, isError = false) => {
    setStatus({ message, isError });
    window.setTimeout(() => setStatus(null), 3500);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <AdminHomeEditor onStatus={handleStatus} />;
      case 'about':
        return <AdminAboutEditor onStatus={handleStatus} />;
      case 'projects':
        return <AdminProjectsEditor onStatus={handleStatus} />;
      case 'contact':
        return <AdminContactEditor onStatus={handleStatus} />;
      default:
        return null;
    }
  };

  return (
    <AdminLayout
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      onLogout={handleLogout}
    >
      {status && (
        <div
          className={`admin-toast${status.isError ? ' admin-toast--error' : ''}`}
        >
          {status.message}
        </div>
      )}
      {renderSection()}
    </AdminLayout>
  );
}

export default AdminPanel;
