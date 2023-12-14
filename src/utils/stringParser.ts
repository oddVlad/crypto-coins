export const numberAug = (num: string | number, fixed: number = 2): string =>
    Number(num).toFixed(fixed);


const NUMBER_FORMATS = [
    {
        value: 1e12,
        posfix: "t",
    },
    {
        value: 1e9,
        posfix: "b",
    },
    {
        value: 1e6,
        posfix: "m",
    },
    {
        value: 1e3,
        posfix: "k",
    },
];

export const priceFormater = (number: string | number): string => {
    const numeric = +number;
    const numFormat = NUMBER_FORMATS.find(format => numeric / format.value > 1);

    return numFormat ? numberAug(numeric / numFormat.value) + numFormat.posfix : numberAug(number, 2);
}

export const getCostDifference = (low: number, high: number) => {
    return (high - low) / low * 100
};