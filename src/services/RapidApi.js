import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://newscatcher.p.rapidapi.com/v1/sources',
  params: {lang: 'en'},
  headers: {
    'x-rapidapi-key': '8ebcd57999msh40f3b4733b5eb35p190cdejsn3698e606371c',
    'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});