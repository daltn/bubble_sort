describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 3, 5, 7, 6])).toEqual([[1, 3], [5, 7, 6]]);
  });
  // });

  // it('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts an array recursively', function() {
    expect(mergeSort([1, 3, 2, 4, 50, 32, 21])).toEqual([
      1,
      2,
      3,
      4,
      21,
      32,
      50,
    ]);
  });
});
