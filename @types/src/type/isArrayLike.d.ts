/**
 * 检查是否为类数组
 * @param value 要检查的值
 * @example
 *
 * isArrayLike([1, 2, 3]);
 * // => true
 *
 * isArrayLike(document.body.children);
 * // => true
 *
 * isArrayLike('abc');
 * // => true
 *
 * isArrayLike(Function);
 * // => false
 */
export declare function isArrayLike(value: any): boolean;