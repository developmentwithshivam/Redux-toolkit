import { createSlice, nanoid } from '@reduxjs/toolkit'

// const initialState= {
//     todos:[{id:nanoid(),
//         text:"hello world"}]
// }
export const todoSlice = createSlice({
    name:'todo',
    initialState:
        [{
            id:nanoid(),
            text:"hello world"
        }],
    reducers:{

        addtodo:(state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
        return[...state,todo]
        }
        ,
        deletetodo: (state,action)=>{
           return state.filter((obj)=>{
                obj.id !== action.payload
            })
        }
    }
})

export const {addtodo,deletetodo}= todoSlice.actions

export default todoSlice.reducer