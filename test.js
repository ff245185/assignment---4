function isBestFriend(friendlist1, friendlist2) {
    // Alart massage startd 
    if (typeof friendlist1 !== 'object' || typeof friendlist2 !== 'object') {
        const erromasage = ' please show your wright name'
        return erromasage
    }
    //  Alart massage stope 
    else if (friendlist1.name === friendlist2.friend && friendlist2.friend === friendlist2.name) {
        return true;
    }
    else {
        return false;
    }
}
const persone1 = { name: 'roke', friend: 'abdullah' };
const persone2 = { name: 'abdullah', friend: 'roke' };
const ourObject = isBestFriend(persone1, persone2);
console.log(ourObject)







let stringNamer = 'app.js';
let stringAdd = isJavaScriptFile(stringNamer);
console.log(stringAdd);