import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavDropdown = ({isOpen, toggle}) => {
    NavDropdown.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        toggle: PropTypes.func.isRequired,
    };

  return (
    <>
    <div
    className={
      isOpen 
      ? 'grid grid-rows-3 sticky top-14 z-10 text-center bg-base-100 items-center justify-center shadow-lg' 
      : 'hidden' }
    onClick={toggle}>

        <Link to='/'>
          <p className='p-4'>Home</p>
        </Link>

        <a 
        href='https://app.tavernstack.com'
        target='_blank'
        rel='noreferrer'
        alt='demo'
        className='p-4'
        >Demo
        </a>
          
        <div className='flex items-center justify-center my-6'>
          <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          style={{ height: 36, width: 36 }}
          onClick={toggle}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
    </div>
    </>
  )
}

export default NavDropdown