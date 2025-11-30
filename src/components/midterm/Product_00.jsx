import Wrapper from '../../assets/wrappers/midterm/Shop_00';

const Product_00 = ({ pid, pname, price, img_url }) => {
  return (
    <Wrapper>
      <div key={pid} className='collection-item'>
        <img className='image' src={img_url} />
        <div className='collection-footer'>
          <span className='name'>{pname}</span>
          <span className='price'>{price}</span>
        </div>
        <button className='custom-button'>Add to Cart</button>
      </div>
    </Wrapper>
  );
};
export default Product_00;
