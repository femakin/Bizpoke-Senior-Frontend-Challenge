function formatNumber(number: number) {
    if (Number.isInteger(number)) {
        // Number is an integer, add ".0"
        return number + 0.0;
    } else {
        // Number already has decimals, return as is
        return number;
    }
}

export default formatNumber;