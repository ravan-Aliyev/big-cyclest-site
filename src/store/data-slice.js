import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetch", async () => {
  const res = await fetch(
    "https://cyclest-project-default-rtdb.firebaseio.com/bicycles.json"
  );

  const data = res.json();

  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    clearData(state) {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;

        let bicycles;

        for (const key in action.payload) {
          bicycles = action.payload[key];
        }
        state.data = bicycles;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
