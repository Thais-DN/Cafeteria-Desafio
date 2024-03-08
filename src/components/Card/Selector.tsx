function Selector() {
    return (
        <div className="relative flex items-center max-w-20">
            <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                className="bg-base-500 rounded-s-lg p-3 h-9 "
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
                className="bg-base-500 h-9 text-center text-base-800 placeholder:text-base-800 text-sm block w-full py-2.5"
                placeholder="1"
                required
            />
            <button
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                className="bg-base-500 rounded-e-lg p-3 h-9 "
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
    );
}

export default Selector;
