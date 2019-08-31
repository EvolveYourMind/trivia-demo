/**
 * Insert v in a random position of arr and return it
 * @param {readonly T[]} arr
 * @param {T} v
 * @return {T[]}
 *
 * @template T
 */
export function randomConcat(arr, v) {
    const idx = parseInt(Math.random() * (arr.length + 1));
    return arr.slice(0, idx).concat(v).concat(arr.slice(idx));
}
