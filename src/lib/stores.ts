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

// usages of screensize depend on the first image beeing loaded.
// screenSize returns initially empty values, after the first image is loaded the window size is returned.
export const screenSize = derived(
    [windowSize, firstBackgroundSize],
    ([$windowSize, $firstBackgroundSize]) => {
        if ($firstBackgroundSize) {
            return { x: $windowSize.x, y: $windowSize.y };
        }

        return { x: 0, y: 0 };
    }
);

const MOBILE_MAX_WIDTH = 800;

export const isMobile = derived(windowSize, ($windowSize) => $windowSize.x <= MOBILE_MAX_WIDTH);

export const assetUrls = writable<Record<string, string>>({});
