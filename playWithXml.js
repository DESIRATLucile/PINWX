var transformer = require('object-to-xml');  

var obj = {  
  '?xml version=\"1.0\" encoding=\"iso-8859-1\"?' : null,
  livre : {
    '@' : {
      type : 'Fiction',
      id : 12344556
    },
    '#' : [
        {
            auteur : 'Jules Verne',
            titre : 'Vingt mille lieues sous les mers',
            date_parution : '1870'
        },
        {
            auteur : 'L\'assomoir',
            titre : 'Emile Zola',
            date_parution : '1876'
        },
        {
            auteur : 'Germinal',
            titre : 'Emile Zola',
            date_parution : '1885'
        }
    ]
  }
};

console.log(transformer(obj));