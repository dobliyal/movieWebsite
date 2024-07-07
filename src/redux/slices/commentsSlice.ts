import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../../types';
import localforage from 'localforage';

interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = {
  comments: []
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload);
      localforage.setItem('comments', state.comments);
    },
    setComments(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    }
  }
});

export const { addComment, setComments } = commentsSlice.actions;
export default commentsSlice.reducer;

