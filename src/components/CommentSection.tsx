import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import localforage from 'localforage';
import Rating from '@mui/material/Rating';
import useAuth from '../hooks/useAuth';

interface Comment {
  user: string;
  text: string;
  movieId: string;
  rating:number;
}

interface CommentSectionProps {
  movieId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ movieId }) => {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [rating,setRating]=useState<number|null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      const savedComments = await localforage.getItem<Comment[]>('comments') || [];
      const movieComments = savedComments.filter(comment => comment.movieId === movieId);
      setComments(movieComments);
    };
    fetchComments();
  }, [movieId]);

  const handleAddComment = async () => {
    if (!user || rating===null) return;

    const newComment: Comment = { user: user.username, text: commentText, rating,movieId };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setCommentText('');
    setRating(null);
    const savedComments = await localforage.getItem<Comment[]>('comments') || [];
    await localforage.setItem('comments', [...savedComments, newComment]);
  };

  return (
    <Box>
      <Typography variant="h6">Comments</Typography>
      <List>
        {comments.map((comment, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={`${comment.user} - Rating: ${comment.rating}`}
              secondary={comment.text}
            />
          </ListItem>
        ))}
      </List>
      {user ? (
        <>
            <Rating
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
            sx={{ marginTop: '1rem' }}
          />
          <TextField
            label="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            fullWidth
            multiline
            rows={4}
            sx={{ marginTop: '1rem' }}
          />
          <Button
            onClick={handleAddComment}
            variant="contained"
            sx={{ marginTop: '1rem' }}
          >
            Add Comment
          </Button>
        </>
      ) : (
        <Typography variant="body2" sx={{ marginTop: '1rem' }}>
          Please log in to add a comment.
        </Typography>
      )}
    </Box>
  );
};

export default CommentSection;
