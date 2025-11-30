import Wrapper from '@/assets/wrappers/midterm/Shop_00';

const P1_StaticPage_00 = () => {
  return (
    <Wrapper>
      <div>
        <div className='section-title'>
          <h2>P1_StaticPage_00,</h2>
          <h3>蔡松恩, 211410500</h3>
        </div>
        <div className='collection-page'>
          <h1 className='title'>Mens</h1>
          <div className='items'>
            <div className='collection-item'>
              <img className='image' src='/images/midterm/camo-vest.png' />
              <div className='collection-footer'>
                <span className='name'>Camo Down Vest</span>
                <span className='price'>325</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/images/midterm/floral-shirt.png' />
              <div className='collection-footer'>
                <span className='name'>Floral T-shirt</span>
                <span className='price'>20</span>
              </div>
              <button className='custom-button'>Add to Card</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/images/midterm/long-sleeve.png' />
              <div className='collection-footer'>
                <span className='name'>Black & White Longsleeve</span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/images/midterm/pink-shirt.png' />
              <div className='collection-footer'>
                <span className='name'>Pink T-shirt </span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/roll-up-jean-shirt.png'
              />
              <div className='collection-footer'>
                <span className='name'>Jean Long Sleeve</span>
                <span className='price'>40</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/polka-dot-shirt.png'
              />
              <div className='collection-footer'>
                <span className='name'>Burgundy T-shirt</span>
                <span className='price'>25</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P1_StaticPage_00;
