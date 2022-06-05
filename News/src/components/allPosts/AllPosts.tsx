import { useState, useEffect } from 'react';
import useNewsServices from '../../services/NewsServices';
import Button from '../button/Button';
import setContent from "../../utils/setContent";
import renderPosts from '../../utils/renderPosts';

import './allPosts.scss';

interface Props {
  categoryType: string;
}

const AllPosts = (props: Props) => {
  const [postsList, setPostsList] = useState([]);
  const { getCategoryNews, process, setProcess } = useNewsServices();
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [offset, setOffset] = useState(6);

  useEffect(() => {
    setOffset(6);

    const btnWrapper = document.querySelector('.button__wrapper') as HTMLDivElement;
    btnWrapper.style.display = 'flex';

    const message = document.querySelector('.posts__list-message') as HTMLDivElement;
    message.style.display = 'none';

    setProcess('loading');
    onRequest();
  }, [props.categoryType]);

  const onRequest = () => {
    getCategoryNews(props.categoryType)
      .then(arr => {
        setPostsList(arr);
        setVisiblePosts(arr.slice(0, 6))
      })
      .then(() => setProcess('confirmed'));
  }

  const onLoadMorePosts = () => {
    setVisiblePosts([...visiblePosts, ...postsList.slice(offset, offset + 6)]);
    setOffset(offset + 6);
    checkAmountPosts();
  }

  const checkAmountPosts = () => {
    if (postsList.slice(offset).length == 0) {
      const btnWrapper = document.querySelector('.button__wrapper') as HTMLDivElement;
      btnWrapper.style.display = 'none';

      const message = document.querySelector('.posts__list-message') as HTMLDivElement;
      message.style.display = 'block';
    }
  }

  const posts = setContent(process, () => renderPosts(visiblePosts));

  return (
    <div className="posts__list">
      {posts}
      <Button text='LOAD MORE' funct={onLoadMorePosts} styles={{ justifyContent: 'center' }} />
      <h5 className="posts__list-message">No more posts</h5>
    </div>
  )
}

export default AllPosts;