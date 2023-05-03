const productService = require("../services/productService");

const viewCountries = async (req, res) => {
  try {
    const { countryId } = req.query;

    const result = await productService.viewCountries(countryId);
    return res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  viewCountries,
};
