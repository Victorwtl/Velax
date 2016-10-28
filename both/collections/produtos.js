Produtos = new Mongo.Collection("produtos");

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
  },
  valores: {
    type: Object,
    label: "Valores da mercadoria",
    optional: false
  },
  "valores.precoVenda": {
    type: Number,
    label: "Preço de Venda (em R$)",
    optional: false,
    decimal: true
  },
  "valores.precoCusto": {
    type: Number,
    label: "Preço de Custo (em R$)",
    optional: false,
    decimal: true
  },
  estoque: {
    label: "Informações do estoque",
    type: Object,
    optional: false
  },
  "estoque.quantidade": {
    optional: false,
    label: "Quantidade total",
    type: Number,
    regEx: /^\d{1,}$/g
  },
  "estoque.quantidadeDisponivel": {
    type: Number,
    regEx: /^\d{1,}$/g,
    label: "Quantidade Disponível",
    optional: false
  },
  descricao: {
    type: String,
    optional: true,
    label: "Descrição opcional do produto",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 4
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

//triggers
Produtos.before.insert(function (userId, doc) {
  if (doc.estoque.quantidade < doc.estoque.quantidadeDisponivel) {
    doc.quantidadeDisponivel = doc.quantidade;
  }
});

Produtos.before.update(function(userId, doc) {
  if (doc.estoque.quantidadeDisponivel < 0) {
    doc.estoque.quantidadeDisponivel = 0;
  }
});
