import "./Css/accountAdmin.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import loginLogo from './Assets/loginLogo.png';
import notificationClose from './Assets/notificationClose.png';
import defaultAvatar from './Assets/default-avatar.jpg';
import dashboardIconOpen from './Assets/dashboard-open.png';
import dashboardIconClose from './Assets/dashboard.png';
import notificationIconClose from './Assets/notification.png';
import usersIconClose from './Assets/users.png';
import usersIconOpen from './Assets/users-open.png';
import deliveryIconClose from './Assets/delivery.png';
import transactionIconClose from './Assets/transactions.png';
import transactionIconOpen from './Assets/transactions-open.png';
import inventoryIconClose from './Assets/inventory.png';
import inventoryIconOpen from './Assets/inventory-open.png';
import announcementsIconClose from './Assets/announcement.png';
import announcementIconOpen from './Assets/announcement-open.png';
import concernsIconClose from './Assets/concerns.png';
import concernIconOpen from './Assets/concerns-open.png';
import accountIconClose from './Assets/account.png';
import accountIconOpen from './Assets/account-open.png';

import adminLogo from './Assets/AdminLogo.png';
import sidebarButton from './Assets/sidebar-button.png';
import sidebarButtonOpen from './Assets/sidebar-button-open.png';
import complete from './Assets/complete.png';
import queue from './Assets/queue.png';
import dropArrow from './Assets/dropArrow.png';
import logoutDropdown from './Assets/logout-dropdown.png';
import accountSettingDropdown from './Assets/account-dropdown.png';
import searchIcon from './Assets/search-icon.png';
import filterIcon from './Assets/filter-icon.png';
import searchBlackIcon from './Assets/black-search-icon.png';
import inventoryDots from './Assets/user-dots.png';
import createAnnouncement from './Assets/create-announcement.png';
import concernFilterOpen from './Assets/concern-filter-open.png';
import concernFilterClose from './Assets/concern-filter-close.png';
import accountSettingIconOpen from './Assets/settings-open.png';
import editProfile from './Assets/edit-profile.png';

