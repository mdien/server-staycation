const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../middlewares/multer");

router.get("/dashboard", adminController.viewDashboard);
// route category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.updateCategory);
router.delete("/category/:id", adminController.deleteCategory);
// route bank
router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.updateBank);
router.delete("/bank/:id", adminController.deleteBank);
// route item
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.put("/item", adminController.updateItem);
router.delete("/item/:id", adminController.deleteItem);
// route booking
router.get("/booking", adminController.viewBooking);
router.post("/booking", adminController.addBooking);
router.put("/booking", adminController.updateBooking);
router.delete("/booking/:id", adminController.deleteBooking);

module.exports = router;
