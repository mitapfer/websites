import './nothingSearchResult.scss';

import nothing from '../../resources/icons/nothing.svg';

const NothingSearchResult = () => {
  return (
    <div className="nothing">
      <img src={nothing} alt="nothing" className="nothing__img" />
      <div className="nothing__message">
        Sorry, we couldn't find any results...
      </div>
    </div>
  )
}

export default NothingSearchResult;