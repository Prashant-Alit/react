

import React, { useState, useEffect } from "react";
import { fetchPosts, createPost } from "../../components/apiservices";
import { Button } from "../../components/button/Button";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

export const Post = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      setPosts(data.slice(indexOfFirstPost, indexOfLastPost));
    };
    getPosts();
  }, [currentPage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPost.title && newPost.body) {
      const createdPost = await createPost(newPost);
      setPosts([createdPost, ...posts]); 
      setNewPost({ title: "", body: "" }); 
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const totalPages = Math.ceil(100 / postsPerPage); 

  return (
    <div>
      <Container>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newPost.title}
            onChange={handleInputChange}
            style={{ padding: "10px", marginRight: "10px" }}
          />
        </div>
        <div>
          <textarea
            name="body"
            placeholder="Body"
            value={newPost.body}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              marginRight: "10px",
              width: "300px",
            }}
          />
        </div>
        <Button type="submit" color="primary" size="large">
          Create Post
        </Button>
      </form>

      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          siblingCount={1}
        />
      </Box>
      </Container>
    </div>
  );
};
// [7:44 AM, 11/11/2024] -: Subject: Submission of Payslip and Bank Statement

// Dear [HR's Name],

// I hope this message finds you well. As per the requirement, I am attaching my recent payslip and bank statement for your review. Please let me know if you need any additional information or documents.

// Thank you for your assistance.

// Best regards,
// Prashant