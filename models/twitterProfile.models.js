const mongoose = require ("mongoose");

const twitterProfileSchema = new mongoose.Schema({
    profilePic: String,
    fullName: String,
    userName: String,
    bio: String,
    companyName: String,
    city: String,
    portfolioLink: String,
    handle: String,
    followersCount: Number,
    FollowingCount: Number,
    isOnline: Boolean,
});

const TwitterProfile =  mongoose.model("TwitterProfile",twitterProfileSchema);

module.exports = TwitterProfile;