import './App.scss';
import Home from './Components/Home/Home';
import { CartProvider } from './Context/CartContext';
import Nav from "./Components/Nav/Nav"


function App() {
  return (
    <>
      <CartProvider>
        <Nav/>
      <Home/>
      </CartProvider>
       </>
  );
}

export default App;
