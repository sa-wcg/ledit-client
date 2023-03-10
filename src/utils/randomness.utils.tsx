export const generateRandomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};

export const generateRandomInteger = (min: number, max: number): number => {
    return Math.floor(generateRandomNumber(min, max));
};
