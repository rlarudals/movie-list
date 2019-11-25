import React from 'react';
import axios from 'axios';

/*
  1. 네트워크에 존재하는 데이터를 가져와서 const 변수에 넣기
  2. const 변수를 view 시키기
*/

// componentDidMount();
// 라이프 싸이클
// 컴포넌트(App) 만들어진 후 -> 자동으로 실행하는 함수

// Render -> didMount();

const API_KEY = "fcb220cf279332bb7ccd7801cb5a440a";
const URL = "https://api.themoviedb.org/3";
const param = {
                 path : "movie/popular",
                 lan : "en"
              };
function App() {

  const axios = require("axios");
  let movies = null;

  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fcb220cf279332bb7ccd7801cb5a440a&language=en-US&page=1  ')
  .then(function (response) {
    // handle success
    movies = response.data.results;
    console.log(movies); // 영화 20개 가져오기 [ movies 라는 변수애 담음

    const movielist = document.getElementById("movieList")

    for(let i = 0; i < movies.length; i++)
    {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const img = document.createElement("img");

      console.log(movies[i].poster_path);

      img.src = "https://image.tmdb.org/t/p/w500" + movies[i].poster_path;
      span.innerHTML = movies[i].title;
      li.appendChild(span);
      li.appendChild(img);

      movielist.appendChild(li);

    }

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  return <ol id = "movieList"></ol>
}

export default App;
