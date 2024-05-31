/* eslint-disable react/prop-types */
import Ratings from "../Ratings";
import { useOutsideClick } from "../../hook/useOutsideClick";
import SimpleBar from "simplebar-react";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import Poster from "./Poster";
import Crew from "./Crew";
import Cast from "./Cast";
import Title from "./Title";
import Facts from "./Facts";
import Description from "./Description";
import { Suspense } from "react";

const Popup = ({ setShowModal }) => {
  const ref = useOutsideClick(() => {
    setShowModal(false);
  });
  const { isMovieLoading, movieDetails, isMovieCreditLoading, movieCredit } =
    useSelector((state) => state.movies);
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
                    <Suspense fallback={<Loader />}>
                      <Poster {...movieDetails} />
                    </Suspense>
                    <Ratings votePer={votePer} />
                  </div>
                  <SimpleBar autoHide={false} className='movieDetails__bottom'>
                    <section className='header'>
                      <div className='title ott_true' dir='auto'>
                        <Title {...movieDetails} />
                        <Facts {...movieDetails} />
                      </div>
                      <div className='header_info'>
                        <Description {...movieDetails} />
                        <Crew {...movieCredit} />
                      </div>
                    </section>
                    <div className='white_column'>
                      <section className='panel top_billed scroller'>
                        <h3 dir='auto'>Top Billed Cast</h3>
                        <SimpleBar forceVisible='x' autoHide={false}>
                          <Cast {...movieCredit} />
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
