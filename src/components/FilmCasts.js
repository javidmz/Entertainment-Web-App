const FilmCasts = (props) => {
  return (
    <div className="w-full flex flex-col justify-start gap-y-2">
      <div>Casts</div>
      <div className="flex flex-wrap gap-2">
        {props.cast.map((person) => {
          return (
            <div
              key={person.id}
              className="px-2 py-[1px] border-[1px] border-white text-white text-xs rounded-md"
            >
              {person.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilmCasts;
