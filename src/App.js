


import About from './components/About';
import './App.css';
import Footer from './components/Footer';
import Foto from './components/Foto';
import { Header } from './components/Header';
import Logo from './components/Logo';
import { Mail } from './components/Mail';
import Services from './components/Services';


function App() {
  return (<>   
  <Header/>
  <Foto/>
  <Mail/>
  <Logo/>
  <About/>
  <Services/> 
  <Footer/> 
  </>)
 
  
}

export default App;
