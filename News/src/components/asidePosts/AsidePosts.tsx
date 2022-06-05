import { useState, useEffect } from "react";
import useNewsServices from '../../services/NewsServices';
import renderPosts from "../../utils/renderPosts";
import setContent from "../../utils/setContent";

import './asidePost.scss';

const AsidePosts = () => {
    const {getAllLastNews, process, setProcess} = useNewsServices();
    const [newsPosts, setNewsPosts] = useState([]);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllLastNews()
            .then(arr => setNewsPosts(arr.slice(4)))
            .then(() => setProcess('confirmed'));
    }

    const posts = setContent(process, () => renderPosts(newsPosts));

    return (
        <aside className="news__aside">
            {posts}
        </aside>
    )
}

export default AsidePosts;