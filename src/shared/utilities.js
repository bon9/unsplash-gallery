export const isEmptyObject = obj => {
  // eslint-disable-next-line no-unused-vars
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
};

export const extractTotalPages = str => {
  /*
		При необходимости объекта с url на prev, next, last, first - раскомментировать и вернуть объект
	*/
  const arrSplit = str.split(', ');
  // const resultObj = {};
  let totalPages = '';

  arrSplit.forEach(el => {
    // el = <https://api.unsplash.com/photos?page=3475>; rel="last"
    const indexEndLink = el.indexOf('>');
    // if (el.includes('first')) {
    //   resultObj.first = el.slice(1, indexEndLink);
    // }
    // if (el.includes('prev')) {
    //   resultObj.prev = el.slice(1, indexEndLink);
    // }
    // if (el.includes('next')) {
    //   resultObj.next = el.slice(1, indexEndLink);
    // }
    if (el.includes('last')) {
      // url = https://api.unsplash.com/photos?page=3475
      const url = el.slice(1, indexEndLink);
      // resultObj.last = url;
      let indexStartOfNumberLastPage = url.indexOf('?page=') + 6; // index 37 ='3'
      while (!isNaN(url[indexStartOfNumberLastPage])) {
        totalPages = totalPages + url[indexStartOfNumberLastPage]; // '3' + '4',..
        indexStartOfNumberLastPage++; // 37, 38,..
      }
    }
  });

  return +totalPages;
};

export const randomInteger = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

export const slicePhrase = (phrase, length) =>
  phrase.length > length ? `${phrase.slice(0, length)}...` : phrase;
