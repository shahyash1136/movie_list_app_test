const config = {};

config.API_BASE_URL = "https://api.themoviedb.org/3/";
config.API_KEY = "2dca580c2a14b55200e784d157207b4d";
config.Media_Type = {
  movie: "movie",
};

config.API_Name = {
  discover: "discover/",
  genre: "genre/",
};

config.API_URL = {
  genre: `${config.API_BASE_URL}${config.API_Name.genre}${config.Media_Type.movie}/list?api_key=${config.API_KEY}`,
  discover: `${config.API_BASE_URL}${config.API_Name.discover}${config.Media_Type.movie}?api_key=${config.API_KEY}&sort_by=popularity.desc&primary_release_year={{year}}&page=1&vote_count.gte=100`,
  movieDetails: `${config.API_BASE_URL}${config.Media_Type.movie}/{{movie_id}}?api_key=${config.API_KEY}`,
  movieCredits: `${config.API_BASE_URL}${config.Media_Type.movie}/{{movie_id}}/credits?api_key=${config.API_KEY}`,
};

config.Bar_Color = {
  green: "#21d07a",
  yellow: "#d2d531",
  red: "#db2360",
};

export default config;
