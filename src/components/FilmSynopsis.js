const FilmSynopsis = (props) => {
  return (
    <div>
      <div className="text-base font-semibold">Synopsis</div>
      <div className="mt-2 text-sm">{props.overview}</div>
    </div>
  );
};

export default FilmSynopsis;
