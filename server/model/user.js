const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  color: {
    type: String,

    label: "Select One",
  },
  education: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  workPlace: {
    type: String,
  },
  nativePlace: {
    type: String,
  },
  kulam: {
    type: String,
  },
  kulaDheivam: {
    type: String,
  },
  father: {
    type: String,
  },
  mother: {
    type: String,
  },
  brother: {
    type: String,
  },
  sister: {
    type: String,
  },
  district: {
    type: String,
  },
  currentLocation: {
    type: String,
  },
  registerdBy: {
    type: String,
  },
  preferredLocations: {
    type: String,
  },
  preferredDistance: {
    type: Number,
  },
  expectations: {
    type: String,
  },
  expectedStarSign: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  income: {
    type: String,
  },
  otherIncome: {
    type: String,
  },
  property: {
    type: String,
  },
  familyDetails: {
    type: String,
  },
  familyStatus: {
    type: String,
  },
  jathagam: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  placeOfBirth: {
    type: String,
  },
  rasi: {
    type: String,
  },
  lagnam: {
    type: String,
  },
  birthStar: {
    type: String,
  },
  zodiacDirections: {
    type: String,
  },
  rasiBoxOne: {
    type: String,
  },
  rasiBoxTwo: {
    type: String,
  },
  rasiBoxThree: {
    type: String,
  },
  rasiBoxFour: {
    type: String,
  },
  rasiBoxFive: {
    type: String,
  },
  rasiBoxSix: {
    type: String,
  },
  rasiBoxSeven: {
    type: String,
  },
  rasiBoxEight: {
    type: String,
  },
  rasiBoxNine: {
    type: String,
  },
  rasiBoxTen: {
    type: String,
  },
  rasiBoxEleven: {
    type: String,
  },
  rasiBoxTwelve: {
    type: String,
  },
  lagnamBoxOne: {
    type: String,
  },
  lagnamBoxTwo: {
    type: String,
  },
  lagnamBoxThree: {
    type: String,
  },
  lagnamBoxFour: {
    type: String,
  },
  lagnamBoxFive: {
    type: String,
  },
  lagnamBoxSix: {
    type: String,
  },
  lagnamBoxSeven: {
    type: String,
  },
  lagnamBoxEight: {
    type: String,
  },
  lagnamBoxNine: {
    type: String,
  },
  lagnamBoxTen: {
    type: String,
  },
  lagnamBoxEleven: {
    type: String,
  },
  lagnamBoxTwelve: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

//verify password

userSchema.methods.isPasswordMatch = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

// userSchema.pre("save", async function (next) {
//   salt = await bcryptjs.genSalt(10);
//   this.email = await bcryptjs.hash(this.email, salt);
//   next();
// });

const user = mongoose.model("user", userSchema);

module.exports = user;
