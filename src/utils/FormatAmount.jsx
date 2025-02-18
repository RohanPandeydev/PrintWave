function FormatAmount(number) {
    return Number(number).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

export default FormatAmount;
