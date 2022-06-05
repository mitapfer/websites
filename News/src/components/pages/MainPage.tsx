import NewsSlider from "../newsSlider/NewsSlider";
import AsidePosts from "../asidePosts/AsidePosts";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const MainPage = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="news__inner">
          <ErrorBoundary>
            <NewsSlider />
          </ErrorBoundary>
          <ErrorBoundary>
            <AsidePosts />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  )
}

export default MainPage;