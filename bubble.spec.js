describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('sorts this array', function() {
        expect( bubbleSort([6, 2, 3, 1, 5, 4]) ).toEqual([1, 2, 3, 4, 5, 6])
    })

  });
