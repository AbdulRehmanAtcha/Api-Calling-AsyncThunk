import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const addUser = createAsyncThunk("CreateUser", async (data)=>{
    const resposne = await fetch("https://65575fb0bd4bcef8b6128238.mockapi.io/CRUD", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    });
    try {
        const result = resposne.json()
        return result
    } catch (error) {
        
    }
})

export const UserSlice = createSlice({
  initialState: {
    users: [],
  },
  name: "UserSlice",
  reducers: {
    // AddUser: (state, action) => {
    //   console.log(action.payload);
    // },
  },
});

// export const {AddUser} = UserSlice.reducer

export default UserSlice.reducer;
