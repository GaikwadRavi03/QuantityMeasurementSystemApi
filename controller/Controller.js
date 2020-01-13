service = require('../services/Services')

class Controller {

    constructor(unit, value) {
        this.value = value;
        this.unit = unit;
    }

    compare(req, res, next) {
        let data = {
            unitType: req.body.unitType,
            unit: req.body.unit,
            value: req.body.value,
            convertingUnit: req.body.convertingUnit,
            convertingValue: req.body.convertingValue
        }
        if (data.unitType == 'length') {
            res.send(service.compare(data))
        }else if (data.unitType == 'volume') {
            res.send(service.compare(data))
        }
    }

}

module.exports = new Controller();