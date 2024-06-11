import React from "react";
import Header from "../Header/Header";
import { MapPin, CreditCard, Bank, Money, CurrencyEur, CurrencyDollar, Trash } from "@phosphor-icons/react";
import Selector from "../Card/Selector";

const ShoppingCart: React.FC = () => {
  return (
    <div className="mx-40 mb-10">
      <Header />
      <h1 className="text-2xl font-bold my-5">Complete seu pedido</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 bg-gray-100 p-5 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <MapPin size={24} className="text-yellow-Dark mr-2" />
            <h3 className="text-lg font-semibold">Endereço de Entrega</h3>
          </div>
          <p className="mb-5 text-gray-700">Informe o endereço onde deseja receber seu pedido</p>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="CEP" className="border rounded-lg p-2" />
            <input type="text" placeholder="Rua" className="border rounded-lg p-2 col-span-2" />
            <input type="text" placeholder="Número" className="border rounded-lg p-2" />
            <input type="text" placeholder="Complemento (Opcional)" className="border rounded-lg p-2" />
            <input type="text" placeholder="Bairro" className="border rounded-lg p-2" />
            <input type="text" placeholder="Cidade" className="border rounded-lg p-2" />
            <input type="text" placeholder="UF" className="border rounded-lg p-2" />
          </div>
          <div className="mt-10">
            <div className="flex items-center mb-4">
              <CurrencyDollar size={24} className="text-purple-500 mr-2" />
              <h3 className="text-lg font-semibold">Pagamento</h3>
            </div>
            <p className="mb-5 text-gray-700">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            <div className="flex gap-4">
              <button className="flex items-center bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
                <CreditCard size={24} className="text-purple-500 mr-2" /> CARTÃO DE CRÉDITO
              </button>
              <button className="flex items-center bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
                <Bank size={24} className="text-purple-500 mr-2" /> CARTÃO DE DÉBITO
              </button>
              <button className="flex items-center bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
                <Money size={24} className="text-purple-500 mr-2" /> DINHEIRO
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Cafés selecionados</h3>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src="/assets/expresso-cremoso.png" alt="Expresso Tradicional" className="w-16 h-16 rounded-lg mr-4" />
              <div>
                <h4 className="text-md font-semibold">Expresso Tradicional</h4>
                <p className="text-gray-700">R$ 9,90</p>
              </div>
            </div>
            <div className="flex items-center">
              <Selector />
                <div className="flex">
                    <Trash />
                    <button className="ml-2 text-red-500">REMOVER</button>
                </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src="/assets/latte.png" alt="Latte" className="w-16 h-16 rounded-lg mr-4" />
              <div>
                <h4 className="text-md font-semibold">Latte</h4>
                <p className="text-gray-700">R$ 19,80</p>
              </div>
            </div>
            <div className="flex items-center">
              <Selector />
              <div className="flex">
                    <Trash />
                    <button className="ml-2 text-red-500">REMOVER</button>
            </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
            <button className="w-full mt-4 bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600">
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
