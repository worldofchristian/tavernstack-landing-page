import { useState } from "react";
import { FaAngleDoubleUp, FaFacebook } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

const DemoNavbar = () => {
  const [isCateringOpen, setIsCateringOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  return (
    <>
    <div className="h-16 fixed top-0 w-full bg-base-100">
      <div className="flex justify-between items-center h-full max-w-5xl mx-auto p-4">
          <HiMenuAlt2 
          className="text-3xl cursor-pointer" 
          onClick={() => { 
            setIsHamburgerOpen(true);
            setIsCateringOpen(false);
          }}
          />

          <button
          className="btn btn-primary rounded-2xl"
          onClick={() => { 
            setIsCateringOpen(true);
            setIsHamburgerOpen(false);
          }}
          >Catering
          </button>
      </div>
    </div>

    { isCateringOpen && (
      <div className='fixed top-16 left-0 right-0 flex items-center justify-center z-10 bg-base-100 shadow-lg'>
        <div className='flex flex-col mt-12'>
          <div className='max-w-sm'>
            <div className='flex flex-col'>
              <p className='text-md mb-1 ml-1'
              >Email</p>

              <input 
              className='input input-bordered'
              placeholder='Type here'
              />

              <p className='text-md mb-1 ml-1 mt-4'
              >Message</p>

              <textarea
              className='textarea textarea-bordered' 
              placeholder='Type here'
              />

              <div className="flex items-center justify-end">
                <div className="max-w-xs">
                  <button 
                  className='btn btn-primary rounded-2xl mt-2'
                  >Send
                  </button>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center my-12'>
              <p className='text-xl font-bold cursor-pointer tracking-wide'
              onClick={() => {
                setIsCateringOpen(false);
              }}
              >Close</p>

              <FaAngleDoubleUp className='ml-2 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    )}

    { isHamburgerOpen && (
      <div className='fixed top-16 left-0 right-0 flex items-center justify-center z-10 bg-base-100 shadow-lg'>
        <div className='flex flex-col mt-12'>
          <div className='max-w-sm'>

            <div className='flex items-center justify-center mt-4'>
              <p className='text-lg'
              >163 Centre St, Rosedale, AB
              </p>
            </div>

            <div className='flex items-center justify-center mt-5'>
              <div className="flex flex-col gap-4">
              <a 
                className='flex flex-row' 
                href='https://www.google.com/maps/place/Asteroid+Cater/@51.4190953,-112.6364045,16z/data=!4m6!3m5!1s0x5373119a740245e9:0xa309123929e08548!8m2!3d51.419363!4d-112.6319842!16s%2Fg%2F1hc33fjnx?entry=ttu' 
                target='_blank' rel='noreferrer'
                >
                  <FaLocationDot className='text-2xl' />

                  <p className='text-base ml-2 underline cursor-pointer'
                  >Google Maps</p>
                </a>

                <a 
                className='flex flex-row' href='https://www.facebook.com/HooDooTrail/' 
                target='_blank' rel='noreferrer'
                >
                  <FaFacebook className='text-2xl' />

                  <p className='text-base ml-2 underline cursor-pointer'
                  >Facebook</p>
                </a>
              </div>
            </div>

            <div className='flex items-center justify-center mt-10'>
              <div className="max-w-xs">
                <div className="flex flex-row items-center gap-5">

                  <div className="flex flex-row">
                    <RiErrorWarningLine className='text-xl mr-2 mt-1' />

                    <p className='text-lg'
                    >Closed for winter
                    </p>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer">
                        <div className='flex flex-col'>
                          <span className="label-text"
                          >View hours
                          </span> 

                          <input 
                          type="checkbox" 
                          className="toggle mt-2"
                          checked={isHoursOpen} 
                          onClick={() => {
                          setIsHoursOpen(!isHoursOpen);
                          }} 
                          />
                        </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {isHoursOpen && (
            <>
              <div className="overflow-x-auto mt-5">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Open</th>
                      <th>Close</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>Sunday</th>
                      <td>11:30am</td>
                      <td>8pm</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>Monday</th>
                      <td>12pm</td>
                      <td>7pm</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                      <th>Tuesday</th>
                      <td>12pm</td>
                      <td>7pm</td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <th>Wednesday</th>
                      <td>11:30am</td>
                      <td>8pm</td>
                    </tr>
                    {/* row 5 */}
                    <tr>
                      <th>Thursday</th>
                      <td>11:30am</td>
                      <td>8pm</td>
                    </tr>
                    {/* row 6 */}
                    <tr>
                      <th>Friday</th>
                      <td>11:30am</td>
                      <td>8pm</td>
                    </tr>
                    {/* row 7 */}
                    <tr>
                      <th>Saturday</th>
                      <td>11:30am</td>
                      <td>8pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
            )}

            <div className='flex items-center justify-center my-12'>
              <p className='text-xl font-bold cursor-pointer tracking-wide'
              onClick={() => {
                setIsHamburgerOpen(false);
              }}
              >Close</p>

              <FaAngleDoubleUp className='ml-2 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default DemoNavbar