/**
 * Trim long address
 * @param {string} address The address to trim
 * @param {*} first How many characters to retain from start of string
 * @param {*} last How many characters to retain from end of string
 * @returns {string} trimmed address
 */
export default function trimAddress(address = '', first = 6, last = 4) {
  if (address.length <= (first + last)) {
    return address;
  }

  return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`
}
