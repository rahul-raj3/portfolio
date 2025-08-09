const Subscribe = () => {
    return (
        <>
<div className="flex flex-col lg:flex-row w-full bg-gray-800 py-6">
  <div className="w-full">
    <div className="flex flex-col lg:flex-row px-4 md:px-8 w-full text-left rounded dark:border-gray-700">
      
      <div className="flex-1 mb-5 md:mb-0 md:pr-5 lg:pr-10">
        <h3 className="mb-2 text-lg font-bold text-white dark:text-gray-200 tracking-wider">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-300 dark:text-gray-700">
          Provide your email to get email notification when we
          publish new articles
        </p>
      </div>

      <div className="flex items-center justify-start md:justify-end w-full md:w-auto lg:w-1/2 mt-4 lg:mt-0">
        <form className="w-full flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email address" 
            defaultValue=""
            className="flex-1 px-4 py-2 placeholder-gray-300 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" 
          />

          <button
            type="submit"
            className="text-md tracking-wider px-6 py-3 text-black text-lg bg-white rounded-full whitespace-nowrap dark:bg-gray-900"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>
  </div>
</div>


        </>
    );
};

export default Subscribe;
