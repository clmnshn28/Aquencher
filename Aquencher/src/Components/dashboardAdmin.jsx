import "./Css/dashboardAdmin.css"

import loginLogo from './Assets/loginLogo.png';
import notificationClose from './Assets/notificationClose.png';
import defaultAvatar from './Assets/default-avatar.jpg';
import dashboardIcon from './Assets/dashboard-open.png';
import notificationIcon from './Assets/notification.png';
import usersIcon from './Assets/users.png';
import deliveryIcon from './Assets/delivery.png';
import transactionIcon from './Assets/transactions.png';
import inventoryIcon from './Assets/inventory.png';
import announcementsIcon from './Assets/announcement.png';
import concernsIcon from './Assets/concerns.png';
import accountIcon from './Assets/account.png';
import adminLogo from './Assets/AdminLogo.png';
import sidebarButton from './Assets/sidebar-button.png';
import complete from './Assets/complete.png';
import queue from './Assets/queue.png';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardAdmin = () => {
  const [sidebarMinimized, setSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setSidebarMinimized(!sidebarMinimized);
  };


  return (

    <div className={`dashboard-container ${sidebarMinimized ? 'sidebar-minimized' : ''}`}>
    <div className="dashboard-header">
      <img className="Aquencher-Logo" src={loginLogo} alt="Aquencher Logo" />
      <div className="admin-profile">
        <img className="Notification" src={notificationClose} alt="Notification" />
        <img className="profile" src={defaultAvatar} alt="Profile" />
        <span>Celmin Shane</span>
      </div>
    </div>

    <div className={`side-bar ${sidebarMinimized ? 'minimized' : ''}`}>
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        <img src={sidebarButton} alt="button" />
      </button>
      <img className="adminlogo" src={adminLogo} alt="AdminLogo" />
      <ul>
        <li className="highlighted">
          <Link to="/dashboard">
            <img className="sidebaricon" src={dashboardIcon} alt="Dashboard" />
            <span className="sidebar-text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <img className="sidebaricon" src={notificationIcon} alt="Notifications" />
            <span className="sidebar-text">Notifications</span>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <img className="sidebaricon" src={usersIcon} alt="Users" />
            <span className="sidebar-text">Users</span>
          </Link>
        </li>
        <li>
          <Link to="/delivery">
            <img className="sidebaricon" src={deliveryIcon} alt="Delivery" />
            <span className="sidebar-text">Delivery</span>
          </Link>
        </li>
        <li>
          <Link to="/transactions">
            <img className="sidebaricon" src={transactionIcon} alt="Transactions" />
            <span className="sidebar-text">Transactions</span>
          </Link>
        </li>
        <li>
          <Link to="/inventory">
            <img className="sidebaricon" src={inventoryIcon} alt="Inventory" />
            <span className="sidebar-text">Inventory</span>
          </Link>
        </li>
        <li>
          <Link to="/announcements">
            <img className="sidebaricon" src={announcementsIcon} alt="Announcements" />
            <span className="sidebar-text">Announcements</span>
          </Link>
        </li>
        <li>
          <Link to="/concerns">
            <img className="sidebaricon" src={concernsIcon} alt="Concerns" />
            <span className="sidebar-text">Concerns</span>
          </Link>
        </li>
        <li>
          <Link to="/account">
            <img className="sidebaricon" src={accountIcon} alt="Account" />
            <span className="sidebar-text">Account</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className={`dashboard-content ${sidebarMinimized ? 'content-minimized' : ''}`}>
      <h2 className="welcome">Welcome, Admin!</h2>
      <div className="first-content">
        <div className="summary">
            <div className="summary-item">
              <div className="summary-title">Employee Total</div>
              <div className="summary-value">0</div>
            </div>
            <div className="summary-item">
              <div className="summary-title">Available Gallons</div>
              <div className="summary-value">0</div>
            </div>
            <div className="summary-item">
              <div className="summary-title">Total Refilled Gallons</div>
              <div className="summary-value">0</div>
            </div>
            <div className="summary-item">
              <div className="summary-title">Borrowed Gallons</div>
              <div className="summary-value">0</div>
            </div>
            <div className="time-date-container">
              <div className="time">00:00 NN</div>
              <div className="date">MM / DD / YYYY</div>
            </div>
          </div>
      </div>
      <div className="second-content">
        <div className="left-content">
          <div className="delivery">
            <h3 className="delivery-text">Delivery</h3>
            <div className="delivery-item-container">
              <div className="delivery-item">
                <img className="delivery-image" src={complete} alt=" Complete Image" />
                <div className="delivery-info">
                  <div className="delivery-title">Completed Delivery</div>
                  <div className="delivery-value">0</div>
                </div>
              </div>
              <div className="delivery-item">
                <img className="delivery-image" src={queue} alt=" Queue Image" />
                <div className="delivery-info">
                  <div className="delivery-title">Queue</div>
                  <div className="delivery-value">0</div>
                </div>
              </div>
              <div className="delivery-item">
                <img className="delivery-image" src={complete} alt=" Request Image" />
                <div className="delivery-info"> 
                  <div className="delivery-title">Requests</div>
                  <div className="delivery-value">0</div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="graph-container">
            <p>REFILLED AND BORROWED GALLON PER MONTH</p>
          </div>
        </div>
        <div className="right-content">
          <div className="returned-gallon-container">
            <p>RETURNED GALLONS</p>
          </div>
        </div>
      </div>

    </div>

  </div>
  );
};

export default DashboardAdmin;