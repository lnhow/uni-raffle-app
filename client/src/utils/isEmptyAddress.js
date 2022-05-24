export default function isEmptyAddress(address = '') {
  return /^0x0+$/.test(address);
};
