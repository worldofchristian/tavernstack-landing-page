import { HiMenuAlt2 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
      <nav className="sticky top-0 z-10 backdrop-filter bg-opacity-30 backdrop-blur-xl bg-base">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="dropdown dropdown-bottom lg:dropdown-left">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                    <HiMenuAlt2 className='text-2xl' />
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
                </ul>
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