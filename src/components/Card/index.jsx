/* eslint-disable react/prop-types */
import moment from "moment";
import Ratings from "../Ratings";

const Card = ({
  poster_path,
  title,
  vote_average,
  release_date,
  id,
  clickHandler,
}) => {
  const votePer = Math.round(vote_average * 10);

  return (
    <div className='card'>
      <div
        className='card__container'
        title={title}
        style={{ cursor: "pointer" }}
        onClick={() => clickHandler(id)}>
        <div className='image'>
          <div className='wrapper'>
            <div className='image'>
              <img
                loading='lazy'
                className='poster'
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
                srcSet={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path} 1x, https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path} 2x`}
                alt={title}
              />
            </div>
          </div>
        </div>
        <div className='content'>
          <Ratings votePer={votePer} />
          <h2 className='one-line-clamp' title={title}>
            {title}
          </h2>
          <p>{moment(release_date).format("MMM DD, YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
