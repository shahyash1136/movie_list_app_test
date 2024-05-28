/* eslint-disable react/prop-types */
import Ratings from "../Ratings";
import { MdTimer, MdOutlineCalendarMonth, MdMovieFilter } from "react-icons/md";
import { useOutsideClick } from "../../hook/useOutsideClick";
import SimpleBar from "simplebar-react";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import userPlaceholder from "../../assets/user_placeholder.svg";

const Popup = ({ setShowModal }) => {
  const ref = useOutsideClick(() => {
    setShowModal(false);
  });
  const { isMovieLoading, movieDetails, isMovieCreditLoading, movieCredit } =
    useSelector((state) => state.movies);
  function convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}hr ${remainingMinutes}min`;
  }
  const votePer = Math.round(movieDetails.vote_average * 10);

  return (
    <div className='popup active'>
      <div className='popup-modal animated movieDetails'>
        <div className='popup-modal-bg' ref={ref}>
          {isMovieLoading && isMovieCreditLoading ? (
            <Loader />
          ) : (
            <>
              <div
                className='popup-header'
                style={{
                  position: "absolute",
                  width: "30px",
                  height: "30px",
                  right: "-15px",
                  top: "-15px",
                  background: "white",
                  borderRadius: "50%",
                }}>
                <MdCancel
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                  onClick={() => setShowModal(false)}
                />
              </div>
              <div className='popup-body'>
                <div className='movieDetails__container'>
                  <div className='movieDetails__top'>
                    <div className='poster'>
                      <div
                        className='image_content backdrop'
                        style={{
                          backgroundImage: `url('https://media.themoviedb.org/t/p/w1000_and_h450_multi_faces/${movieDetails.backdrop_path}')`,
                        }}>
                        <div
                          className='background_gradient'
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) 20%, rgba(31.5, 10.5, 10.5, 0) 50%)",
                          }}></div>
                        <div
                          className='blurred'
                          style={{
                            backgroundImage: `url(https://media.themoviedb.org/t/p/w220_and_h330_multi_faces_filter(blur)/${movieDetails.poster_path})`,
                          }}>
                          <img
                            className='poster w-full'
                            src={`https://media.themoviedb.org/t/p/w116_and_h174_face/${movieDetails.poster_path}`}
                            srcSet={`https://media.themoviedb.org/t/p/w116_and_h174_face/${movieDetails.poster_path} 1x, https://media.themoviedb.org/t/p/w220_and_h330_face/${movieDetails.poster_path} 2x`}
                            alt={movieDetails.original_title}
                          />
                        </div>
                      </div>
                    </div>
                    <Ratings votePer={votePer} />
                  </div>
                  <SimpleBar autoHide={false} className='movieDetails__bottom'>
                    <section className='header'>
                      <div className='title ott_true' dir='auto'>
                        <div className='mobile_header large'>
                          <h2>
                            {movieDetails.original_title}{" "}
                            <span className='release_date'>
                              (
                              {new Date(
                                movieDetails.release_date
                              ).getFullYear()}
                              )
                            </span>
                          </h2>
                        </div>
                        <div className='genre_wrapper'>
                          <div className='facts'>
                            <span className='release'>
                              <MdOutlineCalendarMonth />
                              <em>{movieDetails.release_date}</em>
                            </span>
                            <span className='genres'>
                              <MdMovieFilter />
                              <em>
                                {movieDetails.genres.map((genre, index) => {
                                  if (
                                    movieDetails.genres.length !==
                                    index + 1
                                  ) {
                                    return `${genre.name}, `;
                                  } else {
                                    return genre.name;
                                  }
                                })}
                              </em>
                            </span>
                            <span className='runtime'>
                              <MdTimer />
                              <em>
                                {convertMinutesToHoursAndMinutes(
                                  movieDetails.runtime
                                )}
                              </em>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='header_info'>
                        <h3 className='tagline' dir='auto'>
                          {movieDetails.tagline}
                        </h3>
                        <h3 dir='auto'>Overview</h3>
                        <div className='overview' dir='auto'>
                          <p>{movieDetails.overview}</p>
                        </div>

                        <ol className='people no_image'>
                          {movieCredit?.crew
                            ?.filter((el) => {
                              return (
                                el.job === "Writer" || el.job === "Director"
                              );
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
                      </div>
                    </section>
                    <div className='white_column'>
                      <section className='panel top_billed scroller'>
                        <h3 dir='auto'>Top Billed Cast</h3>
                        <SimpleBar forceVisible='x' autoHide={false}>
                          <div className='card__container'>
                            {movieCredit?.cast?.map((el) => {
                              return (
                                <div className='card' key={el.id}>
                                  <div className='card__people'>
                                    <div className='image'>
                                      <div className='wrapper'>
                                        <div className='image' title={el.name}>
                                          <img
                                            loading='lazy'
                                            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.profile_path}`}
                                            onError={(e) => {
                                              e.target.onerror = null; // Prevent infinite loop if placeholder fails
                                              e.target.src = userPlaceholder;
                                            }}
                                            alt={el.name}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className='meta'>
                                      <p className='name'>{el.name}</p>
                                      <p className='character'>
                                        {el.character}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </SimpleBar>
                      </section>
                    </div>
                  </SimpleBar>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
