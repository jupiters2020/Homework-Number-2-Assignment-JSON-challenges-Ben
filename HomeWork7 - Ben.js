'use strict';

//2.

var notActuallyJSONObject = {
  "someKey": "someValue",
  "innerArray": [
    "alpha",
    "beta",
    "gamma",
    "delta",
  ]
};

//5.

var JsonObject = JSON.parse(notActuallyJSONObject);

var innerArray = jsonObject.task;

console.log(innerArray[0,1,2,3].task1);

console.log(notActuallyJSONObject.innerArray[0,1,2,3]);

//2.

eddie = { "name":"Eddie Vedder", "age":49,};

// var eddie = { "name":"Eddie Vedder", "age":49,};

//3. 

var grungeAlbums = {
  "albums":[
    {
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    },
    {
        "name": "Nevermind",
        "artist": "Nirvana",
        "unitsSold": 30000000
    },
    {
        "name": "In Utero",
        "artist": "Nirvana",
        "unitsSold": 15000000
    },
    {
        "name": "Ten",
        "artist": "Pearl Jam",
        "unitsSold": 10000000
    },
    {
        "name": "Vs",
        "artist": "Pearl Jam",
        "unitsSold": 6100000
    },
    {
        "name": "Vitalogy",
        "artist": "Pearl Jam",
        "unitsSold": 4770000
    }
  ]
};

console.log(grungeAlbums); 

var grungeAlbumsJSON = JSON.stringify(grungeAlbums); 

console.log(grungeAlbums.albums.album); 
console.log(grungeAlbums.albums.artist); 
console.log(grungeAlbums.albums.unitsSold); 

console.log(grungeAlbumsJSON);

//  Album: Album name
//  Artist: Artist name
//  Units sold: 31234

//4.In JS

var grungeAlbums = '{ "albums" : [' +
'{ "name":"Bleach" , "artist":"Nirvana" , "unitSold": 1700000 }' +
'{ "name":"Nevermind" , "artist":"Nirvana" , "unitSold": 30000000 }' +
'{ "name":"In Utero" , "artist":"Nirvana" , "unitSold": 10000000 }' +
'{ "name":"Ten" , "artist":"Pearl Jam" , "unitSold": 30000000 }' +
'{ "name":"Vs" , "artist":"Pearl Jam" , "unitSold": 6100000 }' +
'{ "name":"Vitalogy" , "artist":"Pearl Jam" , "unitSold": 4770000 }]}';

var grungeAlbumsJSON = JSON.parse(grungeAlbums);

var stringifiedJSONObject = '{
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    }'

var jsonObjectTrial = JSON.parse(stringifiedJSONObject);

