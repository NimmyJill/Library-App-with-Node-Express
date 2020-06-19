const express = require("express");
const signupRouter = express.Router();

function router(nav) {
  signupRouter.get("/", function (req, res) {
    res.render("signup", {
      nav: [
        { link: "/books", name: "Books" },
        { link: "/authors", name: "Authors" },
        { link: "/contact", name: "Contact" },
        { link: "/signup", name: "Signup" },
        { link: "/login", name: "Login" },
      ],
      title: "Books:Library",
    });
  });

  return signupRouter;
}

module.exports = router;
