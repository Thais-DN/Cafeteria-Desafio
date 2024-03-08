export interface CoffeeInterface {
    id: number;
    title: string;
    description: string;
    imageURL: string;
    category: string[];
    price: string;
}

export const COFFEE_LIST: CoffeeInterface[] = [
    {
        id: 1,
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        imageURL: "/assets/expresso.png",
        category: ["TRADICIONAL"],
        price: "9,90",
    },
    {
        id: 2,
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        imageURL: "/assets/americano.png",
        category: ["TRADICIONAL"],
        price: "9,90",
    },
    {
        id: 3,
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        imageURL: "/assets/expresso-cremoso.png",
        category: ["TRADICIONAL"],
        price: "9,90",
    },
    {
        id: 4,
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        imageURL: "/assets/cafe-gelado.png",
        category: ["TRADICIONAL", "GELADO"],
        price: "9,90",
    },
    {
        id: 5,
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        imageURL: "/assets/cafe-leite.png",
        category: ["TRADICIONAL", "COM LEITE"],
        price: "9,90",
    },
    {
        id: 6,
        title: "Latte",
        description:
            "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        imageURL: "/assets/latte.png",
        category: ["TRADICIONAL", "COM LEITE"],
        price: "9,90",
    },
    {
        id: 7,
        title: "Capuccino",
        description:
            "Bebida com canela feita de doses iguais de café, leite e espuma",
        imageURL: "/assets/capuccino.png",
        category: ["TRADICIONAL", "COM LEITE"],
        price: "9,90",
    },
    {
        id: 8,
        title: "Macchiato",
        description:
            "Café expresso misturado com um pouco de leite quente e espuma",
        imageURL: "/assets/macchiato.png",
        category: ["TRADICIONAL", "COM LEITE"],
        price: "9,90",
    },
    {
        id: 9,
        title: "Mocaccino",
        description:
            "Café expresso com calda de chocolate, pouco leite e espuma",
        imageURL: "/assets/mochaccino.png",
        category: ["TRADICIONAL", "COM LEITE"],
        price: "9,90",
    },
    {
        id: 10,
        title: "Chocolate Quente",
        description:
            "Bebida feita com chocolate dissolvido no leite quente e café",
        imageURL: "/assets/chocolate-quente.png",
        category: ["ESPECIAL", "COM LEITE"],
        price: "9,90",
    },
    {
        id: 11,
        title: "Cubano",
        description: "O tradicional café feito com água quente e grãos moídos",
        imageURL: "/assets/cubano.png",
        category: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
        price: "9,90",
    },
    {
        id: 12,
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        imageURL: "/assets/havaiano.png",
        category: ["ESPECIAL"],
        price: "9,90",
    },
    {
        id: 13,
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        imageURL: "/assets/arabe.png",
        category: ["ESPECIAL"],
        price: "9,90",
    },
    {
        id: 14,
        title: "Irlandês",
        description:
            "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        imageURL: "/assets/Irlandes.png",
        category: ["ESPECIAL", "ALCOÓLICO"],
        price: "9,90",
    },
];
