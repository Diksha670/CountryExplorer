import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Applayout } from './Components/Layout/layout';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Country } from './pages/Country';
import { Contact } from './pages/Contact';
import { CountryDetails } from './pages/CountryDetails';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
    children:[
         { path:'/',
    element:<Home />
  },
  {
    path:'contact',
    element:<Contact />
  },
  {
    path:'country',
    element:<Country />
  },
  {
    path:'country/:id',
    element:<CountryDetails />
  },
  {
    path:'about',
    element:<About />
  }
    ]
  } 
  
])
function App(){
 return <RouterProvider router={router}/>
}
export default App;