const ndn = require("neural-data-normalizer")
const sampleData = [
{ "soilhumidity": 500, "airtemp": 32, "airhum": 18, "water": true, "plants": ["tomatoes", "potatoes", "french fries"] },
{ "soilhumidity": 1050, "airtemp": 40, "airhum": 21, "water": true, "plants": ["potatoes", "asparagus"] },
{ "soilhumidity": 300, "airtemp": 100, "airhum": 90, "water": false, "plants": ["asparagus", "tomatoes"] },
{ "soilhumidity": 950, "airtemp": 103, "airhum": 26, "water": true, "plants": ["asparagus", "asparagus"] },
{ "soilhumidity": 1050, "airtemp": 8, "airhum": 26, "water": true, "plants": ["tomatoes", "tomatoes"] },
{ "soilhumidity": 1050, "airtemp": 8, "airhum": 26, "water": false, "plants": ["cucumber", "tomatoes"] },
{ "soilhumidity": 1050, "airtemp": 8, "airhum": 26, "water": true, "plants": ["cucumber", "tomatoes"] },
{ "soilhumidity": 1200, "airtemp": 8, "airhum": 26, "water": false, "plants": ["banana", "tomatoes", "banana"] },
{ "soilhumidity": 1050, "airtemp": 8, "airhum": 26, "water": true, "plants": ["cucumber", "tomatoes"] },
{ "soilhumidity": 1050, "airtemp": 8, "airhum": 26, "water": false, "plants": ["cucumber", "tomatoes"] },
{ "soilhumidity": 1050, "airtemp": 8, "airhum": 26, "water": true, "plants": ["tomatoes", "tomatoes"] },
{ "soilhumidity": 1050, "airtemp": 56, "airhum": 26, "water": true, "plants": ["potatoes", "french fries"] }
]


const normalizer = new ndn.Normalizer(sampleData);

// setting required options and normalize the data
normalizer.setOutputProperties(['water']);
normalizer.normalize();

// find useful information about your data
// to pass to your neural network
const nbrInputs = normalizer.getInputLength();
const nbrOutputs = normalizer.getOutputLength();

const metadata = normalizer.getDatasetMetaData();
const inputs = normalizer.getBinaryInputDataset();
const outputs = normalizer.getBinaryOutputDataset();

console.log(nbrInputs);
console.log(nbrOutputs);
console.log(metadata);
console.log(inputs);
console.log(outputs);