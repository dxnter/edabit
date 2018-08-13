function imgurUrlParser(url) {
  const match = /imgur.com(?:\/(a)\/)?(?:\/(gallery)\/)?\/?(\w+)/gi.exec(url);
  const [, a, gallery, id] = match;
  if (gallery) return { id, type: gallery };
  if (a) return { id, type: 'album' };
  return { id, type: 'image' };
}

module.exports = imgurUrlParser;