const mongooes = require ("mongoose");

const twitterProfileSchema = new mongooes.Schema({
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

const TwitterProfile = new mongooes.model("TwitterProfile",twitterProfileSchema);

module.exports = TwitterProfile;