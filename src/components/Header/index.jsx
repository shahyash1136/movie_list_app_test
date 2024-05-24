import LogoSection from "./LogoSection";
import Tabs from "./Tabs";

const Header = () => {
  return (
    <header className='header'>
      <div className='main__container'>
        <div className='header__container'>
          <LogoSection />
          <Tabs />
        </div>
      </div>
    </header>
  );
};

export default Header;
