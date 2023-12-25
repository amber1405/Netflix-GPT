import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter} from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

{/* <div className="p-6">
<div className="font-semibold text-3xl m-4">
  <h1>{title}</h1>
</div>
<div className="flex overflow-x-scroll ">
  <div className="flex m-4">
    {movies.map((movie) => (
      <MovieCard key={movie.id} posterPath={movie.poster_path} />
    ))}
  </div>
</div>
</div> */}