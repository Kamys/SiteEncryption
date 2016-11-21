/**
 * Encrypts the information according to the method of Julius Caesar.
 */

const alphabet = "а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,ю,э,я,_";
const ARR = alphabet.split(',');

/**
 *  Encryption text.
 * @param text The text you want to encryption.
 * @param mixing The number you want to mixing alphabet for encryption.
 * @returns {string} The encrypted text.
 */
function coding(text, mixing) {
    var arrText = text.split('');
    var out = "";

    for (var i = 0; i < text.length; i++) {
        var index = ARR.indexOf(arrText[i]);
        out = out + ARR[mixingIndex(index, mixing)];
    }
    return out;
}

/**
 * Get index for mixed alphabet.
 * @param index not mixed index.
 * @param mixing on much want mixing.
 * @returns {int} Mixing index.
 */
function mixingIndex(index, mixing) {
    var length = ARR.length;
    index += mixing;
    return transitionInRange(index,-1,length);
}

/**
 * If index not included in the range
 * adds or takes is index until index will not be in the range.
 * Adds and takes number max.
 * @param index index which needs transition.
 * @param max Max range.
 * @param min Min range.
 * @returns {number} Which lies on range.
 */
function transitionInRange(index, min,max) {
    while (index >= max)
        index -= max;

    while (index <= min)
        index += max;
    return index;
}

test();

function test() {

    var number = transitionInRange(5,0,4);
    if(number != 1) throw "transitionInRange test failed number = "+number;

    var mixing = mixingIndex(33,1);
    if (mixing != 0) throw "mixingIndex test failed mixing = "+mixing;

    var codingText = coding("абв_я",1);
    if (codingText != "бвга_") throw "coding test failed codingText = "+codingText;

    var codingText2 = coding("бвга_",-1);
    if (codingText2 != "абв_я") throw "coding2 test failed codingText = "+codingText2;
}

