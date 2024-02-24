import { useEffect } from 'react';

const Example = () => {
  useEffect(() => {
    // Dynamically create a script element
    const script = document.createElement('script');

    // Set the source URL of the Lottie Player library
    script.src = 'https://cdn.jsdelivr.net/npm/@lottiefiles/lottie-player@latest/dist/lottie-player.js';

    // Set the script to be loaded asynchronously
    script.async = true;

    // Append the script to the body of the document
    document.body.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section 
      className="py-6 min-h-screen bg-primary-content">
        <div 
        className="container mt-20 mb-40 mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <lottie-player
            src="https://assets9.lottiefiles.com/private_files/lf30_spqeegue.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></lottie-player>
          
          <h1 
          className="text-4xl lg:text-5xl font-extrabold leading-none text-center"
          >Try it out</h1>

          <p 
          className="pt-2 pb-8 text-lg lg:text-xl font-regular text-center"
          >See it in action, no sign up required</p>

          <a 
          href="https://demo.tavernstack.com/"
          target='_blank'
          rel='noreferrer'
          >
            <button 
            className="px-8 py-3 text-lg font-semibold rounded-full bg-gray-100 text-gray-900"
            >View demo</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Example;
