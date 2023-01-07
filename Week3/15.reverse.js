/**이게 문자 뒤집는거에 대해 거의 공식인데.. 왜 안되는지 모르겠...... */
// function reverse(a) {
//     let rev = a.split("").reverse().join("")
// }

/**재귀 함수를 해야 하는 듯 하니 최대한 재귀를 사용해서 */
function reverse(a) {

    if (a === "") {
        return "";
    }
    else {
        /** https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr */
        return reverse(a.substr(1)) + a.charAt(0);

        /** https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charAt */
    }
}


  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'