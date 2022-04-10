export function fireAnalyticsEvent<T extends `level-start-${number}` | `level-complete-${number}`>(
    name: T
) {
    return fetch('/data?event=' + name);
}
