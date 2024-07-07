
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addComment } from "../redux/slices/commentsSlice";
import { Comment } from "../types";

const useComments=()=>{
const comments=useSelector((state:RootState)=>state.comments);
const dispatch=useDispatch();

const postComment=(comment:Comment)=>{
    dispatch(addComment(comment));
};
return {comments,postComment};
};