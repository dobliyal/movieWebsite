// // src/components/RatingComponent.tsx
// import React from 'react';
// import { Rating } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { addRating } from '../redux/slices/ratingsSlice';

// interface RatingComponentProps {
//   movieId: string;
// }

// const RatingComponent: React.FC<RatingComponentProps> = ({ movieId }) => {
//   const dispatch = useDispatch();

//   const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
//     if (newValue !== null) {
//       dispatch(addRating({ movieId, rating: newValue }));
//     }
//   };

//   return (
//     <Rating name="movie-rating" onChange={handleRatingChange} />
//   );
// };

// export default RatingComponent;
import React from 'react'

const RatingComponent = () => {
  return (
    <div>
      
    </div>
  )
}

export default RatingComponent
