import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDiskInformation } from "../api/getInformation";

const initialState = {
  data: {
    max_file_size: 0,
    paid_max_file_size: 0,
    total_space: 0,
    reg_time: "",
    trash_size: 0,
    is_paid: false,
    used_space: 0,
    system_folders: {
      odnoklassniki: "",
      google: "",
      instagram: "",
      vkontakte: "",
      attach: "",
      mailru: "",
      downloads: "",
      applications: "",
      facebook: "",
      social: "",
      messenger: "",
      calendar: "",
      scans: "",
      screenshots: "",
      photostream: "",
    },
    user: {
      reg_time: "",
      display_name: "",
      uid: "",
      country: "",
      is_child: false,
      login: "",
    },
    unlimited_autoupload_enabled: false,
    revision: 0,
  },
  status: "idle",
};

export const fetchInformation = createAsyncThunk(
  "disk/fetchInformation",
  async () => {
    const response = await getDiskInformation();
    return response.data;
  }
);

const diskSlice = createSlice({
  name: "disk",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchInformation.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchInformation.fulfilled, (state, action) => {
      state.data = { ...action.payload };
      state.status = "succeeded";
    });
    builder.addCase(fetchInformation.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default diskSlice.reducer;
