const Card = () => {
  return (
    <div className='card'>
      <div className='card__container'>
        <div className='image'>
          <div className='wrapper'>
            <a
              className='image'
              title='Furiosa: A Mad Max Saga'
              href='/movie/786892'>
              <img
                loading='lazy'
                className='poster'
                src='https://www.themoviedb.org/t/p/w220_and_h330_face/pKaA8VvfkNfEMUPMiiuL5qSPQYy.jpg'
                srcSet='https://www.themoviedb.org/t/p/w220_and_h330_face/pKaA8VvfkNfEMUPMiiuL5qSPQYy.jpg 1x, https://www.themoviedb.org/t/p/w440_and_h660_face/pKaA8VvfkNfEMUPMiiuL5qSPQYy.jpg 2x'
                alt='Furiosa: A Mad Max Saga'
              />
            </a>
          </div>
        </div>
        <div className='content'>
          <div className='consensus tight'>
            <div className='outer_ring'>
              <div className='user_score_chart'>
                <div className='percent'>
                  <svg viewBox='0 0 36 36' className='circular-chart'>
                    <path
                      className='circle-bg'
                      d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'></path>
                    <path
                      className='circle'
                      strokeDasharray='76, 100'
                      d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                      stroke='#21d07a'></path>
                    <text x='18' y='22.35' className='percentage'>
                      76%
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <h2>
            <a title='Furiosa: A Mad Max Saga' href='/movie/1930'>
              Furiosa: A Mad Max Saga
            </a>
          </h2>
          <p>May 22, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
