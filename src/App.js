import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './components/About';
import Home from "./components/Home";
import Ordersummary from './components/Ordersummary';
import Nomatch from './components/Nomatch';
import Products from './components/Products';
import Featuredproducts from './components/Featuredproducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import RequiredAuth from './components/RequiredAuth';

function App() {

    return (
        <>
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='order' element={<Ordersummary />} />
                <Route path='product' element={<Products />}>
                    <Route path='featured' element={<Featuredproducts />} />
                    <Route path='new' element={<NewProducts />} />
                </Route>
                <Route path='users' element={<Users />}>
                    <Route path=':userId' element={<UserDetails />} />
                </Route>
                <Route path='profile' element={<RequiredAuth><Profile /></RequiredAuth>} />
                <Route path='login' element={<Login/>}/>
                <Route path='*' element={<Nomatch />} />
            </Routes>
            </AuthProvider>
        </>
    );
}
export default App;