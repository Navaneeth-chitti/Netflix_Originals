
const API_key = "977b9c6f60520e7f46d6a2a9a1cd2938";


const requests={
    fetchtoprated: `/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
    fetchpopular: `/movie/popular?api_key=${API_key}&language=en-US&page=1`,
    fetchlatest:`/movie/latest?api_key=${API_key}&language=en-US`,
    fetchupcoming: `/movie/upcoming?api_key=${API_key}&language=en-US&page=1`,
    fetchnowplaying:`/movie/now_playing?api_key=${API_key}&language=en-US&page=1`,
}

export default requests