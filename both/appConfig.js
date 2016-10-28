AdminConfig = {
	name: "Velax",
	skin: "green",
	collections: {
		Pessoas: {
			icon: "smile-o",
			color: "red",
			tableColumns: [
				{label: "Nome da pessoa", name: "nome"},
				{
					label: "Classificação",
					name: "tipo",
					render: function(val, type, doc) {
						if (val == "FUNCIONARIO") {
							return "Funcionário";
						}
						if (val == "FORNECEDOR") {
							return "Fornecedor";
						}
						return "Cliente";
					}
				}
			]
		},
		Produtos: {
			icon: 'cubes',
			color: "purple",
			extraFields: ['fornecedor'],
			tableColumns: [
				{label: "Nome do produto", name: 'nome'},
				{
					label: "Fornecedor",
					name: "nomeFornecedor()"
				}
			]
		}
	}
}
