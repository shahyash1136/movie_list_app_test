/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import posterHolder from "../../assets/images.png";
import bgPosterHolder from "../../assets/poster.jpg";

const Poster = ({ backdrop_path, poster_path, original_title }) => {
  const [backgroundImage, setBackgroundImage] = useState("");
  useEffect(() => {
    const img = new Image();
    const imageUrl = `https://media.themoviedb.org/t/p/w1000_and_h450_multi_faces/${backdrop_path}`;

    img.onload = () => setBackgroundImage(imageUrl);
    img.onerror = () => setBackgroundImage(bgPosterHolder);
    img.src = imageUrl;
  }, [backdrop_path]);
  return (
    <div className='poster'>
      <div
        className='image_content backdrop'
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}>
        <div
          className='background_gradient'
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) 20%, rgba(31.5, 10.5, 10.5, 0) 50%)",
          }}></div>
        <div
          className='blurred'
          style={{
            backgroundImage: `url(https://media.themoviedb.org/t/p/w220_and_h330_multi_faces_filter(blur)/${poster_path})`,
          }}>
          <img
            className='poster w-full'
            src={`https://media.themoviedb.org/t/p/w116_and_h174_face/${poster_path}`}
            alt={original_title}
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop if placeholder fails
              e.target.src = posterHolder;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Poster;
