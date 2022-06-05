import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import useNewsServices from '../../services/NewsServices';
import renderPosts from "../../utils/renderPosts";
import setContent from "../../utils/setContent";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Button from '../button/Button';

interface Props {
  valueSearchForm: string;
}

interface Data {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  content: string;
}

const SearchResult = (props: Props) => {
  const { getNewsBySearch, process, setProcess } = useNewsServices();
  const [searchResult, setSearchResult] = useState([] as Data[]);
  const [visiblePosts, setVisiblePosts] = useState([] as Data[]);
  const [offset, setOffset] = useState(6);

  useEffect(() => {
    setOffset(6);

    const btnWrapper = document.querySelector('.button__wrapper') as HTMLDivElement;
    btnWrapper.style.display = 'flex';

    const message = document.querySelector('.posts__list-message') as HTMLDivElement;
    message.style.display = 'none';

    const searchInput = document.querySelector('.header__search-input') as HTMLInputElement;

    setProcess('loading');
    onRequest(searchInput.value);
    searchInput.blur();
  }, [props.valueSearchForm]);

  const onRequest = (title: string) => {
    getNewsBySearch(title)
      .then(onNewsLoaded);
  }

  const onNewsLoaded = (arr: Data[]) => {
    if (arr.length == 0) {
      setProcess('nothing');
      const btnWrapper = document.querySelector('.button__wrapper') as HTMLDivElement;
      btnWrapper.style.display = 'none';
    } else {
      setProcess('confirmed');
    }

    setSearchResult(arr);
    setVisiblePosts(arr.slice(0, 6));
  }

  const onLoadMorePosts = () => {
    setVisiblePosts([...visiblePosts, ...searchResult.slice(offset, offset + 6)]);
    setOffset(offset + 6);
    checkAmountPosts();
  }

  const checkAmountPosts = () => {
    if (searchResult.slice(offset).length == 0) {
      const btnWrapper = document.querySelector('.button__wrapper') as HTMLDivElement;
      btnWrapper.style.display = 'none';

      const message = document.querySelector('.posts__list-message') as HTMLDivElement;
      message.style.display = 'block';
    }
  }

  const posts = setContent(process, () => renderPosts(visiblePosts));

  return (
    <>
      <Helmet>
        <title>News - Search</title>
      </Helmet>
      <ErrorBoundary>
        <div className="posts">
          <div className="container">
            <div className="posts__inner">
              <div className="posts__list" style={{ width: '100%' }}>
                {posts}
                <Button text='LOAD MORE' funct={onLoadMorePosts} styles={{ justifyContent: 'center' }} />
                <h5 className="posts__list-message">No more posts</h5>
              </div>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </>
  )
}

export default SearchResult;