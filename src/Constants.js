const API_KEY = "AIzaSyBMkXwgyQUCdJ7-Rs6ndQXsz0Wq4vQl_cg";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

const CORS_ANYWHERE = "https://corsanywhere.herokuapp.com/";
export const YOUTUBE_VIDEOS_SEARCH_API = `${CORS_ANYWHERE}http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_SEARCH_RESULTS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`;
