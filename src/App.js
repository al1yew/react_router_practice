// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Error from './pages/Error';

// function App() {
//   return <BrowserRouter>
//     <nav>
//       our navbar and design
//     </nav>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="products" element={<Products />} />
//       <Route path="*" element={<Error />} />
//     </Routes>
//     <footer>
//       our footer and design
//     </footer>
//   </BrowserRouter>
// }

// export default App;


// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Error from './pages/Error';

// function App() {
//   return <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />}>
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<Products />} />
//         <Route path="*" element={<Error />} />
//       </Route>
//       <Route path="dashboard" element={<div>dashboard</div>}>
//         <Route path="stats" element={<div>stats</div>} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// }

// export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Error from './pages/Error';

// function App() {
//   return <BrowserRouter>
//     <Routes>
//       {/* koqda nested, znacit birinin icinde neskolko shtuk.
//       nado v parent ukazat OUTLET. no eto nujno tolko esli
//       ya xochu shto b <h2>Home Page</h2> pokazivalsa na 
//       vsex stranicax. Takoy setup zacastuyu ispolzuyetsa 
//       dla navbara, ved on doljen bit na vsex stranicax*/}

//       <Route path="/" element={<Home />}>
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<Products />} />
//         <Route path="*" element={<Error />} />
//       </Route>

//     </Routes>
//   </BrowserRouter>
// }

// export default App;


// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Error from './pages/Error';
// import SharedLayout from "./pages/SharedLayout";
// import SingleProduct from "./pages/SingleProduct";

// function App() {
//   return <BrowserRouter>
//     <Routes>
//       {/* luchshe vseqo sdelat shared layout i sobrat vsex tuda */}

//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<Products />} />
//         <Route path="products/:id" element={<SingleProduct />} />
//         <Route path="*" element={<Error />} />
//       </Route>

//     </Routes>
//   </BrowserRouter>
// }

// export default App;



import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from './pages/SharedProductLayout'
function App() {

  const [user, setUser] = useState(null)

  return <BrowserRouter>
    <Routes>

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path='products' element={<SharedProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>

        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="dashboard" element={
          <ProtectedRoute user={user}>
            <Dashboard user={user} />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Error />} />
      </Route>

    </Routes>
  </BrowserRouter>
}

export default App;