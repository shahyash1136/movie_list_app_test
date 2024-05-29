/* eslint-disable react/prop-types */
const Title = ({ original_title, release_date }) => {
  return (
    <div className='mobile_header large'>
      <h2>
        {original_title}{" "}
        <span className='release_date'>
          ({new Date(release_date).getFullYear()})
        </span>
      </h2>
    </div>
  );
};

export default Title;
