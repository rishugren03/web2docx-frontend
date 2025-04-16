import axios from "axios";

const BASE_URL = "http://localhost:5000/auth/api/auth";

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
      `${BASE_URL}/firebase-register`,
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
