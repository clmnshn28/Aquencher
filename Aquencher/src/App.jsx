
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Components/signin';
import Signup from './Components/signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
