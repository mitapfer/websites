import './categoriesPosts.scss';

interface Props {
  setCategoryType: (id: string) => void;
  categoryType: string;
}

const CategoriesPosts = (props: Props) => {
  const categoriesArr = ['General', 'Business', 'Health', 'Science', 'Sports', 'Technology'];
  const categoriesInputs = document.querySelectorAll('.checkbox__input');

  const onChangeFilterType = (e: React.ChangeEvent<HTMLInputElement>) => {
    removeActiveType();
    setActiveType(e.target);

    props.setCategoryType(e.target.getAttribute('id') as string);
  }

  const removeActiveType = () => {
    categoriesInputs.forEach((item) => {
      (item as HTMLInputElement).checked = false;
    });
  }

  const setActiveType = (input: HTMLInputElement) => {
    input.checked = true;
  }

  const renderCategories = (arr: string[]) => {
    const items = arr.map((item, index) => {
      let checked = false;
      item.toLowerCase() == props.categoryType ? checked = true : checked = false;

      return (
        <li key={index}>
          <div className="checkbox">
            <input
              onChange={onChangeFilterType}
              className="checkbox__input"
              checked={checked}
              type="checkbox"
              id={item.toLowerCase()} />
            <label className="checkbox__label" htmlFor={item.toLowerCase()}>{item}</label>
          </div>
        </li>
      )
    });

    return items;
  }

  const categories = renderCategories(categoriesArr);

  return (
    <div className="posts__categories">
      <h4 className="posts__categories-title">
        CATEGORIES
      </h4>
      <ul className="posts__categories-list">
        {categories}
      </ul>
    </div>
  )
}

export default CategoriesPosts;