import axios from "axios";
import { InvalidArgumentException } from "./exceptions.js";

/**
 * Defines the headers of the HTTP requests made by
 * WikiOnFireBot.
 */
const wofBotHeaders = {
  "User-Agent": "WikiOnFireBot (+wikionfire@gmail.com)",
  Accept: "application/json",
};

/**
 * Returns the first thousand of the most frequently viewed articles
 * on `en.wikipedia.org` on a given day.
 *
 * @param {Number} year the year of the date
 * @param {Number} month the month of the date
 * @param {Number} day the day of the date
 * @returns an array of the most viewed articles
 */
const getMostViewedArticles = async (year, month, day) => {
  if (typeof year !== "number" && !(year instanceof Number))
    throw new InvalidArgumentException("year must be a number");
  if (typeof month !== "number" && !(month instanceof Number))
    throw new InvalidArgumentException("month must be a number");
  if (typeof day !== "number" && !(day instanceof Number))
    throw new InvalidArgumentException("day must be a number");

  const uri =
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia.org/all-access/" +
    year +
    "/" +
    month.toString().padStart(2, "0") +
    "/" +
    day.toString().padStart(2, "0");
  const articles = axios
    .get(uri, { headers: wofBotHeaders })
    .then((response) => {
      return response.data.items[0].articles;
    })
    .catch((error) => {
      throw new Error("Error from the WikiMedia API: " + error.response.data.detail);
    });
  return articles;
};

/**
 * Returns the first hundred of the most frequently edited articles
 * on `en.wikipedia.org` on a given day.
 *
 * @param {Number} year the year of the date
 * @param {Number} month the month of the date
 * @param {Number} day the day of the date
 * @returns an array of the most frequently edited articles
 */
const getMostEditedArticles = async (year, month, day) => {
  if (typeof year !== "number" && !(year instanceof Number))
    throw new InvalidArgumentException("year must be a number");
  if (typeof month !== "number" && !(month instanceof Number))
    throw new InvalidArgumentException("month must be a number");
  if (typeof day !== "number" && !(day instanceof Number))
    throw new InvalidArgumentException("day must be a number");
  const uri =
    "https://wikimedia.org/api/rest_v1/metrics/edited-pages/top-by-edits/en.wikipedia.org/all-editor-types/all-page-types/" +
    year +
    "/" +
    month.toString().padStart(2, "0") +
    "/" +
    day.toString().padStart(2, "0");
  const articles = axios
    .get(uri, {
      headers: wofBotHeaders,
    })
    .then((response) => {
      return response.data.items[0].results[0].top;
    })
    .catch((error) => {
      throw error;
    });
  return articles;
};

export { getMostViewedArticles, getMostEditedArticles };
