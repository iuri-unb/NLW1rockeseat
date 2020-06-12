import Knex from 'knex';

export async function seed(knex: Knex) {
    // Inserindo na tabela usando knex: knex("nome_tabela").insert([{campo: "dados", campo2: "dados"}])  pode colocar varios usando {}, {} ...
    await knex("items").insert([ 
        { title: "Lampâdas", image: "lampadas.svg"},
        { title: "Pilhas e Baterias", image: "baterias.svg"},
        { title: "Papéis e Papelão", image: "papeis-papelao.svg"},
        { title: "Residuos Eletrônicos", image: "eletronicos.svg"},
        { title: "Residuos Orgânicos", image: "organicos.svg"},
        { title: "Óleo de Cozinha", image: "oleo.svg"},
    ]);
}