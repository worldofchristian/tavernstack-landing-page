import { useState } from 'react'

const SentSupportNotification = () => {
  const [showNotification, setShowNotification] = useState(true);

  function handleCloseNotification() {
    setShowNotification(false);
  }

  return (
    <>
    {showNotification && (
        <div 
        className="w-full">
          <div 
          className="flex mt-4 items-center justify-center">
            <div 
            className="max-w-xs">
              <div 
              className="flex justify-between items-center bg-blue-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md" 
              role="alert">
                
                <div 
                className="flex items-center">
                  <span 
                  className="font-semibold"
                  >Sent!</span>

                </div>
                
                <button 
                onClick={handleCloseNotification}>
                  <svg className="h-6 w-6 text-blue-500 hover:text-blue-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SentSupportNotification