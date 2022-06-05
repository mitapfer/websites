import loading from '../../resources/loading.gif';

const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', marginTop: '30px' }} className="spinner">
      <img style={{ 'width': '100px', 'height': 'auto' }} className="spinner__img" src={loading} alt="loading" />
    </div>
  )
}

export default Spinner;