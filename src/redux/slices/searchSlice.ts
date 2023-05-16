import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  result: {
    createdAt : string
    id : number
    img : string
    name: string
    price: number
    type: {id: number, name: string, createdAt:string, updatedAt: string}
    typeId:number
    updatedAt: string;
    info: {
      description: string
    }[];
  }[];
}

const initialState: State = {
  result: [],
};



const searchSlice = createSlice({
  name: "searchqwe",
  initialState,
  reducers: {
    setResult(state, action: PayloadAction<any>) {
      state.result = action.payload
    },
    removeResult(state) {
      state.result = []
    }
  },
});

export const { setResult,removeResult } = searchSlice.actions;

export default searchSlice.reducer;