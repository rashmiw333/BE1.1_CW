const mongoose = require ("mongoose");

const twitterProfileSchema = new mongoose.Schema({
    profilePicUrl: String,
    fullName: String,
    username: String,
    bio: String,
    companyName: String,
    location: String,
    portfolioUrl: String,
    handle: String,
    followerCount: Number,
    followingCount: Number,
    isOnline: Boolean,
});

const TwitterProfile =  mongoose.model("TwitterProfile",twitterProfileSchema);

module.exports = TwitterProfile;