const API_KEY = process.env.REACT_APP_API_KEY;


const requests = {
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  adventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  animation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  crime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  drama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  family: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  war: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  music: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
};

export default requests;
