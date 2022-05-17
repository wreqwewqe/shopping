
import { Button,Layout,Content } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import './App.less'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Order from './pages/Order'
import UserLists from './pages/UserLists'
import ProductLists from './pages/ProductLists'
function App() {
  return (
    <Router forceRefresh={true}>
      <Header/>
      <main className="main">
        <Route path='/' component={Home} exact/>
        <Route path='/order' component={Order} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/userLists' component={UserLists}/>
        <Route path='/products/:id' component={ProductDetails} exact/>
        <Route path='/cart/:id?' component={Cart}/>
        <Route path='/register' component={Register} exact/>
        <Route path='/admin' component={Admin} exact/>
        <Route path='/productLists' component={ProductLists}/>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
