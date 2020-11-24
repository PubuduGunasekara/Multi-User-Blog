const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//bring routes
const authRoutes = require("./routes/auth.routes");
const tagRoutes = require("./routes/tag.routes");
const reviewRoutes = require("./routes/review.routes");
const newsRoutes = require("./routes/news.routes");
const userRoutes = require("./routes/user.routes");
const mobileRoutes = require("./routes/mobile.routes");
const mobileCategoryRoutes = require("./routes/mobileCategory.routes");

//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`${process.env.APP_NAME} mongo db connected successfully.`);
  });

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV == "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes middleware
app.use("/api", authRoutes);
app.use("/api", tagRoutes);
app.use("/api", reviewRoutes);
app.use("/api", newsRoutes);
app.use("/api", userRoutes);
app.use("/api", mobileRoutes);
app.use("/api", mobileCategoryRoutes);

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`${process.env.APP_NAME} Server is running on PORT : ${port}`);
});
