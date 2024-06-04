import React, { useState } from 'react';

const Selector: React.FC = () => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    return (
        <div className="relative flex items-center max-w-20">
            <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                className="bg-base-500 rounded-s-lg p-3 h-9"
                onClick={handleDecrement}
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                    />
                </svg>
            </button>
            <input
                type="text"
                id="quantity-input"
                data-input-counter
                aria-describedby="helper-text-explanation"
                className="bg-base-500 h-9 text-center text-base-800 placeholder:text-base-800 text-sm block w-4 py-2.5"
                value={quantity}
                readOnly
            />
            <button
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                className="bg-base-500 rounded-e-lg p-3 h-9"
                onClick={handleIncrement}
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                    />
                </svg>
            </button>
        </div>
    );
}

export default Selector;
