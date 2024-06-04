import { ShoppingCart } from "@phosphor-icons/react";
import Selector from "./Selector";
import { CoffeeInterface } from "../../data";

interface CardProps {
    coffee: CoffeeInterface;
}

function Card({ coffee }: CardProps) {
    return (
        <div className="w-64 h-80 bg-base-200 flex flex-col items-center p-5 rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm">
            <div className="-mt-10">
                <img src={coffee.imageURL} alt="" />
            </div>
            <div className="flex space-x-2">
                {coffee.category.map((categoryName) => {
                    return (
                        <div
                            key={categoryName}
                            className="rounded-full bg-yellow-Light text-yellow-Dark text-xs my-3 p-1"
                        >
                            <span className="font-semibold">
                                {categoryName}
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-base-800 text-lg font-bold">
                    {coffee.title}
                </h2>
                <p className="text-base-600 my-2">{coffee.description}</p>
            </div>
            <footer className="w-full flex justify-between mt-5">
                <div className="space-x-1">
                    <span className="text-base-600 text-sm">R$</span>
                    <span className="text-base-700 text-xl font-bold">
                        {coffee.price}
                    </span>
                </div>
                <div className="flex gap-2">
                    <Selector />
                </div>
                <div className="p-2 bg-purple-Dark text-base-50 rounded-lg flex items-center">
                    <ShoppingCart />
                </div>
            </footer>
        </div>
    );
}

export default Card;
