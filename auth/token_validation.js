const { verify } = require("jsonwebtoken");

module.exports = {
  checktoken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, "qwe1234", (error, decoded) => {
        if (error) {
          res.json({
            success: 0,
            message: "Invalid token, access denied",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        success: 0,
        message: "Access denied!! provide token to get acces!!",
      });
    }
  },
};
