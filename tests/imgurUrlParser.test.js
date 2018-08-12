const imgurUrlParser = require('../imgurUrlParser');

const results = {
  album: { id: 'cjh4E', type: 'album' },
  gallery: { id: '59npG', type: 'gallery' },
  directImage: { id: 'altd8Ld', type: 'image' },
  image: { id: 'OzZUNMM', type: 'image' },
};

test('Should work with an album', () => {
  expect(imgurUrlParser('http://imgur.com/a/cjh4E')).toBe(results.album);
});

test('Should work with a gallery', () => {
  expect(imgurUrlParser('http://imgur.com/gallery/59npG')).toBe(
    results.gallery,
  );
});

test('Should work with a single image', () => {
  expect(imgurUrlParser('http://imgur.com/OzZUNMM')).toBe(results.image);
});

test('Should work with a single image (direct link)', () => {
  expect(imgurUrlParser('http://i.imgur.com/altd8Ld.png')).toBe(
    results.directImage,
  );
});

test("Should work with /zip at the end (Yeah it's a real thing!)", () => {
  expect(imgurUrlParser('http://imgur.com/a/cjh4E/zip')).toBe(results.album);
});

test('Should work with a #hash at the end', () => {
  expect(imgurUrlParser('http://imgur.com/gallery/59npG#g1UvPtF')).toBe(
    results.gallery,
  );
});

test('Should work with www. instead of http://', () => {
  expect(imgurUrlParser('www.i.imgur.com/altd8Ld.png')).toBe(
    results.directImage,
  );
});

test('Should work without http:// and www.', () => {
  expect(imgurUrlParser('i.imgur.com/altd8Ld.png')).toBe(results.directImage);
});
