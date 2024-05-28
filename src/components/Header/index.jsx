import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenre, setSelectedGenre } from "../../store/Fetures/GenreSlice";
import LogoSection from "./LogoSection";
import MultiselectDropdown from "./MultiselectDropdown";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoading, genre } = useSelector((state) => state.genre);

  useEffect(() => {
    dispatch(fetchGenre());
  }, []);

  const genreSelectHandler = (data) => {
    dispatch(setSelectedGenre(data.join(",")));
  };

  return (
    <header className='header'>
      <div className='main__container'>
        <div className='header__container'>
          <LogoSection />
          <div className='header__filters'>
            <MultiselectDropdown
              name={"Genre"}
              options={genre}
              loading={isLoading}
              onOptionChange={genreSelectHandler}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
