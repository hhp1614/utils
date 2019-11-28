import { getTag } from './_internal/getTag';
import { isObjectLike } from './isObjectLike';

/**
 * 检查是否为时间
 * @param value 要检查的值
 * @example
 *
 * isDate(new Date);
 * // => true
 *
 * isDate('Wed Nov 27 2019');
 * // => false
 */
export function isDate(value: any): boolean {
  return isObjectLike(value) && getTag(value) === '[object Date]';
}