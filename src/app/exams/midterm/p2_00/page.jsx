import Wrapper from '@/assets/wrappers/midterm/Shop_00';
import NavbarShop_00 from '@/components/midterm/NavbarShop_00';

const P2_StaticPage_00 = () => {
  return (
    <Wrapper>
      <div className='midterm'>
        <div className='homepage'>
          <div className='directory-menu'>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/hats.png'
                alt=''
              />
              <a href='./hats.html' className='content'>
                <h1 className='title'>HATS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </a>
            </div>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/jackets.png'
                alt=''
              />
              <a href='./jackets.html' className='content'>
                <h1 className='title'>JACKETS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </a>
            </div>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/sneakers.png'
                alt=''
              />
              <a href='./sneakers.html' className='content'>
                <h1 className='title'>SNEAKERS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </a>
            </div>
            <div className='large menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/womens.png'
                alt=''
              />
              <a href='./womens.html' className='content'>
                <h1 className='title'>WOMENS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </a>
            </div>
            <div className='large menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/mens.png'
                alt=''
              />
              <a href='./mens_00' className='content'>
                <h1 className='title'>MENS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P2_StaticPage_00;
