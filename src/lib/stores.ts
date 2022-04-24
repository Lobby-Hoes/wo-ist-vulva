import { writable, derived } from 'svelte/store';
import { calcInnerRect } from './calcInnerRect';

export const windowWidth = writable(0);
export const windowHeight = writable(0);

export const windowSize = derived([windowWidth, windowHeight], ([$windowWidth, $windowHeight]) => ({
    x: $windowWidth,
    y: $windowHeight
}));

export const playgroundSize = writable({ x: 0, y: 0 });

export const calcPlaygroundSize = derived(windowSize, ($windowSize) => {
    return (imgWidth: number, imgHeight: number) => {
        const size = calcInnerRect($windowSize, { x: imgWidth, y: imgHeight });
        playgroundSize.set(size);
        return size;
    };
});

export const firstBackgroundSize = writable<{ x: number; y: number }>();

export const initialPlaygroundSize = derived(
    [windowSize, firstBackgroundSize],
    ([$windowSize, $firstBackgroundSize]) => {
        const x = $firstBackgroundSize
            ? calcInnerRect($windowSize, $firstBackgroundSize)
            : { x: 0, y: 0 };
        console.log(x);

        return x;
    }
);

const MOBILE_MAX_WIDTH = 800;

export const isMobile = derived(windowSize, ($windowSize) => $windowSize.x <= MOBILE_MAX_WIDTH);

export const assetUrls = writable<Record<string, string>>({});
