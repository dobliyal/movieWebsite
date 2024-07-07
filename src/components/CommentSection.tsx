// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
// import { Comment } from '../types';
// import { useDispatch } from 'react-redux';
// import { addComment } from '../redux/slices/commentsSlice';
// import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

// interface CommentSectionProps {
//   movieId: string;
// }

// const CommentSection: React.FC<CommentSectionProps> = ({ movieId }) => {
//   const comments = useSelector((state: RootState) => state.comments.filter(comment => comment.movieId === movieId));
//   const [commentText, setCommentText] = useState('');
//   const dispatch = useDispatch();

//   const handlePostComment = () => {
//     const newComment: Comment = {
//       movieId,
//       user: 'Anonymous', // Replace with actual logged-in user
//       comment: commentText,
//       date: new Date(),
//     };
//     dispatch(addComment(newComment));
//     setCommentText('');
//   };

//   return (
//     <div>
//       <TextField
//         label="Comment"
//         value={commentText}
//         onChange={(e) => setCommentText(e.target.value)}
//         fullWidth
//       />
//       <Button onClick={handlePostComment}>Post Comment</Button>
//       <List>
//         {comments.map((comment, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={comment.comment} secondary={comment.user} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default CommentSection;
import React from 'react'

const CommentSection = () => {
  return (
    <div>
      
    </div>
  )
}

export default CommentSection

