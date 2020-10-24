const Category = require("../models/Category");

module.exports = {
  // dashboard
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard");
  },

  // category
  viewCategory: async (req, res) => {
    const category = await Category.find();
    // console.log(category);
    res.render("admin/category/view_category", { category });
  },

  addCategory: async (req, res) => {
    const { name } = req.body;
    // console.log(name);
    await Category.create({ name });
    res.redirect("/admin/category");
  },

  editCategory: async (req, res) => {
    const { id, name } = req.body;
    const category = await Category.findOne({ _id: id });
    category.name = name;
    await category.save();
    res.redirect("/admin/category");
  },

  deleteCategory: async (req, res) => {
    const { id } = req.params;
    // console.log(name);
    const category = await Category.findOne({ _id: id });
    category.remove();
    res.redirect("/admin/category");
  },

  // bank
  viewBank: (req, res) => {
    res.render("admin/bank/view_bank");
  },

  addBank: (req, res) => {
    res.render("admin/bank/view_bank");
  },

  editBank: (req, res) => {
    res.render("admin/bank/view_bank");
  },

  updateBank: (req, res) => {
    res.render("admin/bank/view_bank");
  },

  deleteBank: (req, res) => {
    res.render("admin/bank/view_bank");
  },

  // item
  viewItem: (req, res) => {
    res.render("admin/item/view_item");
  },

  addItem: (req, res) => {
    res.render("admin/item/view_item");
  },

  editItem: (req, res) => {
    res.render("admin/item/view_item");
  },

  updateItem: (req, res) => {
    res.render("admin/item/view_item");
  },

  deleteItem: (req, res) => {
    res.render("admin/item/view_item");
  },

  // booking
  viewBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },

  addBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },
  editBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },
  updateBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },
  deleteBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },
};
