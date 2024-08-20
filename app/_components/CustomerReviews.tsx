import React from "react";
import Image from "next/image";
import a1 from "../../public/pictures/a1.png";
import a2 from "../../public/pictures/a2.png";
import a3 from "../../public/pictures/a3.png";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating ? "★" : "☆";
      stars.push(
        <span key={i} className="text-yellow-600 mr-0.5">
          {filled}
        </span>
      );
    }
    return <div className="flex justify-center">{stars}</div>;
  };

  return <div>{renderStars()}</div>;
};

const CustomerReviews: React.FC = () => (
  <div className="flex flex-col items-center mt-10 py-10 bg-peach1">
    <h2 className="font-serif text-2xl font-bold text-dark_blue mb-7">
      CUSTOMER REVIEWS
    </h2>
    <div className="text-center flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-5 ">
      <div className=" flex flex-col items-center md:w-1/3">
        <div className="text-and-stars w-full ">
          <p className="font-serif font-bold text-blue1">MARIA</p>
          <p className="font-serif italic mt-5 mb-2 mx-[10px] text-brown1">
            "I absolutely love the jewelry I purchased. The quality is amazing
            and it is even more beautiful in person."
          </p>
          <StarRating rating={5} />
        </div>
      </div>

      <div className="flex flex-col items-center md:w-1/3">
        <div className="text-and-stars w-full">
          <p className="font-serif font-bold text-blue1">LANA</p>
          <p className="font-serif italic mt-5 mb-2 mx-[10px] text-brown1">
            "I attended one of Dina's workshops, and it was a fantastic
            experience. Not only did I learn a lot about jewelry making, but I
            also made some beautiful pieces that I now wear proudly. Perfect for
            all ages!"
          </p>
          <StarRating rating={5} />
        </div>
      </div>

      <div className="flex flex-col items-center md:w-1/3">
        <div className="text-and-stars w-full ">
          <p className="font-serif font-bold text-blue1">MATEA</p>
          <p className="font-serif italic mt-5 mb-2 mx-[10px] text-brown1">
            "The quality and creativity in each piece are unmatched. I love that
            I can find trendy and fun jewelry that is also affordable. Plus, the
            hair wraps are a fantastic addition—I can't wait for them to be
            available!"
          </p>
          <StarRating rating={5} />
        </div>
      </div>
    </div>

    <hr className="bg-brown1 h-0.5 mt-10" />
  </div>
);

export default CustomerReviews;
