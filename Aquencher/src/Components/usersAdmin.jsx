import "./Css/usersAdmin.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewUserModal from './newUserModal'; 
import DeactivationModal from './deactivationModal';

import loginLogo from './Assets/loginLogo.png';
import notificationClose from './Assets/notificationClose.png';
import defaultAvatar from './Assets/default-avatar.jpg';
import dashboardIconOpen from './Assets/dashboard-open.png';
import dashboardIconClose from './Assets/dashboard.png';
import notificationIconClose from './Assets/notification.png';
import usersIcon from './Assets/users.png';
import usersIconOpen from './Assets/users-open.png';
import deliveryIconClose from './Assets/delivery.png';
import transactionIconClose from './Assets/transactions.png';
import inventoryIconClose from './Assets/inventory.png';
import announcementsIconClose from './Assets/announcement.png';
import concernsIconClose from './Assets/concerns.png';
import accountIconClose from './Assets/account.png';
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

const UsersAdmin = () => {

  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    { subject: 'Request for Customer Account Deactivation', description: 'Karen Joyce Joson has requested the deletion of account.', time: '10 minutes ago', isNew: true },
    { subject: 'Borrow Request', description: 'Karen Joyce Joson requested to borrow 3 gallons of Po\'s Purified Blue Slim Gallon with Faucet Refill (20L/5gal)', time: '12 minutes ago', isNew: true },
    { subject: 'Borrow Request', description: 'John Smith requested to borrow 2 gallons of Po\'s Purified Dispenser Bottle Refill 18.9L', time: '12 minutes ago', isNew: false },
    { subject: 'System Update', description: 'System will be offline temporarily. Update is scheduled for tomorrow at 10:00 AM. Please plan your tasks accordingly.', time: '12 minutes ago', isNew: false },
  ]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const users = [
    { fullName: 'Karen Joyce Joson', username: '@karenjoycrjoson', phone: '09123892012', address: '12 Everlasting St. Bulihan', dateRegistered: 'January 5, 2024', status: 'Active', avatar: defaultAvatar },
    { fullName: 'Celmin Shane Quizon', username: '@clmnshn', phone: '09123098971', address: 'Malolos, Bulacan', dateRegistered: 'January 15, 2024', status: 'Active', avatar: defaultAvatar },
    { fullName: 'Miguel Angelo Barruga', username: '@barrugs', phone: '09123098971', address: 'Malolos, Bulacan', dateRegistered: 'January 15, 2024', status: 'Active', avatar: defaultAvatar },
    { fullName: 'Francis Harvey Soriano', username: '@harvey', phone: '09123098971', address: 'Malolos, Bulacan', dateRegistered: 'January 15, 2024', status: 'Active', avatar: defaultAvatar },
  ];
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [isDeactivationModalOpen, setIsDeactivationModalOpen] = useState(false); 

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

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedUsers(users.map((_, index) => index));
    } else {
      setSelectedUsers([]);
    }
  };
  
  const handleCheckboxChange = (index) => {
    if (selectedUsers.includes(index)) {
      setSelectedUsers(selectedUsers.filter((i) => i !== index));
    } else {
      setSelectedUsers([...selectedUsers, index]);
    }
  };

  //filtering search
  const handleSearchClick = () => {
    setFilteredUsers(users.filter((user) =>
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) 
    ));
    setSearchNotFound(filtered.length === 0); 
  };

  const handleAddUser = (newUser) => {
    setFilteredUsers([...filteredUsers, { ...newUser }]);
  };

  const handleUserDotsClick = (index) => {
    setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
  };

    // Function to handle deactivation modal open
    const handleDeactivateUser = (index) => {
      setActiveDropdownIndex(null); // Close dropdown when opening modal
      setIsDeactivationModalOpen(true);
    };
  
    // Function to confirm deactivation
    const confirmDeactivation = () => {
      // Perform deactivation logic here (e.g., update user status to 'Inactive', etc.)
      console.log('User deactivated'); // Placeholder logic
      setIsDeactivationModalOpen(false); // Close modal after deactivation
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
            <Link to="/notifications" className="see-all-button">See all</Link>
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
        <li>
          <Link to="/Notifications">
            <img className="sidebaricon" src={notificationIconClose} alt="Notifications" />
            <span className="sidebar-text">Notifications</span>
          </Link>
        </li>
        <li className="highlighted">
          <Link to="/Users">
            <img className="sidebaricon" src={usersIconOpen} alt="Users" />
            <span className="sidebar-text">Users</span>
          </Link>
        </li>
        <li>
          <Link to="/Delivery">
            <img className="sidebaricon" src={deliveryIconClose} alt="Delivery" />
            <span className="sidebar-text">Delivery</span>
          </Link>
        </li>
        <li>
          <Link to="/Transactions">
            <img className="sidebaricon" src={transactionIconClose} alt="Transactions" />
            <span className="sidebar-text">Transactions</span>
          </Link>
        </li>
        <li>
          <Link to="/Inventory">
            <img className="sidebaricon" src={inventoryIconClose} alt="Inventory" />
            <span className="sidebar-text">Inventory</span>
          </Link>
        </li>
        <li>
          <Link to="/Announcements">
            <img className="sidebaricon" src={announcementsIconClose} alt="Announcements" />
            <span className="sidebar-text">Announcements</span>
          </Link>
        </li>
        <li>
          <Link to="/Concerns">
            <img className="sidebaricon" src={concernsIconClose} alt="Concerns" />
            <span className="sidebar-text">Concerns</span>
          </Link>
        </li>
        <li>
          <Link to="/Account">
            <img className="sidebaricon" src={accountIconClose} alt="Account" />
            <span className="sidebar-text">Account</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className={`dashboard-content ${sidebarMinimized ? 'content-minimized' : ''}`}>
      <div className="users-section">
        <div className="users-header">
          <h2 className="users-header-text">Users</h2>
          <p className="customer-name-text">Customers</p>
        </div>
        <div className="user-controls">
          <div className="search-bar-container">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
              />
              <img src={searchBlackIcon} alt="Search" />
            </div>
            <button className="search-button" onClick={handleSearchClick}>
              <img src={searchIcon} alt="Search Icon" />
            </button>
            <button className="filter-button">
              <img src={filterIcon} alt="Filter" />
            </button>
          </div>
          <button className="new-user-button" onClick={() => setIsNewUserModalOpen(true)}>+ New User</button>
        </div>
        <div className="users-table-container">
        <table className="users-table">
              <thead className="users-table-header">
                <tr>
                  <th>
                    <input
                      className="custom-checkbox"
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>Full Name</th>
                  <th>Username</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Date Registered</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="8" style={{ textAlign: 'center' }}>
                      No users found.
                    </td>
                  </tr>
                ) :
                 (filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        className="custom-checkbox"
                        type="checkbox"
                         checked={selectedUsers.includes(index)}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </td>
                    <td>
                      <div className="user-info">
                         <img className="user-avatar" src={user.avatar} alt={`${user.fullName}'s avatar`} />
                        <span>{user.fullName}</span>
                      </div>
                    </td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>{user.dateRegistered}</td>
                    <td className={`user-status ${user.status.toLowerCase() === 'inactive' ? 'inactive' : ''}`}>
                      {user.status}
                    </td>
                    <td>
                        <div className="user-actions">
                          <img
                            src={userDots}
                            alt="Actions"
                            onClick={() => handleUserDotsClick(index)}
                            className="userDots"
                          />
                          {activeDropdownIndex === index && (
                            <div className="user-dropdown">
                              <Link to={`/Users/${user.username}/Edit`}>Edit</Link>
                              <Link to={`/Users/${user.username}/View Details`}>View Details</Link>
                              <button onClick={() => handleDeactivateUser(index)}>Deactivate</button>
                            </div>
                          )}
                        </div>
                      </td>
                  </tr>
                )))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
     {/* NewUserModal component */}
    <NewUserModal
      isOpen={isNewUserModalOpen}
      onClose={() => setIsNewUserModalOpen(false)}
      onAddUser={handleAddUser}
    />
    {/* DeactivationModal component */}
    <DeactivationModal
        isOpen={isDeactivationModalOpen}
        onClose={() => setIsDeactivationModalOpen(false)}
        onConfirm={confirmDeactivation}
      />
  </div>
  );
};

export default UsersAdmin;