import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Slide from './components/slider/Slide';
import Category from './components/category/category';
import Form from './components/form/form';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slide></Slide>
      <Category></Category>
      {/* <Form></Form> */}
    </div>
  );
}

export default App;
