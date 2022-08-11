//_________________________________fast problem___________________________________//
function radianToDegree(radian)
// Alart message start 
{
    const radianType = typeof radian;
    // Allart stop
    if (radianType == "number") {
        let degree = radian * (180 / Math.PI);
        return degree.toFixed(2);
    }


}

//_______________________________________secend problem____________________________//
function isJavaScriptFile(string) {
    //   Alart start 
    let results = string.endsWith('app.js');
    // alart stop 
    if (results === true) {
        return results;
    }
    else {
        return false;
    }

}

//_______________________________________third problem_____________________________//


function oilPrice(fastAgle, secendAngle, thirdAngle)
// Alart massage start 
{
    let deselLitter = 114;
    let pertolLiter = 130;
    let auctleLiter = 135;

    let deselPrice = deselLitter * fastAgle;
    let pertolPrice = pertolLiter * secendAngle;
    let auctlePrice = auctleLiter * thirdAngle;

    let tootlePrice = deselPrice + pertolPrice + auctlePrice;
    return tootlePrice
    // alart stop 
}
let costMoney = oilPrice(1, 1, 1);

//____________________________________fourd problem________________________________//
function publicBusFare(passanger)
// alaet message start 
{
    let buseSpaces = 50;
    let microBusSpace = 11;
    let busBack = passanger % buseSpaces;
    let microBusBack = busBack % microBusSpace;
    let free = microBusBack * 250;
    return free;
    // alart stop
}
const passangereRest = publicBusFare(365);


// ___________________________________five Provlem_______________________________//

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
