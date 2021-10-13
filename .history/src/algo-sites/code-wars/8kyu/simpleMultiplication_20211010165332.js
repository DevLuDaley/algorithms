function simpleMultiplication(num) {
  return num % 2 == 0 ? num * 8 : num * 9;
  // your code........
}

simpleMultiplication(2); // ,16,'Should return double given argument..')
simpleMultiplication(1);
simpleMultiplication(8);

/*

    assert.strictEqual(simpleMultiplication(1),9,'Should return double given argument..')
    assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
    assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
    assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')
  });
*/
