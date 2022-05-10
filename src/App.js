import React, { useState } from "react";
import { clearBlogs, removeBlog, showBlogs } from "./features/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((store) => store.blogs);
  const [displayBlogs, setDisplayBlogs] = useState(false);

  return (
    <div className="app">
      <div className="clear-btn">
        <button
          className={displayBlogs ? "hide" : "show"}
          onClick={() => {
            setDisplayBlogs(true);
            dispatch(showBlogs());
          }}
        >
          show blogs
        </button>
      </div>
      <div className="blogs">
        {blogs.map((blog) => {
          const { id, title, author, body } = blog;
          return (
            <div className="blog" key={id}>
              <h2>{title}</h2>
              <h4>written by {author}</h4>
              <p>{body}</p>
              <button
                className="remove"
                onClick={() => dispatch(removeBlog(id))}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="clear-btn">
        <button
          className={displayBlogs ? "clear" : "hide"}
          onClick={() => {
            dispatch(clearBlogs());
            setDisplayBlogs(false);
          }}
        >
          clear blogs
        </button>
      </div>
    </div>
  );
}

export default App;
