import List from "../components/List";
import YearWiseList from "../components/YearWiseList";

const Home = () => {
  return (
    <div className='movieList'>
      <div className='main__container'>
        <YearWiseList />
        <List />
      </div>
    </div>
  );
};

export default Home;
