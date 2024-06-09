import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import { COFFEE_LIST } from "./data";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"; // Importe a nova tela

function Home() {
    return (
        <div className="mx-40 mb-10">
            <Header />
            <Info />
            <div className="grid grid-cols-4 gap-5">
                {COFFEE_LIST.map((coffee) => (
                    <div key={coffee.id} className="col-span-1">
                        <Card coffee={coffee} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
            </Routes>
        </Router>
    );
}

export default App;
