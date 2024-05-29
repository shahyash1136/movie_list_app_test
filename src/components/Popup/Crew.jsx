/* eslint-disable react/prop-types */
const Crew = ({ crew }) => {
  return (
    <ol className='people no_image'>
      {crew
        ?.filter((el) => {
          return el.job === "Writer" || el.job === "Director";
        })
        .map((el) => {
          return (
            <li className='profile' key={el.id}>
              <p>{el.name}</p>
              <p className='character'>{el.job}</p>
            </li>
          );
        })}
    </ol>
  );
};

export default Crew;
