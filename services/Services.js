units = require('./Unit')

class Services {
    compare(data) {
        let result1, result2, measurementUnit;
        console.log(data.unitType)
        if (data.unitType == 'length') {
            measurementUnit = units.length;
        } else if (data.unitType == 'volume') {
            measurementUnit = units.volume;
        }
        for (let i = 0; i < measurementUnit.length; i++) {
            if (data.unit == measurementUnit[i].unitType) {
                result1 = (measurementUnit[i].value * data.value);
            }
        }

        for (let i = 0; i < measurementUnit.length; i++) {
            if (data.convertingUnit == measurementUnit[i].unitType) {
                result2 = (measurementUnit[i].value * data.convertingValue);
            }
        }
        return result1 == result2
    }
}

module.exports = new Services();