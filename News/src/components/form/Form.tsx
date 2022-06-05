import Button from '../button/Button';

import './form.scss';

const Form = () => {
  const sendForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('Send');
  }

  return (
    <form className="form">
      <div className="form__inputs">
        <input className="form__phone" type="tel" name="form__phone" placeholder="Phone" />
        <input className="form__name" type="text" name="form__name" placeholder="Name" />
      </div>
      <textarea name="form__textarea" placeholder="Message"></textarea>
      <Button text='SEND' funct={sendForm} />
    </form>
  )
}

export default Form;