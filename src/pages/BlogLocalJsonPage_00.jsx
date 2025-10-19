import { use, useState } from 'react';
import { FaMugSaucer, FaGlobe } from 'react-icons/fa6';

import blogData_00 from '../assets/data/blogData.json';
import Blog_00 from '../assets/components/Blog_00';

const BlogLocalJsonPage_00 = () => {
  const [name, setName] = useState('蔡松恩');
  const [id, setId] = useState(211410500);
  const [blogs_00, setBlogs_00] = useState(blogData_00);
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json -- {name}， {id}
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
    </>
  );
};

export default BlogLocalJsonPage_00;
