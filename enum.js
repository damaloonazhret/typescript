var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["standart"] = 1] = "standart";
    Membership[Membership["premium"] = 2] = "premium";
})(Membership || (Membership = {}));
var membership = Membership.standart;
var membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "vk";
    SocialMedia["facebook"] = "facebook";
    SocialMedia["insta"] = "instagram";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.insta;
console.log(social);
