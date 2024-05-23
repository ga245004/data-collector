import colors from "tailwindcss/colors";

const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

const isNotAllowed = (color: string) => {
    if (!color.match(/^[a-z]+$/)) return true;
    const unAllowed = ["black", "white", "inherit", "current", "transparent"];
    if (unAllowed.includes(color)) return true;

    return false;
};

const Intensities = Array.from({ length: 9 }).map((_, i) => {
    return (i + 1) * 100
})

console.log(Intensities)

const Directions = ["tl", "t", "tr", "l", "r", "bl", "b", "br"];

export const getRandomColor = (prevColor = "") => {
    const allColors = Object.keys(colors);
    const color = getRandomItem(allColors);
    return isNotAllowed(color) || prevColor === color
        ? getRandomColor(prevColor)
        : color;
};

export const getGradient = (
    firstColor: string,
    secondColor: string,
    intensity = 300,
    direction = "br"
) => {
    return `bg-gradient-to-${direction} from-${firstColor}-${intensity} to-${secondColor}-${intensity}`;
};

export const getRandomGradient = ({
    intensity = getRandomItem(Intensities),
    direction = getRandomItem(Directions)
} = {
        intensity: getRandomItem(Intensities),
        direction: getRandomItem(Directions)
    }) => {
    const firstColor = getRandomColor();
    const secondColor = getRandomColor(firstColor);

    return getGradient(firstColor, secondColor, intensity, direction)
}