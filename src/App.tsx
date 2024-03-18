import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import { COFFEE_LIST } from "./data";

function App() {
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

export default App;
