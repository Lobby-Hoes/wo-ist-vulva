import { writable, derived } from 'svelte/store';
import { calcInnerRect } from './calcInnerRect';

export const windowWidth = writable(0);
export const windowHeight = writable(0);

export const windowSize = derived([windowWidth, windowHeight], ([$windowWidth, $windowHeight]) => ({
    x: $windowWidth,
    y: $windowHeight
}));

export const calcPlaygroundSize = derived(
    windowSize,
    ($windowSize) => (imgWidth: number, imgHeight: number) =>
        calcInnerRect($windowSize, { x: imgWidth, y: imgHeight })
);

const MOBILE_MAX_WIDTH = 800;

export const isMobile = derived(windowSize, ($windowSize) => $windowSize.x <= MOBILE_MAX_WIDTH);
