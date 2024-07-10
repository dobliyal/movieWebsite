import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
<Typography
  variant="h6"
  sx={{
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    fontWeight: 'bold',
    letterSpacing: '0.1rem',
    fontFamily: 'Roboto, sans-serif',
  }}
>
  Comments
</Typography>
      <List>
        {comments.map((comment, index) => (
          <ListItem key={index} alignItems="flex-start" sx={{ color: 'white' }}>
          <ListItemText
            primary={<Typography sx={{ color: 'white' }}>{`${comment.user} - Rating: ${comment.rating}`}</Typography>}
            secondary={<Typography sx={{ color: 'white' }}>{comment.text}</Typography>}
          />
        </ListItem>
        ))}
      </List>
      {user ? (
        <>
            <Rating
  value={rating}
  onChange={(event, newValue) => setRating(newValue)}
  sx={{
    marginTop: '1rem',
    color: 'white',
    
    '& .MuiRating-iconEmpty': {
      color: 'white',
    },
  }}
/>
          <TextField
  label="Add a comment"
  value={commentText}
  onChange={(e) => setCommentText(e.target.value)}
  fullWidth
  multiline
  rows={4}
  sx={{
    marginTop: '1rem',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
  }}
  InputLabelProps={{ style: { color: 'white' } }}
  variant="outlined"
/>

          <Button
            onClick={handleAddComment}
            variant="contained"
            sx={{
              backgroundColor: 'gray',
              color: 'white',
              '&:hover': {
                backgroundColor: 'darkgray',
                color: 'black',
              },
              mt: 3
            }}
          >
            Add Comment
          </Button>
        </>
      ) : (
        <Typography variant="body2" sx={{ marginTop: '1rem',color:'white' }} >
          Please log in to add a comment.
        </Typography>
      )}
    </Box>
  );
};

export default CommentSection;
