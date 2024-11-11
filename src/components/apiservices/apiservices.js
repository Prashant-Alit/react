import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, postData);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

export const updatePost = async (postId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/posts/${postId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.delete(`${BASE_URL}/posts/${postId}`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false };
  }
};
