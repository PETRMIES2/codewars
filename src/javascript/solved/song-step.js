/*

Input

The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output

Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

*/

function songDecoder(song, decoder = 'WUB'){
   return (song || "").split(decoder).filter(p=> p !== '').join(' ');
}

console.log(songDecoder('WUBDAUDWUB'));
