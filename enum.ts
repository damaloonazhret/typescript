enum Membership {
    Simple,
    standart,
    premium,
}

const membership = Membership.standart
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
    VK = 'vk',
    facebook = 'facebook',
    insta = 'instagram'
}

const social = SocialMedia.insta
console.log(social)