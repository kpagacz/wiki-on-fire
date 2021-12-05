const axios = require("axios");

// Get the most viewed articles for a project (1000 of them)
axios.get("https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia.org/all-access/2021/10/01", {
  headers: {
    "User-Agent": "WikiOnFireBot (+wikionfire@gmail.com)",
    "Accept" : "application/json"
  }
}).then((response) => {
  console.dir(response.data.items[0]);
  console.dir(response.data.items[0].articles);
});


// Get top 100 edited pages by edits count
axios.get("https://wikimedia.org/api/rest_v1/metrics/edited-pages/top-by-edits/en.wikipedia.org/all-editor-types/all-page-types/2021/10/01", {
  headers: {
    "User-Agent": "WikiOnFireBot (+wikionfire@gmail.com)",
    "Accept": "application/json"
  }
}).then((response) => {
  console.dir(response.data.items[0].results);
  console.dir(response.data.items[0].results[0].top);
});
