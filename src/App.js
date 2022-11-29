import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AllBlogs from './components/AllBlogs';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<AllBlogs/>}/>
          <Route path='/all' element={<AllBlogs/>} />
          <Route path='/add' element={<AddBlog/>} />
          <Route path='/edit/:id' element={<EditBlog/>} ></Route> 

        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
