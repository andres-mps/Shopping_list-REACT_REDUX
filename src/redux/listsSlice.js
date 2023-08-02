import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import randomColor from "randomcolor";

const listsSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    add_list: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (newList) => {
        const id = nanoid();
        // createdAt = new Date();
        return {
          payload: {
            id,
            newList: newList,
            // createdAt,
            products: [],
            color: randomColor({
              luminosity: "dark",
              format: "rgba",
              alpha: 0.5,
            }),
          },
        };
      },
    },

    // add_list(state, action) {
    //   state.push(action.payload);
    // },

    add_item(state, action) {
      const listToModify = state.find((list) => list.id === action.payload.listId);
      console.log(listToModify);
      listToModify.products.push(action.payload);
    },

    delete_item(state, action) {
      const listToModify = state.find((list) => list.id === action.payload.listId);
      listToModify.products = listToModify.products.filter((item) => item.id !== action.payload.id);
    },

    toggle_isbought(state, action) {
      const listToModify = state.find((list) => list.id === action.payload.listId);
      const item = listToModify.products.find((item) => item.id === action.payload.id);
      item.isBought = !item.isBought;
    },

    empty_list(state, action) {
      return state.filter((list) => list.id !== action.payload);
    },
  },
});

const { actions, reducer } = listsSlice;
export const { add_list, add_item, delete_item, toggle_isbought, empty_list } = actions;
export default reducer; // es lo que se va a importar desdes storeConfig.js
