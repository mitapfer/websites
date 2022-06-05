import NewsPost from "../components/newsPost/NewsPost";

const renderPosts = (arr) => {
    const items = arr.map((item, index) => {
        let {author, title, urlToImage, url} = item;

        if (author == null || author == '') {
            author = 'Author unknown';
        }
        if (author.length >= 26) {
            author = author.slice(0, 26) + '...';
        }

        return (
            <NewsPost
                id={index}
                author={author} 
                title={title} 
                urlToImage={urlToImage}
                url={url}
                key={index}/>
        )
    });

    return items;
}

export default renderPosts;