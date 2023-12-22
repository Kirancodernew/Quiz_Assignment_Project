import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Admin = () => {
  return (
    <div className="admin-nav">
      <div className="sidebar">
        <Link to={'/admin/home'} className="nav-link" aria-current="page">
          Home
        </Link>
        <Link to={'/admin/dashboard'} className="nav-link">
          Dashboard
        </Link>
        <Link to={'/admin/settings'} className="nav-link">
          Settings
        </Link>
      </div>
      <div className="content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Admin;

