import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './Components/About'
import Home from './Components/Home'
import "./App.css";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";
import Products from "./Components/Products";
import NewProducts from "./Components/NewProducts"
import FeaturedProducts from "./Components/FeaturedProducts";
import FragmentDemo from './Components/FragmentDemo';
import PureCompDemo from './Components/PureCompDemo';
import ParentComp from './Components/ParentComp';
const LazyAbout = React.lazy(()=> import ('./Components/About'));

function App(){
return (
  <>
  <Navbar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={
      <React.Suspense fallback="Loading...">
        <LazyAbout/>
        </React.Suspense>
        } />
      <Route path="orderSummary" element={<OrderSummary />} />
      <Route path="products" element={<Products/>}>
        <Route index element={<FeaturedProducts/>}/>
        <Route path="faturedProducts" element={<FeaturedProducts/>}/>
        <Route path="newProducts" element={<NewProducts/>}/>
      </Route>
      <Route path="fragments" element={<FragmentDemo/>}/>
      <Route path="parentComp" element={<ParentComp/>}/>
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
  </>
   
)
}
export default App;
