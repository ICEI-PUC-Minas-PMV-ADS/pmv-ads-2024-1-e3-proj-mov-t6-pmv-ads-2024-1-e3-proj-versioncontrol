const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {

    return res.status(401).json({ error: "Token not provided" });
    
  }

  // Authorization: Bearer TOKEN

  const [, token] = authHeader.split("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyU2VuZCI6eyJpZCI6MSwiZW1haWwiOiJicnVub0BlbWFpbC5jb20iLCJwYXNzd29yZCI6ImJydW5vIn0sImlhdCI6MTU3MzM2MjE4OSwiZXhwIjoxNTczMzYyNzg5fQ.wfHnMfeOTN9Dt28PcTiEf25t8foq_ky3i6wyMzZpnQU");

  try {

    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();

  } catch (err) {

    return res.status(401).json({ error: "Token invalid" });

  }
};