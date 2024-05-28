import React, { useEffect, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SimpleBar from "simplebar-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovies,
  resetMovies,
} from "../store/Fetures/MoviesSlice";
import YearWiseList from "../components/YearWiseList";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Popup from "../components/Popup";

const Home = () => {
  const { isLoading, groupedMovies } = useSelector((state) => state.movies);
  const { selectedGenre } = useSelector((state) => state.genre);
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const listRef = useRef(null);
  const [startYear, setStartYear] = useState(2012);
  const [endYear, setEndYear] = useState(2012);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(resetMovies()); // Reset movies and state
    setStartYear(2012); // Reset start year
    setEndYear(2012); // Reset end year
    if (listRef.current) {
      listRef.current.scrollTop = 0; // Reset scroll position
    }
    dispatch(fetchMovies({ year: "2012", genre: selectedGenre }));
  }, [selectedGenre, dispatch]);

  const handleScroll = useCallback(
    (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;

      if (scrollTop === 0 && !isLoading) {
        const previousYear = startYear - 1;
        if (previousYear > 1900 && !groupedMovies[previousYear]) {
          setStartYear(previousYear);
          dispatch(fetchMovies({ year: previousYear, genre: selectedGenre }));
        }
      } else if (scrollHeight - scrollTop === clientHeight && !isLoading) {
        const nextYear = endYear + 1;
        if (nextYear <= currentYear && !groupedMovies[nextYear]) {
          setEndYear(nextYear);
          dispatch(fetchMovies({ year: nextYear, genre: selectedGenre }));
        }
      }
    },
    [
      startYear,
      endYear,
      groupedMovies,
      isLoading,
      selectedGenre,
      dispatch,
      currentYear,
    ]
  );

  const cardClickHandler = (id) => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieCredits(id));
    setShowModal(true);
  };

  return (
    <SimpleBar
      className='movieList'
      autoHide={false}
      scrollableNodeProps={{ ref: listRef, onScroll: handleScroll }}>
      <div className='main__container'>
        {isLoading && <Loader />}
        {Object.keys(groupedMovies).map((year) => (
          <React.Fragment key={year}>
            <YearWiseList year={year} />
            <div className='list__container'>
              {groupedMovies[year].map((movie) => (
                <Card
                  key={movie.id}
                  {...movie}
                  clickHandler={cardClickHandler}
                />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
      {showModal &&
        createPortal(
          <Popup setShowModal={setShowModal} showModal={showModal} />,
          document.body
        )}
    </SimpleBar>
  );
};

export default Home;
