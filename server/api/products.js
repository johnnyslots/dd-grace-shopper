const router = require('express').Router();
const { Product } = require('../db/models');
module.exports = router;

const getDataByIdObj = dataArray => {
  return dataArray.reduce((dataByIdObj, item) => {
    dataByIdObj[item.id] = item;
    return dataByIdObj;
  }, {});
};

const getDataIdArray = dataArray => {
  return dataArray.reduce((dataIdArr, item) => {
    dataIdArr.push(item.id);
    return dataIdArr;
  }, []);
};

router.get('/', (req, res, next) => {
  Product.findAll({ include: [{ all: true }] })
    .then(products => {
      res.status(200).json({
        productsById: getDataByIdObj(products),
        products: getDataIdArray(products)
      });
    })
    .catch(next);
});
