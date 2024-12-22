import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const addUser=createAsyncThunk("counter/addUser",async(userData)=>{
    try{
            const response=await axios.post("http://127.0.0.1:8080/insertUser",{
                uname:userData.uname,
                password:userData.password,
                email:userData.email,
                pic:userData.pic
            });
            const msg=response.data.user;
            return msg;
    }
    catch(error)
    {
        alert("Invalid Credentials");
    }
});
export const getUser=createAsyncThunk("counter/getUser",async(userData)=>{
    try{
            const response=await axios.post("http://127.0.0.1:8080/login",{
                password:userData.password,
                email:userData.email,
            });
            return response.data.user;
            
    }
    catch(error)
    {
        alert("Invalid Credentials"+error);
        initValue.user={};
    }
});

export const logout=createAsyncThunk("counter/logout",async(userData)=>{
    try{
        const response=await axios.post("http://127.0.0.1:8080/logout");
            return response.data;
 
                             
        }
   
    catch(error){
        console.log(error);
    };
   
});

const initValue = {
    user:{},
    message:"",
    isLoading:false,
    isSuccess:false,
    isError:false
}

export const UserSlice=createSlice({
    name:"counter",
    initialState:initValue,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addUser.pending,(state)=>{
                state.isLoading=true;
            })
            .addCase(addUser.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isSuccess=true;
                state.message=action.payload;
            })
            .addCase(addUser.rejected,(state)=>{
                state.isLoading=false;
                state.isError=true;
            })

            .addCase(getUser.pending,(state)=>{
                state.isLoading=true;
            })
            .addCase(getUser.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isSuccess=true;
                state.user=action.payload;
            })
            .addCase(getUser.rejected,(state)=>{
                state.isLoading=false;
                state.isError=true;
            })

            .addCase(logout.pending,(state)=>{
                state.isLoading=true;
            })
            .addCase(logout.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isSuccess=true;
                state.user={};
            })
            .addCase(logout.rejected,(state)=>{
                state.isLoading=false;
                state.isError=true;
            })
    }
});
export default UserSlice.reducer;