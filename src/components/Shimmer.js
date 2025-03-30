const Shimmer = () => {
    return (
      <div className="p-4">
        {/* Shimmer for Search Bar & Filter Button */}
        <div className="flex gap-4 mb-6">
          <div className="shimmer-search w-60 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="shimmer-button w-40 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
  
        {/* Shimmer for Restaurant Cards */}
        <div className="shimmer-container flex flex-wrap gap-4">
          {Array(8).fill("").map((_, index) => (
            <div
              key={index}
              className="shimmer-card m-4 p-4 w-60 h-72 rounded-lg bg-gray-100 hover:bg-gray-200 animate-pulse"
            >
              {/* Image Placeholder */}
              <div className="w-full h-36 bg-gray-300 rounded-lg"></div>
  
              {/* Title Placeholder */}
              <div className="mt-4 h-4 w-48 bg-gray-300 rounded"></div>
  
              {/* Description Placeholder */}
              <div className="mt-2 h-4 w-40 bg-gray-300 rounded"></div>
              <div className="mt-2 h-4 w-32 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  