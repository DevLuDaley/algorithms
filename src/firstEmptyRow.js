const firstEmptyRow = (names) => names.filter((row) => row.join('') !== '');

const names = [['Jim', 'John', 'Mary', 'Edward'], ['Larry', 'Dan', 'Jackie', 'Samuel'], ['', '', '', ''], ['', '', '', '']];
firstEmptyRow(names);

// names.filter((row) => !row.every((name) => name === ''));
