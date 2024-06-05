import { useState } from "react";
import Modal from "./UI/Modal";
import BlogForm from "./BlogForm";

const Header=()=>{
    const [isModalOpen,setIsModalOpen]=useState(false);
    const modalOpen=()=>setIsModalOpen(true);
    const modalClose=()=>setIsModalOpen(false);
  return(
  <div style={{width:"100%",padding:"10px",backgroundColor:"orange",textAlign:"center"}}>
    <h1>Blog Website</h1>
    <button onClick={modalOpen}>Add Blog</button>
    {isModalOpen&&
    <Modal onClose={modalClose}>
      <BlogForm onClose={modalClose}/>
    </Modal>
  }
  </div>
  )
}
export default Header;