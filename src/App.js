import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRouter from './router/PrivateRouter';
import { Route, Routes } from 'react-router-dom';
// import Dashboard from './component/Dashboard';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
}

export default App;
