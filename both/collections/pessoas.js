Pessoas = new Mongo.Collection("Pessoas");

Pessoas.attachSchema(new SimpleSchema({
  nome: {
    type: String,
    label: "Nome completo",
    optional: false
  },
  dataNascimento: {
    type: Date,
    label: "Data de Nascimento"
  },
  tipo: {
    type: String,
    label: "Tipo de Cliente",
    allowedValues: ["FUNCIONARIO", "FORNECEDOR"],
    optional: false,
    autoform: {
      options: [
        {label: "Cliente comum", value: "COMUM"},
        {label: "Funcionário", value: "FUNCIONARIO"},
        {label: "Fornecedor", value: "FORNECEDOR"}
      ]
    }
  },
  cpf: {
    label: "CPF",
    type: String,
    max: 14,
    min: 14,
    optional: false,
    regEx: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
		optional: false,
		autoform: {
			type: "masked-input",
      mask: "000.000.000-00",
      maskOptions: {
      	placeholder: "___.___.___-__"
      }
    }
  },
  cnpj: {
    label: "CNPJ",
    type: String,
    max: 18,
    min: 18,
    optional: false,
    regEx: /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/,
		optional: false,
		autoform: {
			type: "masked-input",
      mask: "00.000.000/0000-00",
      maskOptions: {
      	placeholder: "__.___.___/____-__"
      }
    }
  },
  telefone: {
    type: String,
    label: "Telefone para contato",
    optional: false,
    autoform: {
      type: "masked-input",
      mask: "(00)00000-0000",
      maskOptions: {
        placeholder: "(__)_____-____"
      }
    }
  },
  endereco: {
    type: SchemaEndereco,
    label: "Informações de moradia",
    optional: false
  }
}));

Pessoas.allow({
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
