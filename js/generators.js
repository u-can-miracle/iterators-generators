console.log('=======  Basic  =======')
function* stringGenerator() {
  yield 'hi';
  yield 'hi';
  yield 'hi';
  // Once the function reaches its end,
  // 'value' equals undefined,
  // and 'done' is automatically set to true.
}

// Calling stringGenerator won’t do anything on its own
// because it will automatically stop the execution
// at the first yield statement.
const strings = stringGenerator();

console.log(strings.next());
console.log(strings.next());
console.log(strings.next());
console.log(strings.next());


console.log('=======  Nested generators  =======')
function* nameGenerator() {
  yield 'Iwan';
  yield 'Aiko';
}

function* stringGenerator() {
  yield* nameGenerator();
  yield* ['one', 'two'];
  yield 'hi';
  yield 'hi';
  yield 'hi';
}

const strings1 = stringGenerator();

for (let value of strings1) {
  console.log(value);
}


console.log('=======  Override  =======')
function* overrideValue() {
  const result = yield 'hi';
  console.log(result);
}

const overrideIterator = overrideValue();

// We need to call next once before passing
// a value to start the generator.
overrideIterator.next();
overrideIterator.next('bye');
overrideIterator.next();


console.log('=======  Return  =======')
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

console.log(g)
console.log(g.next())
console.log(g.return('foo'))
console.log(g.next())
console.log(g)


console.log('=======  Throw  =======')
function* errorGenerator() {
  try {
    yield 'one';
    yield 'two';
  } catch(e) {
    console.error(e);
  }
}

const errorIterator = errorGenerator();

console.log(errorIterator.next());
console.log(errorIterator.throw('Bam!'));
