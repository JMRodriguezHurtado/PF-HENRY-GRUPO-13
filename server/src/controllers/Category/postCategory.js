const Category = require('../../models/Category');

const postCategory = async ({ name, img, description }) => {
  try {
    if (!name || !description) {
      throw new Error('Missing data!');
    };

    const category = new Category({
      name,
      img, 
      description
    });

    const categorySaved = await category.save();

    if (categorySaved) {
      return "Category created.";
    } else {
      throw new Error("Category couldn't be created.");
    };
  } catch (error) {
    console.log(error);

    throw new Error(error.message);
  };
};

module.exports = postCategory;