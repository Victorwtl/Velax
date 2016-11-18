EntradasProduto = new Mongo.Collection("entradasproduto");

EntradasProduto.helpers({
  dataEntrada: function() {
    if (this.dataEntrada) {
      return moment(this.dataEntrada).format('LLL');
    } else {
      return "Não informado (ERROR)"
    }
  },
  nomeProduto: function() {
    if (this.produto) {
      return Produtos.findOne(this.produto).nome;
    } else {
      return "Não informado (ERROR)"
    }
  },
  nomeFornecedor: function() {
    if (this.fornecedor) {
      return Pessoas.findOne(this.fornecedor).nome;
    } else {
      return "Não informado (ERROR)"
    }
  }
});

EntradasProduto.attachSchema(new SimpleSchema({
    produto: {
      type: String,
      optional: false,
      label: "Produto que está entrando",
      autoform: {
        type: "select2",
        options: function () {
          let valores = [];
          let pessoas = Produtos.find();
          pessoas.forEach((pessoa)=> {
            valores.push({label: pessoa.nome, value: pessoa._id});
          });
          return valores;
        }
      }
    },
    dataEntrada: {
      type: Date,
      label: "Data da entrada do produto",
      autoform: {
       afFieldInput: {
         type: "bootstrap-datetimepicker"
       }
     }
    },
    quantidade: {
      type: Number,
      label: "Quantidade recebida",
      min: 1
    }
}));

EntradasProduto.before.insert(function(userId, doc) {
  // achou que ia ferrar com meu estoque, otario?
  if (doc.quantidade < 0) {
    console.log("Achou que ia ferrar com o meu estoque? Aqui não.");
    doc.quantidade = 0;
  }
});

EntradasProduto.after.insert(function(userId, doc) {
  if (_.has(doc, "produto")) {
    let quantidadeDisponivel = Produtos.findOne(doc.produto).estoque.quantidadeDisponivel;
    quantidadeDisponivel += doc.quantidade;
    Produtos.update({_id:doc.produto}, {$set:{
      "estoque.quantidadeDisponivel": quantidadeDisponivel
    }});
  }
});

EntradasProduto.after.remove(function(userId, doc){
  if (_.has(doc, "produto") && _.has(doc, "quantidade")) {
    let produto = Produtos.findOne(doc.produto);
    if ((produto.quantidadeDisponivel - doc.quantidade) >= 0) {
      let val = produto.quantidadeDisponivel - doc.quantidade;
      Produtos.update({_id: doc.produto}, {$set: {
        "estoque.quantidadeDisponivel" : val
      }});
    } else {
      Produtos.update({_id:doc.produto}, {$set:{
        "estoque.quantidadeDisponivel": 0
      }});

    }
  }
});
