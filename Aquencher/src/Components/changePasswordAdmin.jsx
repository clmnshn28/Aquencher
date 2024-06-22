import "./Css/changePasswordAdmin.css"
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

const changePasswordAdmin = () =>{

  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    { subject: 'Request for Customer Account Deactivation', description: 'Karen Joyce Joson has requested the deletion of account.', time: '10 minutes ago', isNew: true },
    { subject: 'Borrow Request', description: 'Karen Joyce Joson requested to borrow 3 gallons of Po\'s Purified Blue Slim Gallon with Faucet Refill (20L/5gal)', time: '12 minutes ago', isNew: true },
    { subject: 'Borrow Request', description: 'John Smith requested to borrow 2 gallons of Po\'s Purified Dispenser Bottle Refill 18.9L', time: '12 minutes ago', isNew: false },
    { subject: 'System Update', description: 'System will be offline temporarily. Update is scheduled for tomorrow at 10:00 AM. Please plan your tasks accordingly.', time: '12 minutes ago', isNew: false },
  ]);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
 
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


  
  // checking if password match and met the requirement
  const changePasswordSubmit = (e) => {
    e.preventDefault();
    
    if (!isPasswordRequirementMet('Be 8-100 characters long') ||
      !isPasswordRequirementMet('Contain at least one uppercase and one lowercase letter') ||
      !isPasswordRequirementMet('Contain at least one number or special character')) {
      setError('Password does not meet the requirements');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return; 
    }

    // Proceed with form submission
    setError(''); 

    console.log('Form submitted');
  };

  // checking requirement in password
  const isPasswordRequirementMet = (requirement) => {
    switch (requirement) {
      case 'Be 8-100 characters long':
        return password.length >= 8 && password.length <= 100;
      case 'Contain at least one uppercase and one lowercase letter':
        return /[A-Z]/.test(password) && /[a-z]/.test(password);
      case 'Contain at least one number or special character':
        return /\d/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password);
      default:
        return false;
    }
  };
  const getRequirementIcon = (requirement) => {
    return isPasswordRequirementMet(requirement) ? <span className='check'>&#10004;</span> : <span className='ekis'>&#10005;</span>;
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
          <Link to="/Account/Settings/MyProfile" className='link-sidebar highlighted sub-delivery'>
            <li>
              <img className="sidebaricon" src={accountIconOpen} alt="Account" />
              <span className="sidebar-text">Account</span>
            </li>
          </Link>
          <ul>
            <Link to="/Account/Settings/MyProfile" className='link-sub-sidebar'>
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
          <Link to="/Account/Settings/MyProfile">
            <p className="account-settings-profile-text-change">My Profile</p>
          </Link>
          <Link to="/Account/Settings/ChangePassword">
            <p className="account-settings-password-text-change">Change Password</p>
          </Link>
          <Link to="/Account/Settings/Archive Account">
            <p className="account-settings-archive-text">Archive Account</p>
          </Link>
        </div>

        <div className="admin-account-edit-container-change">
          <form onSubmit={changePasswordSubmit} className="form-changepass">
          <div className="form-group">
            <label className="change-pass-text" htmlFor="currentPassword">Current Password</label>
            <input 
              type="password" 
              id="currentPassword" 
              name="currentPassword" 
              className="change-pass-input"
              required 
            />
          </div>
          <div className="form-group">
            <label className="change-pass-text" htmlFor="newPassword">New Password</label>
            <input 
              type="password" 
              id="newPassword" 
              name="newPassword" 
              className="change-pass-input"
              required 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="change-pass-text" htmlFor="confirmNewPassword">Confirm New Password</label>
            <input 
              type="password" 
              id="confirmNewPassword" 
              name="confirmNewPassword" 
              className="change-pass-input"
              required 
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
             {error && <span className="changePass-error">{error}</span>}
          </div>
          <div className="change-password-requirements">
            <p >Your password must include the following:</p>
            <ul>
              <li>{getRequirementIcon('Be 8-100 characters long')} Be 8-100 characters long</li>
              <li>{getRequirementIcon('Contain at least one uppercase and one lowercase letter')}Contain at least one uppercase and one lowercase letter</li>
              <li>{getRequirementIcon('Contain at least one number or special character')} Contain at least one number or special character</li>
            </ul>
          </div>
          <button className="change-pass-btn" type="submit">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default changePasswordAdmin;