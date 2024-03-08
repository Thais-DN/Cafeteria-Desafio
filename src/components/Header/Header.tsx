import { MapPin, ShoppingCart } from "@phosphor-icons/react";

function Header() {
    return (
        <div className="flex justify-between mx-40 my-8">
            <div>
                <img
                    src="assents/Logo.svg"
                    alt="logo: copo de café com tampa e nome da empresa ao lado"
                />
            </div>
            <div className="flex space-x-3">
                <div className="flex items-center gap-1 p-2 bg-purple-Light rounded-lg">
                    <MapPin size={22} className="text-purple-normal" />
                    <span className="text-purple-Dark">Santos, SP</span>
                </div>
                <div className="p-2 bg-yellow-Light rounded-lg">
                    <ShoppingCart size={22} className="text-yellow-Dark" />
                </div>
            </div>
        </div>
    );
}

export default Header;
