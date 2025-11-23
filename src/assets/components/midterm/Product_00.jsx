import Wrapper from '../../wrappers/midterm/Shop_00';

const Product_00 = ({ id, name, price, img_url }) => {
  return (
    <Wrapper>
      <div key={id} className='collection-item'>
        <img className='image' src={img_url} />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <button className='custom-button'>Add to Cart</button>
      </div>
    </Wrapper>
  );
};
export default Product_00;
