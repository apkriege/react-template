import { useQuery } from "@tanstack/react-query";
import { getFilms } from "@api/films";

export default function Films() {
  const {
    data: films,
    status,
    error,
  } = useQuery({
    queryKey: ["films"],
    queryFn: getFilms,
    staleTime: 1000 * 60 * 3,
  });

  console.log(films, status, error);

  return (
    <div className="flex flex-col p-5">
      <h1 className="mb-5 text-4xl text-white">Movies</h1>
      <div className="text-white">
        {status === "pending" && <p>Loading...</p>}
        {status === "error" && <p>Error: {error.message}</p>}
        {status === "success" && (
          <ul>
            {films.map((film: any) => (
              <li key={film.episode_id}>{film.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
