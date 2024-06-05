 import React, { useContext, useState } from 'react';
import BlogContext from '../store/BlogContext';
import BlogForm from './BlogForm';
import Modal from './UI/Modal';

const BlogList = () => {
  const { blogs } = useContext(BlogContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setCurrentBlog(null);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1>Blog List</h1>
      <button onClick={handleAdd}>Add New Blog</button>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} style={{ maxWidth: '200px' }} />}
            <button onClick={() => handleEdit(blog)}>Edit</button>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <BlogForm blog={currentBlog} onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default BlogList;
