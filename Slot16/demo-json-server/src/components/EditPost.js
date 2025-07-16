import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        if (data) {
          setTitle(data.title);
          setContent(data.content);
        } else {
          console.error(`Không tìm thấy bài viết với id ${id}`);
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { title, content };
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });
      if (response.ok) {
        setStatus("Bài viết đã được cập nhật!");
        setTitle("");
        setContent("");
        navigate("/");
      } else {
        setStatus("Có lỗi xảy ra khi cập nhật bài viết.");
      }
    } catch (error) {
      setStatus("Có lỗi xảy ra khi cập nhật bài viết.");
      console.error("Lỗi khi cập nhật bài viết:", error);
    }
  };

  return (
    <div>
      <h1>Chỉnh sửa bài viết</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">Cập nhật bài viết</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default EditPost;