import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4cc249510096438bad8aa331d7b5d107",
  },
});
