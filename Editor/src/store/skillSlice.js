import { createSlice } from "@reduxjs/toolkit";

const SkillSlice = createSlice({
    name:"skills",
    initialState:{
        sks:[]
    },
    reducers:{
        fetchedSkills:(state,action)=>{
            state.sks= action.payload;
        },
        addSkill:(state,action)=>{
            state.sks = [...state.sks,action.payload];
        },
        removeSkill:(state,action)=>{
            let ar  = state.sks.filter(sk=>{
                return sk._id!=action.payload._id;
            })
            state.sks = ar;
        },
        updateSkill:(state,action)=>{
            let ar = state.sks.map(sk=>{
                return sk._id!==action.payload._id?sk:action.payload;
            });
            state.sks = ar;
        }
    }
}) 

export const {fetchedSkills, addSkill, removeSkill, updateSkill} = SkillSlice.actions ;

export default SkillSlice.reducer;