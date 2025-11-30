import Wrapper from '../../assets/wrappers/midterm/Shop_00';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const NavbarShopNode_00 = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Link href='/demo/shop_00/node' className='logo-container'>
          <img src='/themes/midterm/assets/crown.svg' />
        </Link>
        <div className='options'>
          <Link href='/' className='option'>
            TKUdemo
          </Link>
          <Link href='./overview.html' className='option'>
            Shop
          </Link>
          <Link href='/shop' className='option'>
            Contact
          </Link>
          <Link href='/signin' className='option'>
            Sign In
          </Link>
          <div className='cart-icon'>
            <img
              className='shopping-icon'
              src='/themes/midterm/assets/shopping-bag.svg'
              alt=''
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default NavbarShopNode_00;
