import { FaSeedling } from 'react-icons/fa';
import { HiMenuAlt2 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ackblue from '../assets/ackblue.png';

const Navbar = () => {
    return (
      <nav className="sticky top-0 z-50 backdrop-filter bg-opacity-30 backdrop-blur-lg bg-base">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="dropdown dropdown-bottom lg:dropdown-left">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                    <HiMenuAlt2 className='text-2xl lg:text-3xl' />
                </label>

                <ul 
                tabIndex={0} 
                className="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-52 mt-4"
                >
                    <li>
                        <Link to="/"
                        >Home
                        </Link>
                    </li>
                    {/*
                    <li>
                        <a
                        href='https://demo.tavernstack.com'
                        target='_blank'
                        rel='noreferrer'
                        >Demo
                        </a>
                    </li>

                    <li>
                        <Link to="/"
                        >Blog
                        </Link>
                    </li>
                    */}
                </ul>
            </div>
            
            <div className='flex flex-row items-center gap-1'>
              <img src={ackblue} alt='ackblue' className='h-7 w-7' />
              <p className='text-md font-semibold'>tavernstack</p>
            </div>

            <a 
            href='https://app.tavernstack.com'
            alt='log in link'
            target='_blank'
            rel='noreferrer'
            >
              <button
              className='btn btn-primary rounded-xl'
              >Log in</button>
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;