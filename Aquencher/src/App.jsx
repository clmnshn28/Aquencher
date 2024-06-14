
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Components/signin';
import Signup from './Components/signup';
import DashboardAdmin from './Components/dashboardAdmin';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<DashboardAdmin />}/>
      </Routes>
    </Router>
  );
};

export default App;
