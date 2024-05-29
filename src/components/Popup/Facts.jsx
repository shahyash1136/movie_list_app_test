/* eslint-disable react/prop-types */
import { MdMovieFilter, MdOutlineCalendarMonth, MdTimer } from "react-icons/md";

const Facts = ({ release_date, genres, runtime }) => {
  function convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}hr ${remainingMinutes}min`;
  }
  return (
    <div className='genre_wrapper'>
      <div className='facts'>
        <span className='release'>
          <MdOutlineCalendarMonth />
          <em>{release_date}</em>
        </span>
        <span className='genres'>
          <MdMovieFilter />
          <em>
            {genres?.map((genre, index) => {
              if (genres.length !== index + 1) {
                return `${genre.name}, `;
              } else {
                return genre.name;
              }
            })}
          </em>
        </span>
        <span className='runtime'>
          <MdTimer />
          <em>{convertMinutesToHoursAndMinutes(runtime)}</em>
        </span>
      </div>
    </div>
  );
};

export default Facts;
