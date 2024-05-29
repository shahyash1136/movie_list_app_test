/* eslint-disable react/prop-types */
const Description = ({ tagline, overview }) => {
  return (
    <>
      <h3 className='tagline' dir='auto'>
        {tagline}
      </h3>
      <h3 dir='auto'>Overview</h3>
      <div className='overview' dir='auto'>
        <p>{overview}</p>
      </div>
    </>
  );
};

export default Description;
