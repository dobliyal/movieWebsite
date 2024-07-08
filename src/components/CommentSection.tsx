import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import localforage from 'localforage';

interface Comment {
  user: string;
  text: string;
  movieId: string;
}

interface CommentSectionProps {
  movieId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ movieId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const savedComments = await localforage.getItem<Comment[]>('comments') || [];
      const movieComments = savedComments.filter(comment => comment.movieId === movieId);
      setComments(movieComments);
    };
    fetchComments();
  }, [movieId]);

  const handleAddComment = async () => {
    const newComment: Comment = { user: username, text: commentText, movieId };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setCommentText('');
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
              primary={comment.user}
              secondary={comment.text}
            />
          </ListItem>
        ))}
      </List>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        sx={{ marginBottom: '1rem' }}
      />
      <TextField
        label="Add a comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        fullWidth
        multiline
        rows={4}
      />
      <Button
        onClick={handleAddComment}
        variant="contained"
        sx={{ marginTop: '1rem' }}
      >
        Add Comment
      </Button>
    </Box>
  );
};

export default CommentSection;


