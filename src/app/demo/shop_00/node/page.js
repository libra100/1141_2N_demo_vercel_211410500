import Wrapper from '@/assets/wrappers/midterm/Shop_00';
// import NavbarShopNode_00 from '@/components/midterm/NavbarShopNode_00';

const ShopNodeMainPage_00 = () => {
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
              <a href='/demo/shop_00/node/hats' className='content'>
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
              <a href='/demo/shop_00/node/jackets' className='content'>
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
              <a href='/demo/shop_00/node/sneakers' className='content'>
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
              <a href='/demo/shop_00/node/womens' className='content'>
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
              <a href='/demo/shop_00/node/mens' className='content'>
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

export default ShopNodeMainPage_00;
