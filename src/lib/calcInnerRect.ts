export function calcInnerRect(
    outerSize: { x: number; y: number },
    innerSize: { x: number; y: number }
) {
    const innerAspectRatio = innerSize.x / innerSize.y;
    const outerAspectRatio = outerSize.x / outerSize.y;

    const resizeFactor =
        innerAspectRatio >= outerAspectRatio
            ? outerSize.x / innerSize.x
            : outerSize.y / innerSize.y;

    const newWidth = innerSize.x * resizeFactor;
    const newHeight = innerSize.y * resizeFactor;

    return { x: newWidth, y: newHeight };
}
