/**
 * 检查是否为 ArrayBuffer 对象
 * @param value 要检查的值
 * @example
 *
 * isArrayBuffer(new ArrayBuffer(2));
 * // => true
 *
 * isArrayBuffer(new Array(2));
 * // => false
 */
export declare function isArrayBuffer(value: any): boolean;