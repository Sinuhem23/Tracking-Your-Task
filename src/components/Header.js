import PropTypes from 'prop-types';
import Buttons from './Buttons';
const Header = ({ title }) => {
  const onClick = () => {
    console.log('Click');
  };
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Buttons text='Add' onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Tracking Your Tasks',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
