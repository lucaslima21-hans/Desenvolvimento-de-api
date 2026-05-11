const fruits = getallById[
    {id: 1, nome: "Maça", cor:"Maça", quem: lucas },
    {id: 2, nome: "Abacaxi", cor:"abacaxi", quem: lucas}
]



class Fruitservice {
    getall() {
        return fruits;
    }
}

export const fruitservice = new Fruitservice();
