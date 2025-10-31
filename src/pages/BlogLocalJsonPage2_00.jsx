import { use, useState } from 'react';
import { FaMugSaucer, FaGlobe } from 'react-icons/fa6';

import blogData_00 from '../assets/data/blogData.json';
import Blog2_00 from '../assets/components/tutorials/Blog2_00.jsx';
import Wrapper from '../assets/wrappers/Blog2_00.jsx';
import Alert_00 from '../assets/components/Alert_00.jsx';

const BlogLocalJsonPage2_00 = () => {
  const [name, setName] = useState('蔡松恩');
  const [id, setId] = useState(211410500);
  const [blogs_00, setBlogs_00] = useState(blogData_00);
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: '',
  });

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'blog removed');
    setBlogs_00(blogs_00.filter((blog) => blog.id !== id));
  };

  const clearAllBlogs = () => {
    showAlert(true, 'danger', 'clear all blogs');
    setBlogs_00([]);
  };

  const loadAllBlogs = () => {
    showAlert(true, 'success', 'load all blogs');
    setBlogs_00(blogData_00);
  };

  return (
    <Wrapper>
      {alert.show && <Alert_00 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json 2 -- {name}， {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_00.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog2_00
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
                removeItem={removeItem}
              />
            );
          })}
        </div>
        <div className='flex justify-center item-center gap-8 mt-8'>
          <button
            type='button'
            className='text-red-700 bg-red-200 px-4 py-2 capitalize text-base rounded hover:bg-red-300'
            onClick={clearAllBlogs}
          >
            clear all blogs
          </button>
          <button
            type='button'
            className='text-blue-700 bg-blue-200 px-4 py-2 capitalize text-base rounded hover:bg-blue-300'
            onClick={loadAllBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogLocalJsonPage2_00;
