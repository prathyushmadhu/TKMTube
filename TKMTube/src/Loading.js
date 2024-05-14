import Lottie from 'react-lottie';
import animationData from './your-animation.json'; // Replace with your animation data
import './Loading.css';
function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="loading">
      <Lottie options={defaultOptions} style={{ height: '100vh', width: '100vw' }} />

    </div>
  );
}
export default Loading;