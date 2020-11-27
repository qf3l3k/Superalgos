exports.newSuperalgosUtilitiesMiscellaneousFunctions = function () {

    let thisObject = {
        genereteUniqueId: genereteUniqueId,
        truncateToThisPrecision: truncateToThisPrecision
    }

    return thisObject

    function genereteUniqueId () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        })
    }

    function truncateToThisPrecision(floatNumber, precision) {
        return parseFloat(floatNumber.toFixed(precision))
    }
}