const AccountAdmin = () =>{

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
    <div className={`bgaccount-container ${sidebarMinimized ? 'sidebar-minimized' : ''}`}>
      <div className="dashboard-header">
        <img className="Aquencher-Logo" src={loginLogo} alt="Aquencher Logo" />
        <div className="admin-profile">
          <img className="Notification" src={notificationClose} alt="Notification"  onClick={toggleNotifications}  />
          {notificationsVisible && (
          <div className="notifications-view">
            <div className="notifications-header">
              <p className="notification-title-header">Notifications</p>
              <Link to="/notifications" className="see-all-button">See all</Link>
            </div>
            <p className="notification-earlier-header">Earlier</p>
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
          <Link to="/Dashboard" className='link-sidebar'>
            <li>
              <img className="sidebaricon" src={dashboardIconClose} alt="Dashboard" />
              <span className="sidebar-text">Dashboard</span>
            </li>
          </Link>
          <Link to="/Notifications" className='link-sidebar'>
            <li>
              <img className="sidebaricon" src={notificationIconClose} alt="Notifications" />
              <span className="sidebar-text">Notifications</span>
            </li>
          </Link>
          <Link to="/Users" className='link-sidebar '>
            <li>
              <img className="sidebaricon" src={usersIconClose} alt="Users" />
              <span className="sidebar-text">Users</span>
            </li>
          </Link>
          <Link to="/Delivery/Task" className='link-sidebar'>
            <li>
              <img className="sidebaricon" src={deliveryIconClose} alt="Delivery" />
              <span className="sidebar-text">Delivery</span>
            </li>
          </Link>
          <Link to="/Transactions" className='link-sidebar'>
            <li>
              <img className="sidebaricon" src={transactionIconClose} alt="Transactions" />
              <span className="sidebar-text">Transactions</span>
            </li>
          </Link>
          <Link to="/Inventory" className='link-sidebar'>
            <li>
              <img className="sidebaricon" src={inventoryIconClose} alt="Inventory" />
              <span className="sidebar-text">Inventory</span>
            </li>
          </Link>
          <Link to="/Announcements" className='link-sidebar'>
            <li>
              <img className="sidebaricon" src={announcementsIconClose} alt="Announcements" />
              <span className="sidebar-text">Announcements</span>
            </li>
          </Link>
          <Link to="/Concerns" className='link-sidebar'>
            <li>
              <img className="sidebaricon" src={concernsIconClose} alt="Concerns" />
              <span className="sidebar-text">Concerns</span>
            </li>
          </Link>
          <Link to="/Account/Settings" className='link-sidebar highlighted sub-delivery'>
            <li>
              <img className="sidebaricon" src={accountIconOpen} alt="Account" />
              <span className="sidebar-text">Account</span>
            </li>
          </Link>
          <ul>
            <Link to="/Account/Settings" className='link-sub-sidebar'>
              <li className='sub-sidebar selected'>
                <div className="task-container sub-highlighted">
                  <img className="sub-sidebaricon account-settings-icon" src={accountSettingIconOpen} alt="Tasks" />
                  <span className="sidebar-text account-settings-text">Account Settings</span>
                </div>
              </li>
            </Link>
          </ul>
        </ul>
      </div>
      <div className={`dashboard-content ${sidebarMinimized ? 'content-minimized' : ''}`}>
        <div className="account-settings-container">
          <h1 className="account-settings-header-text">Account Setting</h1>
          <Link to="/Account/Settings/My Profile">
            <p className="account-settings-profile-text">My Profile</p>
          </Link>
          <Link to="/Account/Settings/Change Password">
            <p className="account-settings-password-text">Change Password</p>
          </Link>
          <Link to="/Account/Settings/Archive Account">
            <p className="account-settings-archive-text">Archive Account</p>
          </Link>
        </div>

        <div className="admin-account-edit-container">
          <div className="edit-account-container">
            <img className="edit-profile-image" src={defaultAvatar} alt="Profile Picture" />
            <div className="name-username-container">
              <p className="name-admin-account">Celmin Shane A. Quizon</p>
              <p className="username-admin-account">@clmnshn28</p>
              <button className="button-edit-profile-image">
                Edit
                <img className="edit-profile-button-icon" src={editProfile} alt="Edit Profile Icon" />
              </button>
            </div>
          </div>

          <div className="edit-account-container">
            <div className="personal-info">
              <h3 className="edit-header-info">Personal Information</h3>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-detail-name">Firstname</span>
                  <p className="info-details-editable">Francis</p>
                </div>
                <div className="info-item">
                  <span className="info-detail-name">Lastname</span>
                  <p className="info-details-editable">Havis</p>
                </div>
                <div className="info-item">
                  <span className="info-detail-name">Phone</span>
                  <p className="info-details-editable">09123892012</p>
                </div>
              </div>
            </div>
            <button className="button-edit-personal-info">
              Edit
              <img className="edit-profile-button-icon" src={editProfile} alt="Edit Profile Icon" />
            </button>
          </div>
          
          <div className="edit-account-container">
            <div className="address-info">
              <h3 className="edit-header-info">Address</h3>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-detail-name">Home number</span>
                  <p className="info-details-editable">12</p>
                </div>
                <div className="info-item">
                  <span className="info-detail-name">Street Address</span>
                  <p className="info-details-editable">Everlasting St.</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-detail-name">Barangay</span>
                  <p className="info-details-editable">Bulihan</p>
                </div>
                <div className="info-item">
                  <span className="info-detail-name">City</span>
                  <p className="info-details-editable">Malolos</p>
                </div>
              </div>
            </div>
            <button className="button-edit-personal-info">
              Edit
              <img className="edit-profile-button-icon" src={editProfile} alt="Edit Profile Icon" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AccountAdmin;