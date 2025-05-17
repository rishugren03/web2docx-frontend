import axios from "axios";

// const BASE_URL = "http://localhost:5000/auth/api";
const BASE_URL = "https://auth.web2docx.com/auth/api";

export const saveFbUser = async (idToken, userInfo) => {
  try {
    const {
      localId,
      createdAt,
      lastLoginAt,
      lastRefreshAt,
      passwordHash,
      passwordUpdatedAt,
    } = userInfo;

    const payload = {
      localId,
      createdAt: Number(createdAt),
      lastLoginAt: Number(lastLoginAt),
      lastRefreshAt,
      password: passwordHash,
      passwordUpdatedAt: Number(passwordUpdatedAt),
    };

    const response = await axios.post(
      `${BASE_URL}/auth/firebase-register`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Token verification failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getUser = async (idToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/get-user`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Token verification failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const generateNewApiKey = async (idToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/create-new-key`,
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Token verification failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};
