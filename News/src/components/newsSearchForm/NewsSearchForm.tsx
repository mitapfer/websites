import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import './newsSearchForm.scss';

interface Props {
  setValueSearchForm: React.Dispatch<React.SetStateAction<string>>;
}

const NewsSearchForm = (props: Props) => {
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/search') {
      const input = document.querySelector('.header__search-input') as HTMLInputElement;
      input.value = '';
    }
  }, [location.pathname]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      const activeElem = document.activeElement as HTMLInputElement;

      if (activeElem.classList.contains('header__search-input') && e.key == 'Enter') {
        const searchInput = document.querySelector('.header__search-input') as HTMLInputElement;

        if (searchInput.value.match(/\w/g) !== null) {
          props.setValueSearchForm(searchInput.value);
          navigate('/search');
        }
      }
    });
  }, []);

  return (
    <div className="header__search">
      <input className="header__search-input" type="search" placeholder="Search here..." />
    </div>
  )
}

export default NewsSearchForm;
