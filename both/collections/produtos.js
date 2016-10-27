Produtos = new Mongo.Collection("Produtos");

Produtos.helpers({
  nomeFornecedor: function() {
    if (this.fornecedor) {
      return Pessoas.findOne(this.fornecedor).nome;
    } else {
      return "Não informado";
    }
  }
});

Produtos.attachSchema(new SimpleSchema({
  nome: {
    type: String,
    label: "Nome detalhado",
    optional: false
  },
  fornecedor: {
    type: String,
    label: "Fornecedor",
    optional: false,
    autoform: {
      type: "select2",
      options: function () {
        let valores = [];

        Pessoas.find({tipo: "FORNECEDOR"}).forEach((pessoa) => {
          valores.push({label: pessoa.nome, value: pessoa._id});
        });

        return valores;
      }
    }
  }

}));

Produtos.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
