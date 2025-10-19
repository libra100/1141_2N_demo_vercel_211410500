import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  BlogStaticPage_00,
  BlogLocalJson_00,
  BlogLocalJson2_00,
  BlogNodePage_00,
} from './pages';

const App_00 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogStaticPage_00 />} />
        <Route path='/localjson_00' element={<BlogLocalJson_00 />} />
        <Route path='/localjson2_00' element={<BlogLocalJson2_00 />} />
        <Route path='/node_00' element={<BlogNodePage_00 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_00;
