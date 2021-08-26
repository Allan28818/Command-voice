function verifyIfThereIsAKeyValue(arrayToSearch, searchTerm) {
  return arrayToSearch.some(
    (arraySentence) => arraySentence === searchTerm.toLowerCase()
  );
}

export { verifyIfThereIsAKeyValue };
