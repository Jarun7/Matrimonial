const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    registerNo: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
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
    },
    education: {
      type: String,
    },
    work: {
      type: String,
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
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const profile = mongoose.model("profile", profileSchema);
module.exports = profile;
