import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import useNewsServices from '../../services/NewsServices';
import setContent from "../../utils/setContent";

import './newsSlider.scss';

interface Data {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
}

const NewsSlider = () => {
  const { getAllLastNews, process, setProcess } = useNewsServices();
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    getAllLastNews()
      .then(arr => setNewsList(arr.slice(0, 4)))
      .then(() => setProcess('confirmed'));
  }

  const renderSlides = (arr: Data[]) => {
    const items = arr.map((item: Data, index: number) => {
      let { author, title, urlToImage, url } = item;

      if (title.length >= 105) {
        title = title.slice(0, 105) + '...';
      }
      if (author == null || author == '') {
        author = 'Author unknown';
      }

      return (
        <Carousel.Item key={index}>
          <div className="news__slide">
            <a href={url} target="_blank">
              <img src={urlToImage} alt="" />
            </a>
            <div className="news__slide-info">
              <div className="news__slide-title">
                <a href={url} target="_blank">
                  {title}
                </a>
              </div>
              <div className="news__slide-author">
                {author}
              </div>
            </div>
          </div>
        </Carousel.Item>
      )
    });

    return <Carousel interval={6000} indicators={false}>
      {items}
    </Carousel>
  }

  const slides = setContent(process, () => renderSlides(newsList));

  return (
    <div className="news__slider">
      {slides}
    </div>
  )
}

export default NewsSlider;