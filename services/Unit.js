const Length = [
    {unitType: 'FEET', value: 12},
    {unitType: 'INCH', value: 1},
    {unitType: 'YARD', value: 36},
    {unitType: 'CM', value: 0.4}
];
const Volume = [
    {unitType: 'ML', value: 1},
    {unitType: 'LITRE', value: 1000},
    {unitType: 'GALLON', value: 3785.41}
];
const Weight = [
    {unitType: 'GM', value: 1},
    {unitType: 'KG', value: 1000},
    {unitType: 'TONNE', value: 1000000},
]

module.exports = {
    length: Length,
    volume: Volume,
    weight: Weight
}