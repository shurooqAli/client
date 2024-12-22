import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
 
const initialValue={
    posts:[],
    likes:[],
    status:'idle',
    isLoading:false,
    isSuccess:false,
    isError:false
 
 
}
 
export const savePost=createAsyncThunk("posts/savePost",async(postData)=>{
    try{
        const response=await axios.post("http://127.0.0.1:8080/savePost",{
                                    email:postData.email,
                                    message:postData.msg,
                                    lat:postData.lat,
                                    lng:postData.lng,
        });
        const post=response.data.post;
        return post;
    }
    catch(error){
        console.log(error);
    };
   
});
export const updatePost=createAsyncThunk("posts/updatePost",async(postData)=>{
    try{
        const response=await axios.put("http://127.0.0.1:8080/updatePost",{
                                    postId:postData.postId,
                                    postMsg:postData.postMsg
        });
        const post=response.data.post;
        return post;
    }
    catch(error){
        console.log(error);
    };
});

export const deletePost=createAsyncThunk("posts/deletePost",async(postId)=>{
        try{
            const response=await axios.delete(`http://127.0.0.1:8080/deletePost/${postId}`);
            return response.data.message;
            
        }
        catch(error){
            console.log(error);
        };
   
});
export const getPosts=createAsyncThunk("posts/getPosts",async()=>{
    try{
        const response=await axios.get("http://127.0.0.1:8080/getPosts");
        return response.data.posts;
    }
    catch(error){
        console.log(error);
    };
   
});
 
 
export const PostSlice=createSlice({
    name:"posts",
    initialState:initialValue,
    reducers:{ },
    extraReducers:(builder)=>{
        builder.addCase(savePost.pending,(state)=>{
                    state.isLoading=true;
                })
                .addCase(savePost.fulfilled,(state,action)=>{
                    state.isLoading=false;
                    state.isSuccess=true;
                })
                .addCase(savePost.rejected,(state)=>{
                    state.isLoading=false;
                    state.isError=true;
                })
                .addCase(getPosts.pending,(state)=>{
                    state.isLoading=true;
                })
                .addCase(getPosts.fulfilled,(state,action)=>{
                    state.isLoading=false;
                    state.isSuccess=true;
                    state.posts=action.payload;
 
                })
                .addCase(getPosts.rejected,(state)=>{
                    state.isLoading=false;
                    state.isError=true;
                })
                .addCase(updatePost.pending,(state)=>{
                    state.isLoading=true;
                })
                .addCase(updatePost.fulfilled,(state,action)=>{
                    state.isLoading=false;
                    state.isSuccess=true;
                    //state.posts=action.payload;
 
                })
                .addCase(updatePost.rejected,(state)=>{
                    state.isLoading=false;
                    state.isError=true;
                })

                .addCase(deletePost.pending,(state)=>{
                    state.isLoading=true;
                })
                .addCase(deletePost.fulfilled,(state,action)=>{
                    state.isLoading=false;
                    state.isSuccess=true;
            
                })
                .addCase(deletePost.rejected,(state)=>{
                    state.isLoading=false;
                    state.isError=true;
                })
 
    }
 
});
 
 
 
export default PostSlice.reducer;  