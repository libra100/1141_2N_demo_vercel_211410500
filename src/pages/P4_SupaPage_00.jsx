import { useEffect, useState } from 'react';
import Product_00 from './../assets/components/midterm/Product_00';
import Wrapper from './../assets/wrappers/midterm/Shop_00';
import { supabase } from '../db/clientSupabase';

const P4_SupaPage_00 = () => {
  const [shop_00, setShop_00] = useState([]);
  const [category, setCategory] = useState('mens');

  const fetchProductFromSupaServer = async () => {
    try {
      let { data, error } = await supabase.from('shop_00').select('*');
      console.log('products', data);
      setShop_00(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductFromSupaServer();
  }, []);

  return (
    <Wrapper>
      <div className='section-title'>
        <h2>P4_SupaPage_00,</h2>
        <h3>蔡松恩, 211410500</h3>
      </div>
      <div className='collection-page'>
        <h1 className='title'>{category}</h1>
        <div className='items'>
          {shop_00.map((item) => {
            const { pid, name, price, img_url } = item;
            return (
              <Product_00
                key={pid}
                id={pid}
                name={name}
                price={price}
                img_url={img_url}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default P4_SupaPage_00;
