import { IPosition } from "../types/common";

export const getSpinElementPosition = (index: number, count: number): IPosition => {
    const angle = (index / count) * 2 * Math.PI;

    return {
        x: Math.cos(angle) * 250,
        y: Math.sin(angle) * 250,
    }
}