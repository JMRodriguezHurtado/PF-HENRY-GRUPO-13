const Category = require('../../models/Category');

const deleteCategory = async (id) => {
  try {
    const category = await Category.findById(id);

    if (!category) {
      throw new Error('Category not found.');
    };

    await category.softDelete();
    await category.save();

    return "Category marked as deleted.";
  } catch (error) {
    console.log(error);

    throw new Error(error.message);
  };
};

module.exports = deleteCategory;