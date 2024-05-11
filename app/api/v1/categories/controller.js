const { StatusCodes } = require('http-status-codes');
const {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
} = require('../../../services/mongoose/categories');

// buat function create
const create = async (req, res, next) => {
  try {
    // membuat categories baru menggunakan data dari `name`
    // const { name } = req.body;

    // simpan Category yang baru dibuat ke MongoDB
    // const result = await Categories.create({ name });
    const result = await createCategories(req);
    // berikan response kepada client dengan mengembalikan product yang baru dibuat
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    // jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllCategories(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const find = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const result = await Categories.findOne({ _id: id });
    // if (!result) {
    //   throw new notFoundError("Tidak ada kategori dengan id :" + id);
    // }
    const result = await getOneCategories(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const { name } = req.body;
    // // const checkCategory = await Categories.findOne({_id: id});
    // // if (!checkCategory) {
    // //   return res.status(404).json({ message: "id category not found" });
    // // }
    // // checkCategory.name = name;
    // // checkCategory.save();

    // const result = await Categories.findByIdAndUpdate(
    //   { _id: id },
    //   { name },
    //   { new: true, runValidators: true }
    // );
    const result = await updateCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const result = await Categories.findOne({ _id: id }).deleteOne();
    const result = await deleteCategories(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Export fungsi create pada controller categories
module.exports = {
  create,
  index,
  find,
  update,
  destroy,
};
