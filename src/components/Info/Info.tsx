import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

function Info() {
    return (
        <div className="flex justify-between items-center my-20">
            <div className="w-[588] space-y-8">
                <div className="space-y-4">
                    <h1 className="font-extrabold text-4xl">
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p className="text-lg">
                        Com o Coffee Delivery você recebe seu café onde estiver,
                        a qualquer hora
                    </p>
                </div>
                <div className="space-y-5">
                    <div className="flex gap-10">
                        <div className="flex items-center space-x-2 gap-1 text-base">
                            <ShoppingCart
                                size={32}
                                className="rounded-full p-1 bg-yellow-Dark text-base-50"
                            />
                            <span>Compra simples e segura</span>
                        </div>
                        <div className="flex items-center space-x-2 gap-1 text-base">
                            <Package
                                size={32}
                                className="rounded-full p-1 bg-base-700 text-base-50"
                            />
                            <span>Embalagem mantém o café intacto</span>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex items-center space-x-2 gap-1 text-base">
                            <Timer
                                size={32}
                                className="rounded-full p-1 bg-yellow-normal text-base-50"
                            />
                            <span>Entrega rápida e rastreada</span>
                        </div>
                        <div className="flex items-center space-x-2 gap-1 text-base">
                            <Coffee
                                size={32}
                                className="rounded-full p-1 bg-purple-normal text-base-50"
                            />
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img
                    src="public/assents/imagem.png"
                    alt="Copo de café com tampa, com grão de café e café moído de fundo"
                />
            </div>
        </div>
    );
}

export default Info;
