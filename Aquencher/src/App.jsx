
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Components/signin';
import Signup from './Components/signup';
import DashboardAdmin from './Components/dashboardAdmin';
import NotificationAdmin from './Components/notificationAdmin';
import UsersAdmin from './Components/usersAdmin';
import DeliveryTaskAdmin from './Components/deliveryTaskAdmin';
// import DeliveryRequestAdmin from './Components/deliveryRequestAdmin';
import TransactionAdmin from './Components/transactionAdmin';
import InventoryAdmin from './Components/inventoryAdmin';
import AnnouncementAdmin from './Components/announcementAdmin';
import CreateAnnouncement from './Components/createAnnouncementAdmin';
import ConcernAdmin from './Components/concernsAdmin';
import AccountAdmin from './Components/accountAdmin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path='/Dashboard' element={<DashboardAdmin />}/>
        <Route path='/Notifications' element={<NotificationAdmin />}/>
        <Route path='/Users' element={<UsersAdmin />}/>
        <Route path='/Delivery/Task' element={<DeliveryTaskAdmin/>}/>
        <Route path='/Transactions' element={<TransactionAdmin/>}/>
        <Route path='/Inventory' element={<InventoryAdmin/>}/>
        <Route path='/Announcements' element={<AnnouncementAdmin/>}/>
        <Route path='/Announcements/CreateAnnouncement' element={<CreateAnnouncement/>}/>
        <Route path='/Concerns' element={<ConcernAdmin/>}/>
        <Route path='/Account/Settings' element={<AccountAdmin/>}/>
      </Routes>
    </Router>
  );
};

export default App;
