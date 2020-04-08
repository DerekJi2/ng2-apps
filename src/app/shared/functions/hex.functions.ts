/**
 * Convert number 0 to letter O to make the string looking like a binary, but also make sure the length is same.
 * @param hexNum HEX number
 * @param strLen number
 */
function hex2binstr(hexNum: number, strLen: number) {
  const replaceChar = 'O';
  const binNum = parseInt(hexNum.toString(), 16).toString(2).replace(/0/ig, replaceChar);
  let binstr = binNum;

  for (let i = 0; i < strLen - binNum.length ; i++ ) {
    binstr = replaceChar + binstr;
  }

  return binstr;
}
