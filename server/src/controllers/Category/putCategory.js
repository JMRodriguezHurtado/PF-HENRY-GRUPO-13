const Category = require('../../models/Category');

const putCategory = async (id, updateData) => {
  try {
    const category = await Category.findById(id);
    
    if (!category) {
      throw new Error('Category not found.');
    };

    for (const key in updateData) {
      if (updateData.hasOwnProperty[key]) {
        category[key] = updateData[key];
      };
    };

    const categorySaved = await Category.save();

    if (categorySaved) {
      const message = "Category updated.";

      return { message, updateData: categorySaved };
    } else {
      throw new Error("Error updating the category.");    
    };

  } catch (error) {
    console.log(error.message);
    throw new Error("Unable to update the category.");
  };
};

module.exports = putCategory