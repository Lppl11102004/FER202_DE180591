import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Xóa thất bại!");
      navigate("/");
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  return (
    <div>
      <h1>Xác nhận xóa bài viết</h1>
      <p>Bạn chắc chắn muốn xóa bài viết này?</p>
      <button onClick={handleDelete}>Xóa</button>
      <button onClick={() => navigate("/")}>Hủy</button>
    </div>
  );
};

export default DeletePost;
