const routes = require('express').Router();

routes.use("/api-docs", require("./swagger"))
routes.use("/user", require("./user"));
// routes.use('/api-docs',
//   (docData = (req, res) => {
//     let docData = {
//       documentationURL: '',
//     };
//     res.send(docData);
//   })
// );

module.exports = routes;