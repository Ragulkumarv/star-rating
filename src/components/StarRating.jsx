import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <section className="star-rating">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <FaStar
            key={`Icon-${index}`}
            color={`${
              currentRating <= (hoverRating || rating) ? "gold" : "gray"
            }`}
            onClick={() => setRating(currentRating)}
            onMouseEnter={() => setHoverRating(currentRating)}
            onMouseLeave={() => setHoverRating(rating)}
            size={30}
            style={{ cursor: "pointer" }}
          />
        );

        // return (
        //   <span
        //     key={`Icon-${index}`}
        //     className={`star ${
        //       currentRating <= (hoverRating || rating) ? "filled" : ""
        //     }`}
        //     onClick={() => setRating(currentRating)}
        //     onMouseEnter={() => setHoverRating(currentRating)}
        //     onMouseLeave={() => setHoverRating(rating)}
        //   >
        //     ★
        //   </span>
        // );
      })}
    </section>
  );
};

export default StarRating;
