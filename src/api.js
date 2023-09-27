// src/api.js
import axios from 'axios';

const BASE_URL = 'https://your-vercel-app-url.vercel.app'; // VercelアプリのURLに合わせて変更してください

export const runPythonScript = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/run-python-script`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
