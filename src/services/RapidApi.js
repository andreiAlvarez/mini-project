import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://newscatcher.p.rapidapi.com/v1/sources',
  params: {lang: 'en'},
  headers: {
    'x-rapidapi-key': 'process.env.RAPID_API_KEY',
    'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});