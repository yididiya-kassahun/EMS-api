const express = require("express");
const app = express();
const port = 3000; // Change the port number if needed

// Controllers
const adminController = require("./controllers/admin");
const superAdminController = require("./controllers/superAdmin");

// Routes
const adminRoutes = require("./routes/admin");
const superAdminRoutes = require("./routes/superAdmin");

app.use(adminRoutes);
app.use(superAdminRoutes);

// Middleware to parse JSON bodies
app.use(express.json());

app.use((req,res,next)=> {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
  next();
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
