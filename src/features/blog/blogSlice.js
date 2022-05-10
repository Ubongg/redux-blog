import { createSlice } from "@reduxjs/toolkit";
import blogs from "../../data";

const initialState = {
  blogs: [],
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    clearBlogs: (state) => {
      state.blogs = [];
    },
    removeBlog: (state, action) => {
      const newBlogs = state.blogs.filter((blog) => blog.id !== action.payload);
      state.blogs = newBlogs;
    },
    showBlogs: (state) => {
      state.blogs = blogs;
    },
  },
});

export const { clearBlogs, removeBlog, showBlogs } = blogSlice.actions;

export default blogSlice.reducer;
