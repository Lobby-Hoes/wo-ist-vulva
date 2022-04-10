import { timeout } from './timeout';

export function preloadAssets(preloadSrcs: string[]) {
    const imgSrcs = preloadSrcs.filter(isImage);
    const audioSrcs = preloadSrcs.filter(isAudio);

    return awaitPromisesWithTimeout([
        ...imgSrcs.map((src) => preload(src, Image)),
        ...audioSrcs.map((src) => preload(src, Audio))
    ]);
}

async function preload(src: string, constructor: typeof Audio | typeof Image) {
    const asset = new constructor();

    return new Promise<string>((resolve, reject) => {
        asset.oncanplaythrough = () => resolve(src);
        asset.onload = () => resolve(src);
        asset.onabort = () => reject();
        asset.src = src;
    });
}

function isAudio(src: string) {
    return /\.(?:wav|mp3)/.test(src);
}

function isImage(src: string) {
    return /\.(?:png|jpg)/.test(src);
}

async function awaitPromisesWithTimeout(promises: Promise<unknown>[]) {
    for (const promise of promises) {
        await promise;
        await timeout(1);
    }
}
