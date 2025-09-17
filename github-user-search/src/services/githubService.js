// src/services/githubService.js
import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch user data");
  }
};

export const searchUsers = async (username, location, minRepos) => {
  try {
    let query = username ? `${username}` : "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data.items; // returns array of users
  } catch (error) {
    throw new Error("Unable to search users");
  }
};
