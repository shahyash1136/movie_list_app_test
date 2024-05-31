const CardSkeleton = () => {
  return (
    <div className='card skeleton' data-testid='skeleton-card'>
      <div className='card__container'>
        <div
          className='image skeleton-image'
          data-testid='skeleton-image'></div>
        <div className='content'>
          <div className='consensus tight'>
            <div className='outer_ring'>
              <div className='user_score_chart'>
                <div
                  className='percent skeleton-info'
                  data-testid='skeleton-info'></div>
              </div>
            </div>
          </div>
          <h2
            className='one-line-clamp skeleton-title'
            data-testid='skeleton-title'></h2>
          <p className='skeleton-info' data-testid='skeleton-info'></p>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
