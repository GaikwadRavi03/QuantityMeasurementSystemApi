units = require('./Unit')

class Services {
    compare(data) {
        let result1, result2;
        for (let i = 0; i < units.length.length; i++) {
            if (data.unit == units.length[i].unitType) {
                result1 = (units.length[i].value * data.value);
            }
        }

        for (let i = 0; i < units.length.length; i++) {
            if (data.convertingUnit == units.length[i].unitType) {
                result2 = (units.length[i].value * data.convertingValue);
            }
        }
        return result1 == result2
    }
}

module.exports = new Services();