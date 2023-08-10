// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Content from './components/Content'
import Banner from './components/Banner'
import Title from './components/Title'
import Main from './components/Main'
import CustomButton from './components/CustomButtons'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import Heading from './components/Heading'
import { Toolbar,AppBar,styled,Box,Typography, TextField, Button } from '@mui/material';
function App() {
  return (
    <div className="App">
      <div className='header'>
      <Title />
      <Main />
      <NavBar />
      </div>
      <Banner />
      <header className="App-header">
        <AboutSection />
        <Heading/>        
         {/* <Header /> 
         <Content /> */}
      </header>
    </div>
  );
}

export default App;
 