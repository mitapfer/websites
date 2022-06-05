import { useState } from "react";
import { Helmet } from "react-helmet";
import AllPosts from "../allPosts/AllPosts";
import CategoriesPosts from "../categoriesPosts/CategoriesPosts";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const Posts = () => {
  const [categoryType, setCategoryType] = useState('general');

  return (
    <>
      <Helmet>
        <title>News - Posts</title>
      </Helmet>
      <div className="posts">
        <div className="container">
          <div className="posts__inner">
            <ErrorBoundary>
              <AllPosts categoryType={categoryType} />
            </ErrorBoundary>
            <CategoriesPosts setCategoryType={setCategoryType} categoryType={categoryType} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Posts;