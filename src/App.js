import {createBrowserRouter, createHashRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import Store from './pages/Store';
import NotFound from './pages/NotFound';
import RootLayout from './layouts/RootLayout';
import ShoppingCartProvider from "./context/ShoppingCartContext";


const router = createHashRouter(
  createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home/>}/>
          <Route path='store' element={<Store/>}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
  )
)

function App() {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router}/>
    </ShoppingCartProvider>
  );
}

export default App;
