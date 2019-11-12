# IrokoProject

## Engineering Code Test

The Goal of this project is to create a React application that displays both Popular and Top Rated movies in a grid on the landing page. When the user clicks on a movie from one of the grids, they are then shown a Movie Details page where they are able to get more information (poster image, title, synopsis, duration and rating) about the selected movie. The Movie Details page should also have a play button that when pressed, will play a video in a modal overlay.

## Requirements:

* Fetch movie data from the themoviedb.org API. You will need to sign up for a free API KEY.
    -> Popular Movies Endpoint: https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}
    -> Top Rated Movies Endpoint: https://api.themoviedb.org/3/movie/top_rated?api_key={API_KEY}
      
* Display movies from the different endpoints in two separate grids.

* Your application should use a local caching strategy for data fetched from the API.

* Upon clicking a movie on the landing page, the user should be taken to a Movie Details page 
  that displays more information about the movie. Displays: Poster Image, Title, Synopsis, duration and Rating.
  
* The Movie details page should also have a play button, that when pressed will
  open a modal overlay and play a video (can just be Youtube embed or something if needed).

## Rules:
1. Host the project on a GitHub repository. PLEASE REMOVE YOUR API KEY BEFORE HOSTING.
2. Use as many third party libraries as you would like.
3. Feel free to use Create React App or similar and any design framework you want (Material, Bootstrap, etc).
4. Be creative.

## To run: 
### `npm i`
### `npm start`

Add your `API_KEY` to:
* src/App.js on line 24
* src/components/movieDetails.js on line 27

### 
local caching strategy [Docs](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache).

