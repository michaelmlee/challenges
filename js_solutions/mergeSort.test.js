const { mergeArrays, mergeXArrays } = require('./mergeSort');

// test variables
const a = [1,5,9],
 b = [-1, 2],
 c = [2, 4, 100],
 d = [Number.MIN_SAFE_INTEGER, 5, 9 , 11],
 e = [0, 12, 88, 100, 400, Number.MAX_SAFE_INTEGER],
 f = [-500, -200, 0, 100 , 1000000],
 g = [1000],
 h = [1 , 2, 4 , 6, 10, 25];

// merged arrays answers
const ab = [ -1, 1, 2, 5, 9 ],
bc = [-1, 2, 2, 4, 100 ],
de = [ -9007199254740991, 0, 5, 9, 11, 12, 88, 100, 400, 9007199254740991 ],
fg = [ -500, -200, 0, 100, 1000, 1000000 ],
gh =  [ 1, 2, 4, 6, 10, 25, 1000];


// test mergeXArray variables
const abc = [a, b, c];
def = [d, e, f],
abcdef = [a, b, c, d, e, f],
abcdefgh = [a, b , c, d, e, f, g, h];

// mergeXArray answers
const answer_abc = [ -1, 1, 2, 2, 4, 5, 9, 100 ],
answer_def = [ -9007199254740991, -500, -200, 0, 0, 5, 9, 11, 12, 88, 100, 100, 400, 1000000, 9007199254740991 ],
answer_abcdef =[ -9007199254740991, 
  -500, 
  -200, 
  -1, 
  0, 
  0, 
  1, 
  2, 
  2, 
  4, 
  5, 
  5, 
  9, 
  9, 
  11, 
  12, 
  88, 
  100, 
  100, 
  100, 
  400, 
  1000000, 
  9007199254740991 ],
  answer_abcdefgh = [ -9007199254740991, 
    -500, 
    -200, 
    -1, 
    0, 
    0, 
    1, 
    1, 
    2, 
    2, 
    2, 
    4, 
    4, 
    5, 
    5, 
    6, 
    9, 
    9, 
    10, 
    11, 
    12, 
    25, 
    88, 
    100, 
    100, 
    100, 
    400, 
    1000, 
    1000000, 
    9007199254740991 ] ;


describe("mergeArrays", () => {
    test("ab", () => {
        expect(mergeArrays(a,b)).toStrictEqual(ab);
    });

    test("bc", () => {
        expect(mergeArrays(b,c)).toStrictEqual(bc);
    });

    test("de", () => {
      expect(mergeArrays(d,e)).toStrictEqual(de);
    });

    test("fg", () => {
      expect(mergeArrays(f,g)).toStrictEqual(fg);
    });
    
    test("gh", () => {
      expect(mergeArrays(g,h)).toStrictEqual(gh);
    });
});


describe("mergeXArrays", () => {
  test("abc", () => {
      expect(mergeXArrays(abc)).toStrictEqual(answer_abc);
  });

  test("def", () => {
      expect(mergeXArrays(def)).toStrictEqual(answer_def);
  });

  test("abcdef", () => {
    expect(mergeXArrays(abcdef)).toStrictEqual(answer_abcdef);
  });

  test("abcdefgh", () => {
    expect(mergeXArrays(abcdefgh)).toStrictEqual(answer_abcdefgh);
  });
  
  test("a", () => {
    expect(mergeXArrays([a])).toStrictEqual(a);
  });
});
