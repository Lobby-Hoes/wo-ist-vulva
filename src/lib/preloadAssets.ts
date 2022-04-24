import { timeout } from './timeout';
import { assetUrls } from './stores';

export function preloadAsset(preloadSrc: string) {
    return preloadAssets([preloadSrc]).then((x) => x[0]);
}

export function preloadAssets(preloadSrcs: string[]) {
    const imgSrcs = preloadSrcs.filter(isImage);
    const audioSrcs = preloadSrcs.filter(isAudio);

    return awaitPromisesWithTimeout([
        ...imgSrcs.map((src) => load(src)),
        ...audioSrcs.map((src) => load(src))
    ]);
}

function load(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.onerror = () => reject('Network error');
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const oUrl = URL.createObjectURL(xhr.response);
                    resolve(oUrl);
                    assetUrls.update((assetUrls) => {
                        assetUrls[url] = oUrl;
                        return assetUrls;
                    });
                } else {
                    reject('Failed to load ' + url + ':' + xhr.statusText);
                }
            };
            xhr.send();
        } catch (err) {
            reject(err.message);
        }
    });
}

function isAudio(src: string) {
    return /\.(?:wav|mp3)/.test(src);
}

function isImage(src: string) {
    return /\.(?:png|jpg)/.test(src);
}

async function awaitPromisesWithTimeout(promises: Promise<string>[]) {
    const results: string[] = [];

    for (const promise of promises) {
        results.push(await promise);
        await timeout(1);
    }

    return results;
}
