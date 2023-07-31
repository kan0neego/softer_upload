import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFiles } from "../api/getFiles";

const initialState = {
  items: [
    {
      name: "",
      preview: "",
      created: "",
      modified: "",
      path: "",
      md5: "",
      type: "",
      media_type: "",
      mime_type: "",
      size: 0,
    },
  ],
  limit: 20,
  offset: 0,
};

export const fetchFiles = createAsyncThunk("files/fetchFiles", async () => {
  const response = await getFiles();
  return response.data;
});

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    filesUpdated(state, action) {
      const { items } = action.payload;
      state.items = items;
    },
    addFile(state, action) {
      const { name, type, size } = action.payload;
      // TODO: Указатель на папку/каталог
      const path = `disk:/${name}`;
      state.items.push({
        ...initialState.items[0],
        name,
        path,
        media_type: type,
        size: size,
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchFiles.fulfilled, (state, action) => {
      const { items } = action.payload;
      state.items = [items];
    });
  },
});

export const { filesUpdated, addFile } = filesSlice.actions;

export default filesSlice.reducer;
