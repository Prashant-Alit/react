
import React, { useState, useEffect } from "react";
import { fetchPosts, createPost, deletePost, updatePost } from "../../components/apiservices";
import { CustomButton } from "../../components/button/Button";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Container, CssBaseline, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import LoopIcon from '@mui/icons-material/Loop';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          text-align: center;
        }
      `,
    },
  },
});

export const Post = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [currentPage, setCurrentPage] = useState(1);
  // const [editingPost, setEditingPost] = useState(null);
  // const [deleted, isPostDeleted] = useState(false);
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

  // const handleLoading = () => {
  //   setIsLoading((prevState) => !prevState);
  // };

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

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };

  // const handleEditClick = (post) => {
  //   setEditingPost(post);
  // };

  //   const handleEditSubmit = async (e) => {
  //   e.preventDefault();
  //   if (editingPost.title && editingPost.body) {
  //     await updatePost(editingPost.id, editingPost);
  //     setPosts(posts.map((post) => (post.id === editingPost.id ? editingPost : post)));
  //     setEditingPost(null);
  //   }
  // };

  const handleDeleteClick = async (postId) => {
    // const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    // if (confirmDelete) {
    const response = await deletePost(postId);
    if (response.success) {
      setPosts(posts.filter(post => post.id !== postId));
    } else {
      alert("Failed to delete post.");
    }
    // }
  };

  const totalPages = Math.ceil(100 / postsPerPage);

  return (
    <>
      {/* { isLoading ? <LoopIcon/> : */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
            <CustomButton type="submit" color="primary" size="medium" handleClick={handleSubmit}>
              Create Post
            </CustomButton>
          </form>

          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card style={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography variant="h6" component="div" align="center">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" align="justify">
                      {post.body}
                    </Typography>
                  </CardContent>

                  <CardActions style={{ justifyContent: "space-between" }}>
                    {/* <IconButton
                      onClick={() => handleEditClick(post)}
                    >
                      <EditIcon />
                    </IconButton> */}
                    <IconButton
                      onClick={() => handleDeleteClick(post.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box display="flex" justifyContent="center" mt={3}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(value) => handlePageChange(value)}
              color="primary"
              size="large"
              showFirstCustomButton
              showLastCustomButton
              siblingCount={1}
            />
          </Box>
        </Container>

        {/* {editingPost && (
          <div style={{ position: "fixed", width: "50%", height: "300px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <h2>Edit Post</h2>
            <form onSubmit={handleEditSubmit}>
              <div>
                <input
                  type="text"
                  name="title"
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
                />
              </div>
              <div>
                <textarea
                  name="body"
                  value={editingPost.body}
                  onChange={(e) => setEditingPost({ ...editingPost, body: e.target.value })}
                  style={{ padding: "10px", marginBottom: "10px", width: "100%", height: "100px" }}
                />
              </div>
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setEditingPost(null)} style={{ marginLeft: "10px" }}>
                Cancel
              </button>
            </form>
          </div>
        )} */}
      </ThemeProvider>
      {/* } */}
    </>
  );
};
