import "./Css/dashboardAdmin.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import loginLogo from './Assets/loginLogo.png';
import notificationClose from './Assets/notificationClose.png';
import defaultAvatar from './Assets/default-avatar.jpg';
import dashboardIconOpen from './Assets/dashboard-open.png';
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
        <Link to="/Dashboard" className='link-sidebar highlighted'>
          <li>
            <img className="sidebaricon" src={dashboardIconOpen} alt="Dashboard" />
            <span className="sidebar-text">Dashboard</span>
          </li>
        </Link>
        <Link to="/Notifications" className='link-sidebar'>
          <li>
            <img className="sidebaricon" src={notificationIcon} alt="Notifications" />
            <span className="sidebar-text">Notifications</span>
          </li>
        </Link>
        <Link to="/Users" className='link-sidebar'>
          <li>
            <img className="sidebaricon" src={usersIcon} alt="Users" />
            <span className="sidebar-text">Users</span>
          </li>
        </Link>
        <Link to="/Delivery/Task" className='link-sidebar'>
          <li>
            <img className="sidebaricon" src={deliveryIcon} alt="Delivery" />
            <span className="sidebar-text">Delivery</span>
          </li>
        </Link>
        <Link to="/Transactions" className='link-sidebar'>
          <li>
            <img className="sidebaricon" src={transactionIcon} alt="Transactions" />
            <span className="sidebar-text">Transactions</span>
          </li>
        </Link>
        <Link to="/Inventory" className='link-sidebar'>
          <li>
            <img className="sidebaricon" src={inventoryIcon} alt="Inventory" />
            <span className="sidebar-text">Inventory</span>
          </li>
        </Link>
        <Link to="/Announcements" className='link-sidebar'>
          <li>
            <img className="sidebaricon" src={announcementsIcon} alt="Announcements" />
            <span className="sidebar-text">Announcements</span>
          </li>
        </Link>
        <Link to="/Concerns" className='link-sidebar'>
          <li>
            <img className="sidebaricon" src={concernsIcon} alt="Concerns" />
            <span className="sidebar-text">Concerns</span>
          </li>
        </Link>
        <Link to="/Account/Settings" className='link-sidebar'>
          <li>
            <img className="sidebaricon" src={accountIcon} alt="Account" />
            <span className="sidebar-text">Account</span>
          </li>
        </Link>
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