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
//     <section className="">
//   <div className="container px-10 py-5 mx-auto">
//         <h1 
//     className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-3xl dark:text-white py-8
//     text-center
//     ">
//         Explore Real Estate in Popular Indian Cities
//     </h1>
//     <Carousel
//       additionalTransfrom={0}
//       arrows
//       autoPlaySpeed={3000}
//       autoPlay={false}
//       centerMode={false}
//       className="bg-white"
//       containerClass="container-with-dots"
//       dotListClass=""
//       draggable
//       focusOnSelect={false}
//       infinite
//       itemClass="px-2 py-2" // spacing between cards
//       keyBoardControl
//       minimumTouchDrag={80}
//       pauseOnHover
//       responsive={responsive}
//       rewind={false}
//       rewindWithAnimation={false}
//       rtl={false}
//       shouldResetAutoplay
//       showDots={false}
//       sliderClass=""
//       slidesToSlide={1}
//       swipeable
//     >
//       {cards}
//     </Carousel>
//       </div>
// </section>   

<>
        <h1 
    className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-3xl dark:text-white py-8
    text-center mt-10
    ">
        Explore Real Estate in Popular Indian Cities
    </h1>
    <p className="block text-md text-gray-600 sm:text-md md:text-md lg:text-md dark:text-white py-2 px-30
    text-center">
    Find specialized joint supports and mobility aids from Leeford Ortho, designed to address concerns across various 
joints. Whether you seek support for your knees, ankles, wrists, shoulders, or other areas, our range of orthopedic 
products offers solutions for enhanced stability, pain relief, and improved 
movement. Explore targeted support for your specific needs.
    </p>

    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      autoPlay={true}
      centerMode={false}
      className="bg-white"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="px-0 py-10" // spacing between cards
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover={true}
      responsive={responsive}
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
  className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
  style={{
    height: '450px',
    backgroundImage: `url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)`,
  }}
>
  <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />

  <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
    <a
      href="#"
      className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
    >
      Politics
    </a>
    <div className="text-white font-regular flex flex-col justify-start">
      <span className="text-3xl font-semibold">25</span>
      <span className="-mt-3">May</span>
    </div>
  </div>

  {/* ✅ Button at Bottom Center */}
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
    <Button
      color="primary"
      variant="bordered"
      className="text-md tracking-tight font-medium leading-7 text-white hover:underline"
    >
      View Details
    </Button>
  </div>
</div>



    {/* Card 2 */}
    <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
      style={{
        height: '450px',
        backgroundImage: `url(https://media.gettyimages.com/photos/ashraf-ghani-afghanistans-president-speaks-at-the-council-on-foreign-picture-id850794338?k=6&m=850794338&s=612x612&w=0&h=b_XBw5S38Cioslqr6VL3e36cWQU205IsInqDXZpDOD4=)`,
      }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a
          href="#"
          className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
        >
          Politics
        </a>
        <div className="text-white font-regular flex flex-col justify-start">
          <span className="text-3xl font-semibold">10</span>
          <span className="-mt-3">Mar</span>
        </div>
      </div>
      <main className="p-5 z-10">
        <a
          href="#"
          className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
        >
          Afghanistan's President Ashraf Ghani Speaks At The Council
        </a>
      </main>
    </div>

    {/* Card 3 */}
    <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
      style={{
        height: '450px',
        backgroundImage: `url(https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-arrives-to-the-welcoming-ceremony-the-picture-id694155252?k=6&m=694155252&s=612x612&w=0&h=IIJPetzJL-hAgPkE4hm2wUKvO4YOav8jJp484CgLEUs=)`,
      }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a
          href="#"
          className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
        >
          Politics
        </a>
        <div className="text-white font-regular flex flex-col justify-start">
          <span className="text-3xl font-semibold">20</span>
          <span className="-mt-3">Jan</span>
        </div>
      </div>
      <main className="p-5 z-10">
        <a
          href="#"
          className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
        >
          Middle East Participants Gather In Warsaw
        </a>
      </main>
    </div>

    {/* Card 4 */}
    <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
      style={{
        height: '450px',
        backgroundImage: `url(https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-speaks-during-a-gathering-in-jalalabad-picture-id1205021905?k=6&m=1205021905&s=612x612&w=0&h=nwAH1XuZxF_H4f6LfHv-lgqtZe0h1tVFXfzhpMwFqao=)`,
      }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a
          href="#"
          className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
        >
          Politics
        </a>
        <div className="text-white font-regular flex flex-col justify-start">
          <span className="text-3xl font-semibold">25</span>
          <span className="-mt-3">May</span>
        </div>
      </div>
      <main className="p-5 z-10">
        <a
          href="#"
          className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
        >
          Afghan President Ashraf Ghani Visits Jalalabad
        </a>
      </main>
    </div>
    </Carousel>
</>


  );
};

export default Trending;
