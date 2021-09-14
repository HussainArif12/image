import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
export default function ImageCarousel({ images }) {
  const carousel = useRef();
  const settings = {
    infinite: true,
    customPaging: function (i) {
      return (
        <a>
          <img
            src={images[i].src}
            height="100%"
            width="100%"
            alt={images[i].alt}
          />
        </a>
      );
    },
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true
  };
  console.log(images);
  return (
    <div>
      <button onClick={() => carousel.current.slickGoTo(0)}>Go to start</button>
      <button onClick={() => carousel.current.slickGoTo(images.length - 1)}>
        Go to last
      </button>
      <Slider {...settings} ref={carousel}>
        {images.map((item) => (
          <div key={item.id}>
            {" "}
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
