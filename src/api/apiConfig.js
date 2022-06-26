const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0a1160e7dea275b447a801d9abae8707',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;