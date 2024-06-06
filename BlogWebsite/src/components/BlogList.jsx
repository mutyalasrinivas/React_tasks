 import React, { useContext, useState } from 'react';
import BlogContext from '../store/BlogContext';
import BlogForm from './BlogForm';
import Modal from './UI/Modal';

const BlogList = () => {
  const { blogs,setBlogs } = useContext(BlogContext);
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
  const handleDelete=(id)=>{
    //delete logic here?
     setBlogs(blogs.filter((blog)=>blog.id!==id))
  }

  return (
    <div>
    <div style={{width:"100%",padding:"10px",backgroundColor:"orange",textAlign:"center"}}>
    
      <h1>Blog Website</h1>
      <button onClick={handleAdd}>Add New Blog</button>
    </div>
     <div  >
     
      <ul style={{display:"flex", flexDirection:"row",flexWrap:"wrap"}}>
        {blogs.map(blog => (
          <li key={blog.id} style={{padding:"5px",margin:"5px"}}>
            <h3>{blog.title}</h3>
             {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} style={{ maxWidth: '200px' }} />}
             <p>{blog.content}</p>
            <button onClick={() => handleEdit(blog)}>Edit</button>
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>
        
     </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <BlogForm blog={currentBlog} onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default BlogList;
