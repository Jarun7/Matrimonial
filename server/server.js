const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const user = require("./model/user");
const error = require("./middlewares/errorMiddlewareHandler");
const asyncHandler = require("express-async-handler");
const generateToken = require("./generateToken");
const authMiddleware = require("./middlewares/authMiddleware");

const app = express();
//database
mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected successfully"))
  .catch((err) => console.log(err));

//listen
app.listen(5000, () => console.log(`server is up and running on ${PORT}`));
const PORT = process.env.PORT || 5000;

//use
app.use(express.json());

//error handler

app.use(error.errorMiddlewareHandler);

//Routes
app.post(
  "/api/users/register",
  asyncHandler(async (req, res) => {
    const {
      name,
      email,
      password,
      phone,
      gender,
      height,
      weight,
      color,
      education,
      work,
      workPlace,
      nativePlace,
      kulam,
      kulaDheivam,
      father,
      mother,
      brother,
      sister,
      district,
      currentLocation,
      registerdBy,
      preferredLocations,
      preferredDistance,
      expectations,
      expectedStarSign,
      maritalStatus,
      income,
      otherIncome,
      property,
      familyDetails,
      familyStatus,
      jathagam,
      dateOfBirth,
      placeOfBirth,
      rasi,
      lagnam,
      birthStar,
      zodiacDirections,
      rasiBoxOne,
      rasiBoxTwo,
      rasiBoxThree,
      rasiBoxFour,
      rasiBoxFive,
      rasiBoxSix,
      rasiBoxSeven,
      rasiBoxEight,
      rasiBoxNine,
      rasiBoxTen,
      rasiBoxEleven,
      rasiBoxTwelve,
      lagnamBoxOne,
      lagnamBoxTwo,
      lagnamBoxThree,
      lagnamBoxFour,
      lagnamBoxFive,
      lagnamBoxSix,
      lagnamBoxSeven,
      lagnamBoxEight,
      lagnamBoxNine,
      lagnamBoxTen,
      lagnamBoxEleven,
      lagnamBoxTwelve,
    } = req.body;
    const userExists = await user.findOne({ email: email });
    if (userExists) {
      throw new Error("User already Exists");
    } else {
      const userCreate = await user.create({
        name,
        email,
        password,
        phone,
        gender,
        height,
        weight,
        color,
        education,
        work,
        workPlace,
        nativePlace,
        kulam,
        kulaDheivam,
        father,
        mother,
        brother,
        sister,
        district,
        currentLocation,
        registerdBy,
        preferredLocations,
        preferredDistance,
        expectations,
        expectedStarSign,
        maritalStatus,
        income,
        otherIncome,
        property,
        familyDetails,
        familyStatus,
        jathagam,
        dateOfBirth,
        placeOfBirth,
        rasi,
        lagnam,
        birthStar,
        zodiacDirections,
        rasiBoxOne,
        rasiBoxTwo,
        rasiBoxThree,
        rasiBoxFour,
        rasiBoxFive,
        rasiBoxSix,
        rasiBoxSeven,
        rasiBoxEight,
        rasiBoxNine,
        rasiBoxTen,
        rasiBoxEleven,
        rasiBoxTwelve,
        lagnamBoxOne,
        lagnamBoxTwo,
        lagnamBoxThree,
        lagnamBoxFour,
        lagnamBoxFive,
        lagnamBoxSix,
        lagnamBoxSeven,
        lagnamBoxEight,
        lagnamBoxNine,
        lagnamBoxTen,
        lagnamBoxEleven,
        lagnamBoxTwelve,
      });
      res.json({
        _id: userCreate._id,
        name: userCreate.name,
        email: userCreate.email,
        password: userCreate.password,
        token: generateToken(userCreate._id),
        phone: userCreate.phone,
        height: userCreate.height,
        weight: userCreate.weight,
        color: userCreate.color,
        education: userCreate.education,
        work: userCreate.work,
        workPlace: userCreate.workPlace,
        nativePlace: userCreate.nativePlace,
        kulam: userCreate.kulam,
        kulaDheivam: userCreate.kulaDheivam,
        father: userCreate.father,
        mother: userCreate.mother,
        brother: userCreate.brother,
        sister: userCreate.sister,
        district: userCreate.district,
        currentLocation: userCreate.currentLocation,
        registerdBy: userCreate.registerdBy,
        preferredLocations: userCreate.preferredLocations,
        preferredDistance: userCreate.preferredDistance,
        expectations: userCreate.expectations,
        expectedStarSign: userCreate.expectedStarSign,
        maritalStatus: userCreate.maritalStatus,
        income: userCreate.income,
        otherIncome: userCreate.otherIncome,
        property: userCreate.property,
        familyDetails: userCreate.familyDetails,
        familyStatus: userCreate.familyStatus,
        jathagam: userCreate.jathagam,
        dateOfBirth: userCreate.dateOfBirth,
        placeOfBirth: userCreate.placeOfBirth,
        rasi: userCreate.rasi,
        lagnam: userCreate.lagnam,
        birthStar: userCreate.birthStar,
        zodiacDirections: userCreate.zodiacDirections,
        rasiBoxOne: userCreate.rasiBoxOne,
        rasiBoxTwo: userCreate.rasiBoxTwo,
        rasiBoxThree: userCreate.rasiBoxThree,
        rasiBoxFour: userCreate.rasiBoxFour,
        rasiBoxFive: userCreate.rasiBoxFive,
        rasiBoxSix: userCreate.rasiBoxSix,
        rasiBoxSeven: userCreate.rasiBoxSeven,
        rasiBoxEight: userCreate.rasiBoxEight,
        rasiBoxNine: userCreate.rasiBoxNine,
        rasiBoxTen: userCreate.rasiBoxTen,
        rasiBoxEleven: userCreate.rasiBoxEleven,
        rasiBoxTwelve: userCreate.rasiBoxTwelve,
        lagnamBoxOne: userCreate.lagnamBoxOne,
        lagnamBoxTwo: userCreate.lagnamBoxTwo,
        lagnamBoxThree: userCreate.lagnamBoxThree,
        lagnamBoxFour: userCreate.lagnamBoxFour,
        lagnamBoxFive: userCreate.lagnamBoxFive,
        lagnamBoxSix: userCreate.lagnamBoxSix,
        lagnamBoxSeven: userCreate.lagnamBoxSeven,
        lagnamBoxEight: userCreate.lagnamBoxEight,
        lagnamBoxNine: userCreate.lagnamBoxNine,
        lagnamBoxTen: userCreate.lagnamBoxTen,
        lagnamBoxEleven: userCreate.lagnamBoxEleven,
        lagnamBoxTwelve: userCreate.lagnamBoxTwelve,
      });
    }
  })
);

