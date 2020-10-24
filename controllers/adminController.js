const Category = require("../models/Category");

module.exports = {
  // dashboard
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard", {
      title: "Staycation | Dashboard ",
    });
  },

  // category
  viewCategory: async (req, res) => {
    try {
      const category = await Category.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("admin/category/view_category", {
        category,
        alert,
        title: "Staycation | Category",
      });
    } catch (error) {
      res.redirect("admin/category/view_category");
    }
  },

  addCategory: async (req, res) => {
    try {
      const { name } = req.body;
      req.flash("alertMessage", "Success Add Category");
      req.flash("alertStatus", "success");
      await Category.create({ name });
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  updateCategory: async (req, res) => {
    try {
      const { id, name } = req.body;
      const category = await Category.findOne({ _id: id });
      category.name = name;
      await category.save();
      req.flash("alertMessage", "Success Update Category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ _id: id });
      category.remove();
      req.flash("alertMessage", "Success Delete Category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  // bank
  viewBank: (req, res) => {
    res.render("admin/bank/view_bank", {
      title: "Staycation | Bank ",
    });
  },

  addBank: (req, res) => {
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
    res.render("admin/item/view_item", {
      title: "Staycation | Item ",
    });
  },

  addItem: (req, res) => {
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
    res.render("admin/booking/view_booking", {
      title: "Staycation | Booking ",
    });
  },

  addBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },

  updateBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },
  deleteBooking: (req, res) => {
    res.render("admin/booking/view_booking");
  },
};
