import Movies from "../components/Movies";

export default function Movie() {
  return (
    <div className="w-full h-full flex flex-wrap justify-center p-4 relative">
      {Movies.map((movie, index) => (
        <div key={index} className="w-64 h-96 m-1 relative">
          <div
            className="card bg-base-100 shadow-xl w-full h-full overflow-hidden transition duration-1000 ease-in-out transform hover:scale-y-110 hover:scale-x-110  hover:z-10 hover:drop-shadow-lg"
          >
            <figure className="overflow-hidden w-full h-full">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-details opacity-0 bg-black bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300 hover:opacity-100">
              <h2 className="card-title text-lg font-bold">{movie.title}</h2>
              <p className="text-sm">{movie.category}</p>
              <p className="text-sm">{movie.description}</p>
              <button className="btn btn-primary mt-3">Watch Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
