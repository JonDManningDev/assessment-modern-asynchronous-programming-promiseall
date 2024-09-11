const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5001";

function bulkDelete(ids) {
  const promises = ids.map((id) => {
    const url = `${BASE_URL}/constellations/${id}`;
    const deleted = {"id": id};
    return axios.delete(url)
    .then(() => {
      return deleted; 
    })
  });
  return Promise.all(promises);
}

module.exports = {
  bulkDelete,
};
