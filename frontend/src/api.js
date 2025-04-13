import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; // Use environment variable

export const getShifts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/shifts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching shifts:", error);
    return null;
  }
};
