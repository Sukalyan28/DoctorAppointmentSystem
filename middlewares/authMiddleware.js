const JWT = require("jsonwebtoken");
//next is used to further execute the code
module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    //let the token be lhfskubdfsiubfsu but the representation is like /Bearer lhfskubdfsiubfsu/ so ny [1] i.e the second element of the array will be the token i.e. lhfskubdfsiubfsu and the [0] i.e. first element will be Bearer

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(200).send({ message: "Auth Failed", success: false });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};
