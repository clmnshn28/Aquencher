import "./Css/notificationAdmin.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import loginLogo from './Assets/loginLogo.png';
import notificationClose from './Assets/notificationClose.png';
import defaultAvatar from './Assets/default-avatar.jpg';
import dashboardIconClose from './Assets/dashboard.png';
import notificationIconOpen from './Assets/notification-open.png';
import usersIcon from './Assets/users.png';
import deliveryIcon from './Assets/delivery.png';
import transactionIcon from './Assets/transactions.png';
import inventoryIcon from './Assets/inventory.png';
import announcementsIcon from './Assets/announcement.png';
import concernsIcon from './Assets/concerns.png';
import accountIcon from './Assets/account.png';
import adminLogo from './Assets/AdminLogo.png';
import sidebarButton from './Assets/sidebar-button.png';
import sidebarButtonOpen from './Assets/sidebar-button-open.png';
import complete from './Assets/complete.png';
import queue from './Assets/queue.png';
import dropArrow from './Assets/dropArrow.png';
import logoutDropdown from './Assets/logout-dropdown.png';
import accountSettingDropdown from './Assets/account-dropdown.png';

const DashboardAdmin = () => {

  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    { subject: 'Request for Customer Account Deactivation', description: 'Karen Joyce Joson has requested the deletion of account.', time: '10 minutes ago', isNew: true },
    { subject: 'Borrow Request', description: 'Karen Joyce Joson requested to borrow 3 gallons of Po\'s Purified Blue Slim Gallon with Faucet Refill (20L/5gal)', time: '12 minutes ago', isNew: true },
    { subject: 'Borrow Request', description: 'John Smith requested to borrow 2 gallons of Po\'s Purified Dispenser Bottle Refill 18.9L', time: '12 minutes ago', isNew: false },
    { subject: 'System Update', description: 'System will be offline temporarily. Update is scheduled for tomorrow at 10:00 AM. Please plan your tasks accordingly.', time: '12 minutes ago', isNew: false },
  ]);

  const toggleSidebar = () => {
    setSidebarMinimized(!sidebarMinimized);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleNotifications = () => {
    setNotificationsVisible(!notificationsVisible);
  };

  const handleNotificationClick = (index) => {
    setNotifications(notifications.map((notification, i) => 
      i === index ? { ...notification, isNew: false } : notification
    ));
  };

  return (

  <div className={`dashboard-container ${sidebarMinimized ? 'sidebar-minimized' : ''}`}>
    <div className="dashboard-header">
      <img className="Aquencher-Logo" src={loginLogo} alt="Aquencher Logo" />
      <div className="admin-profile">
         <img className="Notification" src={notificationClose} alt="Notification"  onClick={toggleNotifications}  />
        {notificationsVisible && (
        <div className="notifications-view">
          <div className="notifications-header">
            <h2 className="notification-title-header">Notifications</h2>
            <Link to="/Notifications" className="see-all-button">See all</Link>
          </div>
          <h3 className="notification-earlier-header">Earlier</h3>
          {notifications.map((notification, index) => (
            <div key={index} className={`notification-details-header ${notification.isNew ? 'new-notification' : ''}`} onClick={() => handleNotificationClick(index)}>
              <p className="notification-subject-header">{notification.subject}</p>
              <p className="notification-description-header">{notification.description}</p>
              <p className="notification-time-header">{notification.time}</p>
              {notification.isNew && <div className="blue-circle"></div>}
            </div>
          ))}
        </div>
      )}
        <div className="user-profile-container" onClick={toggleDropdown}>
          <img className="profile" src={defaultAvatar} alt="Profile" />
          <span className="name">Celmin Shane</span>
          <img className="dropArrow" src={dropArrow} alt="drop Arrow" />
        </div>
        {dropdownVisible && (
            <div  className="profile-dropdown">
              <Link to="/Profile" className="link">
                <img className="image-dropdown" src={defaultAvatar} alt="Account Profile" />
                <span className="profile-name">Celmin Shane</span>
              </Link>
              <Link to="/Settings" >
                <img className="setting-dropdown" src={accountSettingDropdown} alt="Account Settings" />
                Account Settings
              </Link>
              <Link to="/" >
                <img className="logout-dropdown" src={logoutDropdown} alt="Logout Logo" />
                Logout
              </Link>
            </div>
          )}
      </div>
    </div>

    <div className={`side-bar ${sidebarMinimized ? 'minimized' : ''}`}>
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        <img src={sidebarMinimized ? sidebarButtonOpen : sidebarButton} alt="button" />
      </button>
      <img className="adminlogo" src={adminLogo} alt="AdminLogo" />
      <ul>
        <li>
          <Link to="/Dashboard">
            <img className="sidebaricon" src={dashboardIconClose} alt="Dashboard" />
            <span className="sidebar-text">Dashboard</span>
          </Link>
        </li>
        <li className="highlighted">
          <Link to="/Notifications">
            <img className="sidebaricon" src={notificationIconOpen} alt="Notifications" />
            <span className="sidebar-text">Notifications</span>
          </Link>
        </li>
        <li>
          <Link to="/Users">
            <img className="sidebaricon" src={usersIcon} alt="Users" />
            <span className="sidebar-text">Users</span>
          </Link>
        </li>
        <li>
          <Link to="/Delivery">
            <img className="sidebaricon" src={deliveryIcon} alt="Delivery" />
            <span className="sidebar-text">Delivery</span>
          </Link>
        </li>
        <li>
          <Link to="/Transactions">
            <img className="sidebaricon" src={transactionIcon} alt="Transactions" />
            <span className="sidebar-text">Transactions</span>
          </Link>
        </li>
        <li>
          <Link to="/Inventory">
            <img className="sidebaricon" src={inventoryIcon} alt="Inventory" />
            <span className="sidebar-text">Inventory</span>
          </Link>
        </li>
        <li>
          <Link to="/Announcements">
            <img className="sidebaricon" src={announcementsIcon} alt="Announcements" />
            <span className="sidebar-text">Announcements</span>
          </Link>
        </li>
        <li>
          <Link to="/Concerns">
            <img className="sidebaricon" src={concernsIcon} alt="Concerns" />
            <span className="sidebar-text">Concerns</span>
          </Link>
        </li>
        <li>
          <Link to="/Account">
            <img className="sidebaricon" src={accountIcon} alt="Account" />
            <span className="sidebar-text">Account</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className={`dashboard-content ${sidebarMinimized ? 'content-minimized' : ''}`}>
      <div className="notification-container">
        <h2 className="notification-title">Notifications</h2>
        <h3 className="notification-earlier">Earlier</h3>
        {notifications.map((notification, index) => (
          <div key={index} className={`notification-details ${notification.isNew ? 'new-notification' : ''}`} onClick={() => handleNotificationClick(index)}>
            <p className="notification-subject">{notification.subject}</p>
            <p className="notification-description">{notification.description}</p>
            <p className="notification-time">{notification.time}</p>
            {notification.isNew && <div className="blue-circle"></div>}
          </div>
        ))}
      </div>
    </div>

  </div>
  );
};

export default DashboardAdmin;