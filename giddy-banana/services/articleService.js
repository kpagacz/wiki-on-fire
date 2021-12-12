import db from "../models/index.cjs";
import { NotFoundException } from "./serviceErrors.js";

const NumberOfAuthorsMapping = {
  "number" : 1
}

async function getArticle(_title) {
  try {
    const found = await db.Article.findOne({
      where: { title: _title },
    }).then((article) => {
      return article;
    });
    if (!found) throw new NotFoundException("Article not found!");
    return found;
  } catch (e) {
    throw new Error(e.message);
  }
}

async function postArticle(
  _title,
  _link_to_preview,
  _link_to_contents,
  _number_of_authors,
  _date_added
) {
  try {
    await db.Article.create({
      title: _title,
      link_to_preview: _link_to_preview,
      link_to_contents: _link_to_contents,
      number_of_authors: NumberOfAuthorsMapping["number"],
      date_added: _date_added
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

async function deleteArticle(title) {
  try {
    await db.Article.destroy({
      where: { title: title },
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

async function updateArticle(title, updatedFields) {
  try {
    if ((await db.Article.findOne({ where: { title: title } })) === null)
      throw new NotFoundException("Article not found");
    const modelKeys = Object.keys(db.Article.rawAttributes);
    const subsetFields = modelKeys
      .filter((key) => key in updatedFields)
      .reduce((subset, key) => {
        subset[key] = updatedFields[key];
        return subset;
      }, {});
    await db.Article.update(subsetFields, { where: { title: title } });
  } catch (e) {
    throw e;
  }
}

export { getArticle, postArticle, deleteArticle, updateArticle };
