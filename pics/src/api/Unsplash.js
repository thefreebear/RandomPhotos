import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pE9oG1HSGZpoxde9eGFwWFj3TPmoWnrvDt8kVmgS9ms",
  },
});
