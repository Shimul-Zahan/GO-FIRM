import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Image,
    ButtonPlay,
    DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
    MdChevronLeft,
    MdChevronRight,
    MdOutlinePauseCircle,
    MdOutlinePlayCircleOutline,
} from "react-icons/md";
import "./style.css";
import { useEffect, useState } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
// import { li } from "react-router-dom";
// images here
import banner1 from '../assets/banSlider/image1.png';
import banner2 from '../assets/heroBanner/image2.jpg';

const BannerSlider = () => {
    const [slide, setSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handleBackClick = () => {
        setSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
    };

    const handleNextClick = () => {
        setSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    };

    const renderDotButtons = () => {
        const totalSlides = 4;
        const dots = [];
        for (let i = 0; i < totalSlides; i++) {
            dots.push(
                slide === i ? (
                    <GoDotFill
                        size="2.5em"
                        key={i}
                        onClick={() => setSlide(i)}
                        className="cursor-pointer"
                    />
                ) : (
                    <GoDot
                        size="2.5em"
                        key={i}
                        onClick={() => setSlide(i)}
                        className="cursor-pointer"
                    />
                )
            );
        }
        return dots;
    };

    return (
        <li className="pb-10">
            <div className="w-full cursor-pointer ">
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={4}
                    step={1}
                    naturalSlideWidth={1000}
                    naturalSlideHeight={350}
                    hasMasterSpinner
                    currentSlide={slide}
                    isPlaying={isPlaying}
                >
                    <Slider className="slider">
                        <Slide index={0}>
                            <Image src={banner1} />
                        </Slide>
                        <Slide index={1}>
                            <Image src={banner2} />
                            {/* <div className="slide-text ">
                                <h2 className="lg:text-7xl font-medium lg:mb-8 text-white">
                                    Unlock your potential with <br /> Microsoft Copilot{" "}
                                </h2>
                                <p className="lg:text-2xl font-medium text-white mb-9">
                                    Get things done faster and unleash your creativity with the
                                    power <br /> of AI anywhere you go.{" "}
                                </p>
                                <li to="/" className="bg-blue-800 p-3 text-white lg:text-3xl">
                                    Download the Copiolot app
                                </li>
                            </div> */}
                        </Slide>
                        <Slide index={2}>
                            <Image src={banner1} />

                        </Slide>
                        <Slide index={3}>
                            <Image src={banner2} />
                            {/* <div className="slide-text ">
                                <h2 className="lg:text-7xl font-medium lg:mb-8 text-white">
                                    Unlock your potential with <br /> Microsoft Copilot{" "}
                                </h2>
                                <p className="lg:text-2xl font-medium text-white mb-9">
                                    Get things done faster and unleash your creativity with the
                                    power <br /> of AI anywhere you go.{" "}
                                </p>
                                <li to="/" className="bg-blue-800 p-3 text-white lg:text-3xl">
                                    Download the Copiolot app
                                </li>
                            </div> */}
                        </Slide>
                    </Slider>
                    <div className="flex justify-center items-center gap-5 mt-10 dark:text-white">
                        <ButtonPlay
                            childrenPlaying={<MdOutlinePauseCircle size="1.7em" />}
                            childrenPaused={<MdOutlinePlayCircleOutline size="1.7em" />}
                            onClick={() => setIsPlaying(!isPlaying)}
                        />
                        <ButtonBack onClick={handleBackClick}>
                            <MdChevronLeft size="1.7em" />
                        </ButtonBack>
                        <DotGroup renderDots={renderDotButtons} className="flex gap-5" />
                        <ButtonNext onClick={handleNextClick}>
                            <MdChevronRight size="1.7em" />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </li>
    );
};

export default BannerSlider;
