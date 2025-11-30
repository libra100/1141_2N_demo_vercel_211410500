'use client';

import { useState, useEffect, use } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '@/assets/wrappers/midterm/Shop_00';
import Product_00 from '@/components/midterm/Product_00';

const FetchShopByCategory_00 = () => {
  const [shop_00, setShop_00] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log('category', category);

  const fetchShopFromNode = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/shop_00/${category}`
      );
      const data = await response.json();
      if (data.length != 0) setShop_00(data);
      console.log('shop_00 data', data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchShopFromNode();
  }, []);
  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h3>蔡松恩, 211410500</h3>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_00?.map((item) => {
              const { pid, remote_img_url, pname, price } = item;
              return (
                <Product_00
                  key={pid}
                  pid={pid}
                  pname={pname}
                  price={price}
                  img_url={remote_img_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchShopByCategory_00;
