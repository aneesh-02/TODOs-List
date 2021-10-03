import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";


function App() 
{
  let todos = [
    {
      sno: 1,
      title: "Title 1",
      desc: "description 1"
    },
    {
      sno: 1,
      title: "Title 1",
      desc: "description 1"
    },
    {
      sno: 1,
      title: "Title 1",
      desc: "description 1"
    }
  ]




  return (
  <>
    <Header searchBar = {false}  />  
    <Todos/>
    <Footer/>
  </>
  );
}

export default App;
