import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDY3M2YzYWY5ZGYyMzc2NTJkMWQzYjFiZmJjYWQ1NyIsIm5iZiI6MTc1NjU3MDA3Mi45NDUsInN1YiI6IjY4YjMyMWQ4NmEyMzc2NjZkYjNlZmI1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SVNm9UhKzpvr3zF29ldzIA-nv14RmqET3YPjXMrhFNk",
  },
});


export default instance;