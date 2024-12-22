//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import AboutUs from './Components/Aboutus';
import Home from './Components/Home';
import Login from './Components/Login';
import Footer from './Components/Footer';
import {Container, Row} from 'reactstrap';
import Register from './Components/Register';
import { useSelector } from 'react-redux';
import First from './Components/First';
import BookStore from './Components/BookStore';
//import Feedback from './Components/Feedback';
import HorrorBooks from './Components/HorrorBooks';
import HistoryBooks from './Components/HistoryBooks';
import ScienceBooks from './Components/ScienceBooks';
import DramaBooks from './Components/DramaBooks';
import Posts from './Components/Posts';

function App() {
  let email=useSelector((state)=>state.counter.user.email);
  return (
      <div>
        <Container fluid>
          <BrowserRouter>
          <Row>
            {email?<Header/>:null}
          </Row>
            <Row>
                <Routes>
                  <Route path="/home" element={<Home/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/register" element={<Register/>}></Route>
                  <Route path="/" element={<First/>}></Route>
                  <Route path="/bookstore" element={<BookStore/>}></Route>
                  <Route path="/historyBooks" element={<HistoryBooks/>}></Route>
                  <Route path="/horrorBooks" element={<HorrorBooks/>}></Route>
                  <Route path="/scienceBooks" element={<ScienceBooks/>}></Route>
                  <Route path="/dramaBooks" element={<DramaBooks/>}></Route>
                  <Route path="/posts" element={<Posts/>}></Route>
                  <Route path="/aboutUs" element={<AboutUs/>}></Route>
                </Routes>
            </Row>
            <Row>
                <Footer/>
            </Row>
          </BrowserRouter>
        </Container>
      </div>
    
  );
}

export default App;
