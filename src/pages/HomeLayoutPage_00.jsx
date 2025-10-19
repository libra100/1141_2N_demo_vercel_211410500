import { Outlet } from 'react-router-dom';
import Navbar from '../assets/components/Navbar_00.jsx';

const HomeLayoutPage_00 = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayoutPage_00;