app.post(
  "/api/users/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const userLogged = await user.findOne({ email: email });
    if (userLogged && (await userLogged.isPasswordMatch(password))) {
      res.status(200);
      res.json({
        _id: userLogged._id,
        name: userLogged.name,
        email: userLogged.email,
        password: userLogged.password,
        token: generateToken(userLogged._id),
      });
    } else {
      res.send(401);
      throw new Error("Invalid credentials");
    }
  })
);

app.put(
  "/api/users/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const updater = await user.findById(req.params.Id);
    if (updater) {
      const updatedUser = await user.findByIdAndUpdate(
        req.params.Id,
        req.body,
        { new: true, runValidators: true }
      );
      res.status(200);
      res.json(updatedUser);
    } else {
      res.status(500);
      throw new Error("Update failed");
    }
  })
);

app.delete(
  "/api/users/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    try {
      const deleteUser = await user.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send("User deleted succesfully");
    } catch (error) {
      res.json(error);
    }
  })
);

app.get(
  "/api/users/fetch/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const {
      name,
      email,
      password,
      phone,
      gender,
      height,
      weight,
      color,
      education,
      work,
      workPlace,
      nativePlace,
      kulam,
      kulaDheivam,
      father,
      mother,
      brother,
      sister,
      district,
      currentLocation,
      registerdBy,
      preferredLocations,
      preferredDistance,
      expectations,
      expectedStarSign,
      maritalStatus,
      income,
      otherIncome,
      property,
      familyDetails,
      familyStatus,
      jathagam,
      dateOfBirth,
      placeOfBirth,
      rasi,
      lagnam,
      birthStar,
      zodiacDirections,
      rasiBoxOne,
      rasiBoxTwo,
      rasiBoxThree,
      rasiBoxFour,
      rasiBoxFive,
      rasiBoxSix,
      rasiBoxSeven,
      rasiBoxEight,
      rasiBoxNine,
      rasiBoxTen,
      rasiBoxEleven,
      rasiBoxTwelve,
      lagnamBoxOne,
      lagnamBoxTwo,
      lagnamBoxThree,
      lagnamBoxFour,
      lagnamBoxFive,
      lagnamBoxSix,
      lagnamBoxSeven,
      lagnamBoxEight,
      lagnamBoxNine,
      lagnamBoxTen,
      lagnamBoxEleven,
      lagnamBoxTwelve,
    } = req.body;
    const userExists = await user.findOne({ email: email });
    const userFind = await user.find({
      name,
      email,
      password,
      phone,
      gender,
      height,
      weight,
      color,
      education,
      work,
      workPlace,
      nativePlace,
      kulam,
      kulaDheivam,
      father,
      mother,
      brother,
      sister,
      district,
      currentLocation,
      registerdBy,
      preferredLocations,
      preferredDistance,
      expectations,
      expectedStarSign,
      maritalStatus,
      income,
      otherIncome,
      property,
      familyDetails,
      familyStatus,
      jathagam,
      dateOfBirth,
      placeOfBirth,
      rasi,
      lagnam,
      birthStar,
      zodiacDirections,
      rasiBoxOne,
      rasiBoxTwo,
      rasiBoxThree,
      rasiBoxFour,
      rasiBoxFive,
      rasiBoxSix,
      rasiBoxSeven,
      rasiBoxEight,
      rasiBoxNine,
      rasiBoxTen,
      rasiBoxEleven,
      rasiBoxTwelve,
      lagnamBoxOne,
      lagnamBoxTwo,
      lagnamBoxThree,
      lagnamBoxFour,
      lagnamBoxFive,
      lagnamBoxSix,
      lagnamBoxSeven,
      lagnamBoxEight,
      lagnamBoxNine,
      lagnamBoxTen,
      lagnamBoxEleven,
      lagnamBoxTwelve,
    });
    res.json({
      _id: userFind._id,
      name: userFind.name,
      email: userFind.email,
      password: userFind.password,
      token: generateToken(userFind._id),
      phone: userFind.phone,
      height: userFind.height,
      weight: userFind.weight,
      color: userFind.color,
      education: userFind.education,
      work: userFind.work,
      workPlace: userFind.workPlace,
      nativePlace: userFind.nativePlace,
      kulam: userFind.kulam,
      kulaDheivam: userFind.kulaDheivam,
      father: userFind.father,
      mother: userFind.mother,
      brother: userFind.brother,
      sister: userFind.sister,
      district: userFind.district,
      currentLocation: userFind.currentLocation,
      registerdBy: userFind.registerdBy,
      preferredLocations: userFind.preferredLocations,
      preferredDistance: userFind.preferredDistance,
      expectations: userFind.expectations,
      expectedStarSign: userFind.expectedStarSign,
      maritalStatus: userFind.maritalStatus,
      income: userFind.income,
      otherIncome: userFind.otherIncome,
      property: userFind.property,
      familyDetails: userFind.familyDetails,
      familyStatus: userFind.familyStatus,
      jathagam: userFind.jathagam,
      dateOfBirth: userFind.dateOfBirth,
      placeOfBirth: userFind.placeOfBirth,
      rasi: userFind.rasi,
      lagnam: userFind.lagnam,
      birthStar: userFind.birthStar,
      zodiacDirections: userFind.zodiacDirections,
      rasiBoxOne: userFind.rasiBoxOne,
      rasiBoxTwo: userFind.rasiBoxTwo,
      rasiBoxThree: userFind.rasiBoxThree,
      rasiBoxFour: userFind.rasiBoxFour,
      rasiBoxFive: userFind.rasiBoxFive,
      rasiBoxSix: userFind.rasiBoxSix,
      rasiBoxSeven: userFind.rasiBoxSeven,
      rasiBoxEight: userFind.rasiBoxEight,
      rasiBoxNine: userFind.rasiBoxNine,
      rasiBoxTen: userFind.rasiBoxTen,
      rasiBoxEleven: userFind.rasiBoxEleven,
      rasiBoxTwelve: userFind.rasiBoxTwelve,
      lagnamBoxOne: userFind.lagnamBoxOne,
      lagnamBoxTwo: userFind.lagnamBoxTwo,
      lagnamBoxThree: userFind.lagnamBoxThree,
      lagnamBoxFour: userFind.lagnamBoxFour,
      lagnamBoxFive: userFind.lagnamBoxFive,
      lagnamBoxSix: userFind.lagnamBoxSix,
      lagnamBoxSeven: userFind.lagnamBoxSeven,
      lagnamBoxEight: userFind.lagnamBoxEight,
      lagnamBoxNine: userFind.lagnamBoxNine,
      lagnamBoxTen: userFind.lagnamBoxTen,
      lagnamBoxEleven: userFind.lagnamBoxEleven,
      lagnamBoxTwelve: userFind.lagnamBoxTwelve,
    });
  })
);
//profile route

