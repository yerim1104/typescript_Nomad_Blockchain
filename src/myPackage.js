// @ts-check

//jsDoc 쓰는법
// /**를 치면 jsdoc이라는 자동완성이 뜰 것이다!

/**
 * 프로젝트를 초기화한다
 *
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */

//타입스크립트가 위의 코멘트를 읽고 js파일을 체킹해줄 것이다.

export function init(config) {
  return true;
}

/**
 * 프로그램을 끝낸다
 *
 * @param {number} code
 * @returns number
 */

export function exit(code) {
  return code + 1;
}
