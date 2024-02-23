function formatNumber(number: number) {
    if (Number.isInteger(number)) {
        return number + 0.0;
    } else {
        return number;
    }
}

export default formatNumber;