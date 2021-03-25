function truncate(str) {
  return str.length > 10 ? str.substring(0, 13) + "..." : str;
}

export default truncate;
