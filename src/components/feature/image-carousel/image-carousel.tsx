import Image from "next/image";
import "./image-carousel.css";

export const ImageCarousel = () => {
  // Note: if the number of images (currently 4) is changed, the translation value in the CSS needs to be changed as well
  const images = [
    "https://res.cloudinary.com/dh0apn34n/image/upload/v1745925483/shirts_mjbet2.jpg",
    "https://res.cloudinary.com/dh0apn34n/image/upload/v1745925483/jeans_cnpolj.jpg",
    "https://res.cloudinary.com/dh0apn34n/image/upload/v1745925484/watches_dkzrno.jpg",
    "https://res.cloudinary.com/dh0apn34n/image/upload/v1745925484/books_ga51iq.jpg",
  ];

  return (
    <div className="overflow-hidden w-full h-[260px]">
      <div className="w-full h-full animate-[scroll_20s_linear_infinite]">
        <div className="flex items-center justify-center h-full">
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="relative h-full min-w-[400px] overflow-clip"
            >
              <div className="absolute inset-0 h-full w-full z-10 bg-sky-800 opacity-50" />
              <Image
                src={image}
                alt=""
                aria-hidden={true}
                fill={true}
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
