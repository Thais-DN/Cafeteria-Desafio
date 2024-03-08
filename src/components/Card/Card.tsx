import { ShoppingCart } from "@phosphor-icons/react";

function Card() {
    return (
        <div className="w-64 h-80 bg-base-200 flex flex-col items-center p-5 rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm">
            <div className="-mt-10">
                <img src="/assents/Coffee.svg" alt="" />
            </div>
            <div className="rounded-full bg-yellow-Light text-yellow-Dark text-xs my-3 p-1">
                <span className="font-semibold">TRADICIONAL</span>
            </div>
            <h2 className="text-base-800 text-lg font-bold">
                Expresso Tradicional
            </h2>
            <p className="text-base-600 my-2">
                O tradicional café feito com água quente e grãos moídos
            </p>
            <footer className="w-full flex justify-between mt-5">
                <div className="space-x-1">
                    <span className="text-base-600">R$</span>
                    <span className="text-base-700 text-xl font-bold">
                        9,90
                    </span>
                </div>
                <div className="flex gap-2">
                    <div className="relative flex items-center max-w-20">
                        <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="quantity-input"
                            className="bg-base-500 rounded-s-lg p-3 h-9 focus:ring-purple-normal focus:ring-2 focus:outline-none"
                        >
                            <svg
                                className="w-3 h-3 text-purple-normal"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h16"
                                />
                            </svg>
                        </button>
                        <input
                            type="text"
                            id="quantity-input"
                            data-input-counter
                            aria-describedby="helper-text-explanation"
                            className="bg-base-500 h-9 text-center text-base-800 placeholder:text-base-800 text-sm focus:ring-purple-normal focus:border-puring-purple-normal block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1"
                            required
                        />
                        <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="quantity-input"
                            className="bg-base-500 rounded-e-lg p-3 h-9 focus:ring-purple-normal focus:ring-2 focus:outline-none"
                        >
                            <svg
                                className="w-3 h-3 text-purple-Dark"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="p-2 bg-purple-Dark text-base-50 rounded-lg flex items-center">
                        <ShoppingCart />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Card;
