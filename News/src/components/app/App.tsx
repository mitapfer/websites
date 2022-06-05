import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Spinner from "../spinner/Spinner";

const MainPage = lazy(() => import('../pages/MainPage'));
const Posts = lazy(() => import('../pages/Posts'));
const Contacts = lazy(() => import('../pages/Contacts'));
const SearchResult = lazy(() => import('../pages/SearchResult'));

const App = () => {
  const [valueSearchForm, setValueSearchForm] = useState('');

  return (
    <Router>
      <Header setValueSearchForm={setValueSearchForm} />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/search"
            element={<SearchResult
            valueSearchForm={valueSearchForm} />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
