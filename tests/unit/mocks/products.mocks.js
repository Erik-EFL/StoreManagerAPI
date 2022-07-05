const data = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  }
];

const editado = { affectedRows: 1, product: { id: 1, name: 'Martelo do Batman' } }

const excluído = {
  //
}


module.exports = { data, editado, excluído };
