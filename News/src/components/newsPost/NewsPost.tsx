import './newsPost.scss';

import noneImage from '../../resources/none-image.jpg';

interface Data {
  author: string;
  title: string;
  urlToImage: string;
  url: string;
}

const NewsPost = (data: Data) => {
  let { author, title, urlToImage, url } = data;

  if (title == null) {
    title = 'Author unknown';
  }
  if (author == null) {
    author = 'Author unknown';
  }
  if (title.length >= 50) {
    title = title.slice(0, 50) + '...';
  }
  if (author.length >= 60) {
    author = author.slice(0, 35) + '...';
  }
  if (urlToImage == null) {
    urlToImage = noneImage;
  }

  return (
    <div className="news__post">
      <div className="news__post-img">
        <a href={url} target="_blank">
          <img src={urlToImage} alt="" />
        </a>
      </div>
      <div className="news__post-info">
        <div className="news__post-title" tabIndex={0}>
          <a href={url} target="_blank">
            {title}
          </a>
        </div>
        <div className="news__post-author">
          {author}
        </div>
      </div>
    </div>
  )
}

export default NewsPost;