import './Css/deliveryTaskAdmin.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import notificationClose from './Assets/notificationClose.png';
import dashboardIconClose from './Assets/dashboard.png';
import notificationIconClose from './Assets/notification.png';
import usersIconClose from './Assets/users.png';
import deliveryIconClose from './Assets/delivery.png';
import transactionIconClose from './Assets/transactions.png';
import inventoryIconClose from './Assets/inventory.png';
import announcementsIconClose from './Assets/announcement.png';
import concernsIconClose from './Assets/concerns.png';
import accountIconClose from './Assets/account.png';

import dashboardIconOpen from './Assets/dashboard-open.png';
import usersIconOpen from './Assets/users-open.png';
import deliveryIconOpen from './Assets/delivery-open.png';

import loginLogo from './Assets/loginLogo.png';
import defaultAvatar from './Assets/default-avatar.jpg';
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
import userDots from './Assets/user-dots.png';
import deliveryTaskOpen from './Assets/task-open.png'; 
import deliveryRequestClose from './Assets/concerns.png';


const deliveryTaskAdmin = () =>{

  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    { subject: 'Request for Customer Account Deactivation', description: 'Karen Joyce Joson has requested the deletion of account.', time: '10 minutes ago', isNew: true },
    { subject: 'Borrow Request', description: 'Karen Joyce Joson requested to borrow 3 gallons of Po\'s Purified Blue Slim Gallon with Faucet Refill (20L/5gal)', time: '12 minutes ago', isNew: true },
    { subject: 'Borrow Request', description: 'John Smith requested to borrow 2 gallons of Po\'s Purified Dispenser Bottle Refill 18.9L', time: '12 minutes ago', isNew: false },
    { subject: 'System Update', description: 'System will be offline temporarily. Update is scheduled for tomorrow at 10:00 AM. Please plan your tasks accordingly.', time: '12 minutes ago', isNew: false },
  ]);

  const [tasks, setTasks] = useState([
    { date: '2024-07-02', time: '9:00 AM', customerName: 'Customer Name', transactionType: 'Transaction Type', gallonType: 'Gallon Type', quantity: 'Quantity', status: 'Completed' },
    { date: '2024-07-02', time: '9:00 AM', customerName: 'Customer Name', transactionType: 'Transaction Type', gallonType: 'Gallon Type', quantity: 'Quantity', status: 'Completed' },
    { date: '2024-07-02', time: '9:00 AM', customerName: 'Customer Name', transactionType: 'Transaction Type', gallonType: 'Gallon Type', quantity: 'Quantity', status: 'Completed' },
    { date: '2024-07-02', time: '9:00 AM', customerName: 'Customer Name', transactionType: 'Transaction Type', gallonType: 'Gallon Type', quantity: 'Quantity', status: 'Completed' },
    { date: '2024-07-02', time: '9:00 AM', customerName: 'Customer Name', transactionType: 'Transaction Type', gallonType: 'Gallon Type', quantity: 'Quantity', status: 'Complete' },
    { date: '2024-07-02', time: '9:00 AM', customerName: 'Customer Name', transactionType: 'Transaction Type', gallonType: 'Gallon Type', quantity: 'Quantity', status: 'Complete' },
    { date: '2024-07-02', time: '9:00 AM', customerName: 'Customer Name', transactionType: 'Transaction Type', gallonType: 'Gallon Type', quantity: 'Quantity', status: 'Complete' },
    { date: '2024-07-02', time: '9:00 AM', customerName: 'Customer Name', transactionType: 'Transaction Type', gallonType: 'Gallon Type', quantity: 'Quantity', status: 'Complete' },
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
            <p className="notification-title-header">Notifications</p>
            <Link to="/Notifications" className="see-all-button">See all</Link>
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
        <Link to="/Users" className='link-sidebar'>
          <li>
            <img className="sidebaricon" src={usersIconClose} alt="Users" />
            <span className="sidebar-text">Users</span>
          </li>
        </Link>
        <Link to="/Delivery/Task" className='link-sidebar highlighted sub-delivery'>
          <li>
            <img className="sidebaricon" src={deliveryIconOpen} alt="Delivery" />
            <span className="sidebar-text">Delivery</span>
          </li>
        </Link>
          <ul>
            <Link to="/Delivery/Task" className='link-sub-sidebar'>
              <li className='sub-sidebar selected'>
                <div className="task-container sub-highlighted">
                  <img className="sub-sidebaricon" src={deliveryTaskOpen} alt="Tasks" />
                  <span className="sidebar-text">Tasks</span>
                </div>
              </li>
            </Link>
            <Link to="/Delivery/Requests" className='link-sub-sidebar'>
              <li className='sub-sidebar'>
                <div className="task-container">
                  <img className="sub-sidebaricon" src={deliveryRequestClose} alt="Requests" />
                  <span className="sidebar-text">Requests</span>
                  </div>
              </li>
            </Link>
          </ul>
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
        <Link to="/Account/Settings" className='link-sidebar'>
          <li>
            <img className="sidebaricon" src={accountIconClose} alt="Account" />
            <span className="sidebar-text">Account</span>
          </li>
        </Link>
      </ul>
    </div>
    <div className={`dashboard-content ${sidebarMinimized ? 'content-minimized' : ''}`}>
      <div className="delivery-header">
        <h2 className="delivery-header-text">Task</h2>
        <Link to="/Delivery/Task"  className='delivery-queue-link'>
          <p className="delivery-queue-text">Delivery Queue</p>
        </Link>
        <Link to="/Delivery/Requests"  className='delivery-request-link'>
        <p className="delivery-request-text">Requests</p>
        </Link>
      </div>
      <div className="queue-container">
        <table className="queue-table">
          <thead className="queue-table-header">
            <tr>
              <th>Date/Time</th>
              <th>Customer Name</th>
              <th>Transaction Type</th>
              <th>Gallon Type</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className='queue-date-time'>
                  <div>{task.time}</div>
                  <div>{task.date}</div>
                </td>
                <td>{task.customerName}</td>
                <td>{task.transactionType}</td>
                <td>{task.gallonType}</td>
                <td>{task.quantity}</td>
                <td>
                  <div className={task.status === 'Completed' ? 'status-completed' : 'status-complete'}>
                    {task.status}
                  </div> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  </div>
  );
}

export default deliveryTaskAdmin;