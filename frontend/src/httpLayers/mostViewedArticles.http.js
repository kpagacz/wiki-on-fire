import wofApi from "./wofApi.js";

/**
 * Returns the most viewed articles from the last week.
 *
 * @param {Number} page the number of the requested page
 * @param {Number} itemsPerPage the number of items per the requested pages
 * @returns {Object} the information about the requested articles.
 * The object contains fields:
 * * page `Number` the current returned page
 * * totalPages `Number` the number of all pages available for request
 * * items `array` of `Object` the details about the requested articles
 *
 * Where each element of `items` contains fields:
 * * title `String` the title of the article
 * * date `String` the date the number of views was recorded
 * * rank `Number` position of the number of views if this article amongst all other articles recordered that day
 * * views `Number` the number of views of this article recorded that day
 */
const getMostViewedArticles = async (page, itemsPerPage) => {
  const url = "/articles/mostViewed";
  return wofApi
    .post(url, { page: page, itemsPerPage: itemsPerPage })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        throw new Error(`${err.response.data.message}`);
      } else if (err.request) {
        throw new Error("Service refused connection");
      } else {
        throw new Error("Undefined error");
      }
    });
};

export { getMostViewedArticles };
