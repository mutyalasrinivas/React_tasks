 import React, { useContext, useState, useEffect } from 'react';
import BlogContext from '../store/BlogContext';

const BlogForm = ({ blog, onClose }) => {
  const { addBlog, updateBlog } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setImageUrl(blog.imageUrl || '');
    } else {
      setTitle('');
      setContent('');
      setImageUrl('');
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = {
      id: blog ? blog.id : Date.now(),
      title,
      content,
      imageUrl
    };
    if (blog) {
      updateBlog(blogData);
    } else {
      addBlog(blogData);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{blog ? 'Edit Blog' : 'Add New Blog'}</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <button type="submit">{blog ? 'Update' : 'Post'}</button>
    </form>
  );
};

export default BlogForm;



// const BlogForm=()=>{
//     const handleSubmit=()=>{

//     }
//   return(
//     <div><h1>Form</h1>
//         <form onSubmit={handleSubmit}>
//             <h1>From for Adding blog</h1>
//            <label for="image">
//             <input type="text" id="image" name="image"/>Add image Link
//            </label>
//            <label for="title">
//             <input type="text" name="title" id="title"/>Title</label>
//             <label for="description">
//             <input type="text" name="description" id="description"/>Description</label>
//             <button>Post Blog</button>
//             <button>Close</button>
//         </form>
//     </div>
//   )
// }
// export default BlogForm;


