
    const API_KEY = 'a8d225842e59d3766ab358c78b2670c0'


const requests = { 
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`, 
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomantic: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
}

export default requests; 


// http://api.themoviedb.org/3/trending/all/week?api_key=a8d225842e59d3766ab358c78b2670c0

// https://api.themoviedb.org/3/tv/top_rated?api_key=a8d225842e59d3766ab358c78b2670c0


// `https://api.themoviedb.org/3/discover/movie?api_key=a8d225842e59d3766ab358c78b2670c0&width_genres=10749
