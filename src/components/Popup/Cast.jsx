/* eslint-disable react/prop-types */
import { Suspense } from "react";
import userPlaceholder from "../../assets/user_placeholder.svg";
import Loader from "../Loader";
const Cast = ({ cast }) => {
  return (
    <div className='card__container'>
      {cast?.map((el) => {
        return (
          <Suspense fallback={<Loader />} key={el.id}>
            <div className='card'>
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
                  <p className='name' title={el.name}>
                    {el.name}
                  </p>
                  <p className='character' title={el.character}>
                    {el.character}
                  </p>
                </div>
              </div>
            </div>
          </Suspense>
        );
      })}
    </div>
  );
};

export default Cast;
