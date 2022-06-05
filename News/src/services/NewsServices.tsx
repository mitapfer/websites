import { useHttp } from "../hooks/http.hook";

const useNewsServices = () => {
    const {request, clearError, process, setProcess} = useHttp();
    const _apiBase = 'https://newsapi.org/v2/';
    const _apiKey = 'apiKey=4515b7d8883649a2a7c434f9b5738887';

    const getAllLastNews = async () => {
        const res = await request(`${_apiBase}top-headlines?country=us&${_apiKey}`);
        return res.articles.slice(0, 6);
    }

    const getCategoryNews = async (category: string) => {
        const res = await request(`${_apiBase}top-headlines?category=${category}&pageSize=24&language=en&${_apiKey}`);
        return res.articles;
    }

    const getNewsBySearch = async (title: string) => {
        const res = await request(`${_apiBase}everything?q=${title}&searchIn=title&pageSize=24&language=en&${_apiKey}`);
        return res.articles;
    }

    return {
        clearError,
        process,
        setProcess,
        getAllLastNews,
        getCategoryNews,
        getNewsBySearch
    }
}

export default useNewsServices;