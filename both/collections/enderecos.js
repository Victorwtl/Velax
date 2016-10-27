SchemaEndereco = new SimpleSchema({
  tipoLogradouro: {
    label: 'Tipo de Logradouro',
    type: String,
    optional: false,
    allowedValues: ["ALM","AVN","BEC","BLV","CAM","CAS","CMP","ESC","ETR",
                    "FAV","FAZ","FLT","ILH","JRD","LAD","LRG","LTM","LUG",
                    "MRR","PQE","PAS","PRA","PRC","REC","ROD","RUA","SRV",
                    "TRV","VIA","VIL"],
    autoform: {
      options: [
        {label: "ALAMEDA"	,value: "ALM"},
        {label: "AVENIDA"	,value: "AVN"},
        {label: "BECO"	,value: "BEC"},
        {label: "BOULEVARD"	,value: "BLV"},
        {label: "CAMINHO"	,value: "CAM"},
        {label: "CAIS"	,value: "CAS"},
        {label: "CAMPO"	,value: "CMP"},
        {label: "ESCADA"	,value: "ESC"},
        {label: "ESTRADA"	,value: "ETR"},
        {label: "FAVELA"	,value: "FAV"},
        {label: "FAZENDA"	,value: "FAZ"},
        {label: "FLORESTA"	,value: "FLT"},
        {label: "ILHA"	,value: "ILH"},
        {label: "JARDIM"	,value: "JRD"},
        {label: "LADEIRA"	,value: "LAD"},
        {label: "LARGO"	,value: "LRG"},
        {label: "LOTEAMENTO"	,value: "LTM"},
        {label: "LUGAR"	,value: "LUG"},
        {label: "MORRO"	,value: "MRR"},
        {label: "PARQUE"	,value: "PQE"},
        {label: "PASSEIO"	,value: "PAS"},
        {label: "PRAIA"	,value: "PRA"},
        {label: "PRAÇA"	,value: "PRC"},
        {label: "RECANTO"	,value: "REC"},
        {label: "RODOVIA"	,value: "ROD"},
        {label: "RUA"	,value: "RUA"},
        {label: "SERVIDAO"	,value: "SRV"},
        {label: "TRAVESSA"	,value: "TRV"},
        {label: "VIA"	,value: "VIA"},
        {label: "VILA"	,value: "VIL"}
      ]
    }
  },
 logradouro: {
   label: 'Logradouro',
   type: String,
   optional: false
 },
 bairro: {
   label: 'Bairro',
   type: String,
   optional: true
 },
 estado: {
   label: 'Estado (UF)',
   type: String
 },
 cidade: {
   label: 'Cidade',
   type: String
 },
 numero: {
   label: 'Número',
   type: String
 }
});
