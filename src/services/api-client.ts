import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8b0a51446acd45568bde972adff152fe",
  },
});
