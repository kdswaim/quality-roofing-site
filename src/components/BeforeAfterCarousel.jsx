import React, { useContext, useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, CarouselContext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import "../styles/WidgetStyles.css";

const Pagination = () => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    if (carouselContext) {
      const onChange = () => setCurrentSlide(carouselContext.state.currentSlide + 1);
      carouselContext.subscribe(onChange);
      return () => carouselContext.unsubscribe(onChange);
    }
  }, [carouselContext]);

  return <span><p className="text-base font-serif">{currentSlide}/4</p></span>;
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const descriptions = [
"This Clinton home was repaired by our crew after suffering storm damage.",
"A new Pinnacle Coastal Granite boosted the curb appeal of this Northern Vigo County home.",
"Oyster-hued roof delivery for new construction.",
"No job is too complicated for our expert crew."];

const carouselContext = useContext(CarouselContext);

useEffect(() => {
  if (carouselContext) {
    const onChange = () => setCurrentSlide(carouselContext.state.currentSlide);
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }
}, [carouselContext]);

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={75}
      totalSlides={4}
      infinite
      lockOnWindowScroll
    >
      <Slider>
        <Slide index={0}>
          <ImgComparisonSlider direction="vertical">
            <figure slot="first" className="before">
              <img
                className="size-full"
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/dqfotf1jf/image/upload/t_Uniform Slider Crop/v1728330009/370845108_966717744407947_9059833859288129335_n_qckxhg.jpg"
                alt="A home in Clinton that has suffered storm damage."
              />
              <figcaption>Before</figcaption>
            </figure>
            <figure slot="second" className="after">
              <img
                className="size-full"
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/dqfotf1jf/image/upload/t_Uniform Slider Crop/v1728330009/371895178_966717781074610_7909843538845987595_n_mzodol.jpg"
                alt="The same home in Clinton, fixed as if the storm had never happened."
              />
              <figcaption>After</figcaption>
            </figure>
          </ImgComparisonSlider>
        </Slide>

        <Slide index={1}>
          <ImgComparisonSlider direction="vertical">
            <figure slot="first" className="before">
              <img
                className="size-full"
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/dqfotf1jf/image/upload/t_Uniform Slider Crop/v1728389887/SlideTwo_before_uts8lm.jpg"
                alt="Before Slide 2"
              />
              <figcaption>Before</figcaption>
            </figure>
            <figure slot="second" className="after">
              <img
                className="size-full"
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/dqfotf1jf/image/upload/t_Uniform Slider Crop/v1728389887/SlideTwo_after_kapjlx.jpg"
                alt="After Slide 2"
              />
              <figcaption>After</figcaption>
            </figure>
          </ImgComparisonSlider>
        </Slide>

        <Slide index={2}>
          <ImgComparisonSlider direction="vertical">
            <figure slot="first" className="before">
              <img
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/dqfotf1jf/image/upload/t_Uniform Slider Crop/v1728389887/SlideThree_before_ygb4el.jpg"
                alt="Before Slide 3"
              />
              <figcaption>Before</figcaption>
            </figure>
            <figure slot="second" className="after">
              <img
                width="100%"
                height="100%" 
                src="https://res.cloudinary.com/dqfotf1jf/image/upload/t_Uniform Slider Crop/v1728389887/SlideThree_after_oeulz5.jpg"
                alt="After Slide 3"
              />
              <figcaption>After</figcaption>
            </figure>
          </ImgComparisonSlider>
        </Slide>

        <Slide index={3}>
          <ImgComparisonSlider direction="vertical">
            <figure slot="first" className="before">
              <img
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/dqfotf1jf/image/upload/t_Uniform Slider Crop/v1728389887/slidefour_before_j6qeqe.jpg"
                alt="Before Slide 4"
              />
              <figcaption>Before</figcaption>
            </figure>
            <figure slot="second" className="after">
              <img
                width="100%"
                height="100%" 
                src="https://res.cloudinary.com/dqfotf1jf/image/upload/t_Uniform Slider Crop/v1728389887/gdome-after_bngbyu.jpg"
                alt="After Slide 4"
              />
              <figcaption>After</figcaption>
            </figure>
          </ImgComparisonSlider>
        </Slide>
      </Slider>

      <div className="flex justify-between p-4 align-middle">
        <div id="pagination" class=" ">
          <Pagination />
        </div>

        <div id="slide-description" class="">
        <p className="font-serif text-base">{descriptions[currentSlide]}</p>
        </div>
        
        
        <div className="w-20 flex justify-between">
          <ButtonBack>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 20 20">
              <path fill="#212121" d="m2 10l8 8l1.4-1.4L5.8 11H18V9H5.8l5.6-5.6L10 2z"/>
            </svg>
          </ButtonBack>
          <ButtonNext>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 20 20">
              <path fill="#212121" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/>
            </svg>
          </ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
