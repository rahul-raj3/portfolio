'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import {Button} from "@heroui/react";

const Trending = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };

  const cards = Array.from({ length: 5 }).map((_, index) => (
    <div key={index} className="w-full">
      <Card className="py-4 w-full h-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-full"
            src="https://mediacdn.99acres.com/media1/11848/1/236961707D-1594715125517.jpg"
          />
        </CardBody>
      </Card>
    </div>
  ));

  return (
<div>
  <h1
    className="
      block
      text-xl sm:text-4xl md:text-5xl lg:text-4xl
      font-bold

      text-gray-800 dark:text-white
      py-2
      text-center
      mt-10
      px-4 sm:px-8 lg:px-16
      max-w-5xl mx-auto
    "
  >
    Explore Learning Paths & Topics
  </h1>

  <p
    className="
      block
      text-md
      text-gray-600 dark:text-white
      py-0
      px-4 sm:px-8 lg:px-16
      text-center
      max-w-4xl mx-auto
      leading-relaxed
    "
  >
Discover new skills to boost your career and personal growth.
  </p>

  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    autoPlay={true}
    centerMode={false}
    className="py-10"
    containerClass="container-with-dots w-full mx-auto px-4 sm:px-8 lg:px-0"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass="px-2 sm:px-4"
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover={true}
    responsive={responsive} // Make sure your responsive config is set correctly
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
    {/* Card 1 */}
    <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden"
      style={{
        minHeight: '320px',
        height: '450px',
        backgroundImage:
          'url(/courses/dsa_img.png)',
      }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />

      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a
          href="#"
          className="text-xs bg-green-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-green-600 transition duration-500 rounded"
        >
          NEw
        </a>
        <div className="text-white flex flex-col justify-start text-center">
          <span className="text-3xl font-semibold">DSA</span>
          {/* <span className="-mt-3">May</span> */}
        </div>
      </div>

      {/* Button at Bottom Center */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <button
          className="text-md tracking-tight font-medium leading-7 text-white hover:underline bg-yellow-700 px-6 py-2 rounded-full"
        >
          View Details
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden"
      style={{
        minHeight: '320px',
        height: '450px',
        backgroundImage:
          'url(/courses/react.png)',
      }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />

      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a
          href="#"
          className="text-xs bg-green-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-green-600 transition duration-500 rounded"
        >
          NEw
        </a>
        <div className="text-white flex flex-col justify-start text-center">
          <span className="text-3xl font-semibold">React.js</span>
          {/* <span className="-mt-3">May</span> */}
        </div>
      </div>

      {/* Button at Bottom Center */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <button
          className="text-md tracking-tight font-medium leading-7 text-white hover:underline bg-yellow-700 px-6 py-2 rounded-full"
        >
          View Details
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden"
      style={{
        minHeight: '320px',
        height: '450px',
        backgroundImage:
          'url(/courses/node.png)',
      }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />

      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a
          href="#"
          className="text-xs bg-green-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-green-600 transition duration-500 rounded"
        >
          NEw
        </a>
        <div className="text-white flex flex-col justify-start text-center">
          {/* <span className="text-3xl font-semibold">Node.js</span> */}
          {/* <span className="-mt-3">May</span> */}
        </div>
      </div>

      {/* Button at Bottom Center */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <button
          className="text-md tracking-tight font-medium leading-7 text-white hover:underline bg-yellow-700 px-6 py-2 rounded-full"
        >
          View Details
        </button>
      </div>
    </div>

    {/* Card 4 */}
    <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden"
      style={{
        minHeight: '320px',
        height: '450px',
        backgroundImage:
          'url(/courses/mongodb.png)',
      }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />

      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a
          href="#"
          className="text-xs bg-green-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-green-600 transition duration-500 rounded"
        >
          NEw
        </a>
        <div className="text-white flex flex-col justify-start text-center">
          {/* <span className="text-3xl font-semibold">Mongodb</span> */}
          {/* <span className="-mt-3">May</span> */}
        </div>
      </div>

      {/* Button at Bottom Center */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <button
          className="text-md tracking-tight font-medium leading-7 text-white hover:underline bg-yellow-700 px-6 py-2 rounded-full"
        >
          View Details
        </button>
      </div>
    </div>

    {/* card 5 */}
        <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden"
      style={{
        minHeight: '320px',
        height: '450px',
        backgroundImage:
          'url(/courses/mysql.png)',
      }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />

      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a
          href="#"
          className="text-xs bg-green-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-green-600 transition duration-500 rounded"
        >
          NEw
        </a>
        <div className="text-white flex flex-col justify-start text-center">
          <span className="text-3xl font-semibold">MYsql</span>
          {/* <span className="-mt-3">May</span> */}
        </div>
      </div>

      {/* Button at Bottom Center */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <button
          className="text-md tracking-tight font-medium leading-7 text-white hover:underline bg-yellow-700 px-6 py-2 rounded-full"
        >
          View Details
        </button>
      </div>
    </div>
        {/* card 6 */}
        <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center rounded-lg overflow-hidden"
      style={{
        minHeight: '320px',
        height: '450px',
        backgroundImage:
          'url(/courses/express.png)',
      }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />

      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a
          href="#"
          className="text-xs bg-green-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-green-600 transition duration-500 rounded"
        >
          NEw
        </a>
        <div className="text-white flex flex-col justify-start text-center">
          <span className="text-3xl font-semibold">Express Js</span>
          {/* <span className="-mt-3">May</span> */}
        </div>
      </div>

      {/* Button at Bottom Center */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <button
          className="text-md tracking-tight font-medium leading-7 text-white hover:underline bg-yellow-700 px-6 py-2 rounded-full"
        >
          View Details
        </button>
      </div>
    </div>
  </Carousel>
</div>



  );
};

export default Trending;
