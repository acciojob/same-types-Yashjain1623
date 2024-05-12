
function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
    
    // Check if both values have the same type
    return typeof value1 === typeof value2;
}