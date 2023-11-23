export const numberAug = (num: string | number, fixed: number = 2): string =>
    Number(num).toFixed(fixed);

export const priceFormater = (number: string | number): string => {
    const numeric = +number;

    if (numeric / 1e12 > 1) {
        return numberAug(numeric / 1e12) + "t";
    }
    if (numeric / 1e9 > 1) {
        return numberAug(numeric / 1e9) + "b";
    }
    if (+number / 1e6 > 1) {
        return numberAug(numeric / 1e6) + "m";
    }
    if (+number / 1e3 > 1) {
        return numberAug(numeric / 1e3) + "k";
    }

    return numberAug(number, 2);
}

export const getCostDifference = (low: number, high: number) => {
    return (high - low) / low * 100
};