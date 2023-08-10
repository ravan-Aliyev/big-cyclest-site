import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postCartData = createAsyncThunk("postCart/fetch", async (item) => {
  const res = await fetch(
    "https://cyclest-project-default-rtdb.firebaseio.com/cart.json",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: item.items,
        totalValue: item.totalValue || null,
      }),
    }
  );

  return await res.json();
});
export const getCartData = createAsyncThunk("getCart/fetch", async () => {
  const res = await fetch(
    "https://cyclest-project-default-rtdb.firebaseio.com/cart.json"
  );

  return await res.json();
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalValue: 0,
    change: false,
    data: null,
  },
  reducers: {
    addItemCart(state, action) {
      state.change = true;
      state.totalValue += action.payload.price * action.payload.amount;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.amount += action.payload.amount;
        existingItem.totalPrice += action.payload.price * action.payload.amount;
      } else {
        state.items.push(action.payload);
      }
    },

    updateItemCart(state, action) {
      state.change = true;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      existingItem.amount = action.payload.amount;

      existingItem.totalPrice = action.payload.price * action.payload.amount;

      state.totalValue = state.items
        .map((item) => item.totalPrice)
        .reduce((pre, val) => pre + val, 0);
    },

    removeItemCart(state, action) {
      state.change = true;
      state.totalValue -= action.payload.totalPrice;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postCartData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postCartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartData.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload) {
          state.items = action.payload.items;
          state.totalValue = action.payload.totalValue;
        }
      })
      .addCase(getCartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

// let url = "https://cyclest-project-default-rtdb.firebaseio.com/";

// export const getData = function (data) {
//   return async (dispatch) => {
//     const res = await fetch(url);

//     const data = res.json();
//   };
// };
