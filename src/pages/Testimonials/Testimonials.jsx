import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-11/12 mx-auto px-4 my-10 bg-white">
      <h2 className="text-center text-3xl font-bold py-10">Testimonials</h2>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="px-2">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <h3 className="text-lg font-semibold mb-2 text-black">Testimonial {item}</h3>
              <img
                src="https://i.ibb.co/hxnmj8fX/m3.jpg"
                alt="User"
                className="mx-auto w-24 h-24 rounded-full object-cover"
              />
              <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum, vitae culpa iusto consequatur cumque error quia provident odio eius delectus perspiciatis modi illo tempore repellat qui inventore earum quisquam?</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
