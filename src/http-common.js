import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("jwtToken");
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

let temp = false;

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 500 && !temp) {
      temp = true;
      try {
        const newToken = await axios.post(
          "http://localhost:8080/api/auth/refreshToken",
          {
            token: localStorage.getItem("refreshToken"),
          },
          { withCredentials: true }
        );

        if (newToken.status === 200) {
          localStorage.removeItem("jwtToken");
          localStorage.setItem("jwtToken", newToken.data.accessToken);
          error.config.headers["Authorization"] =
            "Bearer " + localStorage.getItem("jwtToken");
          return axios(error.config);
        }
      } catch (err) {
        localStorage.clear();
        window.location.href = "/login-timeout";
        return axios(err.config);
      }
    }

    temp = false;
    return Promise.reject(error);
  }
);

export default instance;
