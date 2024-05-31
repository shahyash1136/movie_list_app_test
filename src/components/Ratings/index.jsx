/* eslint-disable react/prop-types */
import config from "../../common/config";

const Ratings = ({ votePer }) => {
  let barColor;
  if (votePer < 40) {
    barColor = config.Bar_Color.red;
  } else if (votePer > 40 && votePer < 60) {
    barColor = config.Bar_Color.yellow;
  } else {
    barColor = config.Bar_Color.green;
  }
  return (
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
                strokeDasharray={`${votePer}, 100`}
                d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                stroke={`${barColor}`}
                aria-label='circle'></path>
              <text x='18' y='22.35' className='percentage'>
                {votePer}%
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
