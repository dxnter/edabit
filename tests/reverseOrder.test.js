const reverse = require('../reverseOrder');

test('Should reverse the order of words longer than 5 or more letters', () => {
  expect(reverse('Reverse')).toBe('esreveR');
  expect(reverse('This is a typical sentence.')).toBe(
    'This is a lacipyt .ecnetnes'
  );
  expect(reverse('The dog is big.')).toBe('The dog is big.');
  expect(
    reverse(
      'Reverse the order of every word greater than or equal to five characters.'
    )
  ).toBe(
    'esreveR the redro of yreve word retaerg than or lauqe to five .sretcarahc'
  );
  expect(
    reverse('Lets all be unique together until we realise we are all the same.')
  ).toBe('Lets all be euqinu rehtegot litnu we esilaer we are all the .emas');
  expect(reverse('The old apple revels in its authority.')).toBe(
    'The old elppa slever in its .ytirohtua'
  );
  expect(reverse('The shooter says goodbye to his love.')).toBe(
    'The retoohs says eybdoog to his .evol'
  );
  expect(reverse('Please wait outside of the house.')).toBe(
    'esaelP wait edistuo of the .esuoh'
  );
  expect(reverse('Two seats were vacant.')).toBe('Two staes were .tnacav');
  expect(reverse('Sixty-Four comes asking for bread.')).toBe(
    'ruoF-ytxiS semoc gniksa for .daerb'
  );
});
