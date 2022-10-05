import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "../../../../../public/public";
import "./HomeSlider.css";

const SimpleSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 0,
    },
  };
  return (
    <div className="swapper">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        <div className="swapper5">
          <img src={Image.bannter} alt="slider1" className="img" />
        </div>
        <div className="swapper5">
        <img src={Image.bannter} alt="slider1" className="img" />
        </div>
        <div className="swapper5">
        <img src={Image.bannter} alt="slider1" className="img" />
        </div>
      </Carousel>
    </div>
  );
};

export default SimpleSlider;
