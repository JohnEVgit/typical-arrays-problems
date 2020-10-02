exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return array.reduce((prev, current) => prev < current ? prev : current);
};

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return array.reduce((prev, current) => prev > current ? prev : current);
};

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return array.reduce((sum, current) => sum + current) / array.length;
};
