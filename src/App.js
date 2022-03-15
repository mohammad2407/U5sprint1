// import logo from './logo.svg';
import './App.css';
import { Vegetables } from './components/vegetables.jsx';
import { WishList } from './components/Wishlist.jsx';
// import Styles from "./components/styles.module.css
function App() {
  return (
    <div className="App">
     <h1>Vegetables</h1> 
     <Vegetables />

     <WishList />
    </div>
  );
}

export default App;
