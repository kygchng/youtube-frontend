import axios from 'axios';

const KEY = "AIzaSyBsPlmq558vNiRUaa1eM2_BO9OPQNfB4H4";

export default axios.create({ //creates client of google API in axios form
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
