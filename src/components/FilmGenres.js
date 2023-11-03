const FilmGenres = (props) => {
  return (
    <div className="w-full flex flex-col justify-start gap-y-2">
      <div>Genres</div>
      <div className="flex gap-2">
        {props.genres.map((genre) => {
          return (
            <div
              key={genre.id}
              className="px-2 py-[2px] bg-white text-blue-900 text-xs rounded-md font-semibold"
            >
              {genre.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilmGenres;
