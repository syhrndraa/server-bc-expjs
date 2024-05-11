const Images = require("../../api/v1/images/model");
/**
 * 1. langsung simpan ke database (createImages)
 * 2. Generate URL -> ketika submit baru akan disimpan ke data base (generateURLImage)
 */
const { NotFoundError, BadRequestError } = require("../../errors");

const generateURLImage = async (req) => {
  const result = `uploads/${req.file.filename}`;

  return result;
};

const createImages = async (req) => {
  const result = await Images.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : "uploads/avatar/default.jpeg",
  });

  return result;
};

// tambahkan function checking Image 
const checkingImage = async (id) => {
    const result = await Images.findOne({ _id: id });
    console.log(result);
  
    if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);
  
    return result;
}

module.exports = { createImages, checkingImage };