//create profile
// app.post(
//   "/api/profile",
//   authMiddleware,
//   asyncHandler(async (req, res) => {
//     const profile = await profile.create(req.body);
//     if (profile) {
//       res.status(200);
//       res.json(profile);
//       // res.send("working");
//     } else {
//       res.status(500);
//       throw new Error("Profile Creation failed");
//     }
//   })
// );

//update profile

// app.put(
//   "/api/profile/:id",
//   authMiddleware,
//   asyncHandler(async (req, res) => {
//     const profile = await profile.create(req.body);
//     if (profile) {
//       res.status(200);
//       res.json(profile);
//       // res.send("working");
//     } else {
//       res.status(500);
//       throw new Error("Profile Creation failed");
//     }
//   })
// );

//fetch profiles

// app.get(
//   "/api/profile/fetch",
//   authMiddleware,
//   asyncHandler(async (req, res) => {
//     const profile = await profile.create(req.body);
//     if (profile) {
//       res.status(200);
//       res.json(profile);
//       // res.send("working");
//     } else {
//       res.status(500);
//       throw new Error("Profile Creation failed");
//     }
//   })
// );

//delete profile

// app.delete(
//   "/api/profile/:id",
//   authMiddleware,
//   asyncHandler(async (req, res) => {
//     try{
//       const profile = await profile.findByIdAndDelete(req.params.id);
//       res.status(200);
//       res.send(200);
//     }
//     catch(error){
//  res.json(error);
//     }
//   })
// );
