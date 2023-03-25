import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './LayOut/LayOut';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Notfound from './Notfound/Notfound';

let routers = createBrowserRouter([
  {path:'' , element:<LayOut/> , children:[
    {index:true , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact' , element:<Contact/>},
    {path:'*' , element:<Notfound/>},
  ]}
])

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
