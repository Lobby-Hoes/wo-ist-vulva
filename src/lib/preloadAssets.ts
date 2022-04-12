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
        const onLoad = () => {
            resolve(src);
            asset.removeEventListener('canplaythrough', onLoad);
            asset.removeEventListener('load', onLoad);
        };

        asset.addEventListener('canplaythrough', onLoad);
        asset.addEventListener('load', onLoad);

        const onError = (e) => {
            reject(`failed to load ${src}`);
            console.error(e);
            asset.removeEventListener('error', onError);
            asset.removeEventListener('abort', onError);
        };

        asset.addEventListener('error', onError);
        asset.addEventListener('abort', onError);

        asset.src = src;

        if ('load' in asset) (asset as any).load();
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
