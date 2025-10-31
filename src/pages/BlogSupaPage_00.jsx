import { useState, useEffect } from 'react';

import Blog_00 from '../assets/components/Blog_00.jsx';

import { supabase } from '../db/clientSupabase';
import Wrapper from '../assets/wrappers/Blog2_00.jsx';

const BlogSupaPage_00 = () => {
  const [name, setName] = useState('蔡松恩');
  const [id, setId] = useState(211410500);
  const [blogs_00, setBlogs_00] = useState([]);

  const fetchBlogFromSupaServer = async () => {
    try {
      let { data, error } = await supabase.from('blog_00').select('*');
      console.log('blogs', data);
      //
      setBlogs_00(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromSupaServer();
  }, []);

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from Supabase -- {name}， {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_00.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog_00
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogSupaPage_00;
