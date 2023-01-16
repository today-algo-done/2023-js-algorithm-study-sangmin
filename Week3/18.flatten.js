// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

/** 솔루션 답안 */
function flatten(oldArr) {
  var newArr = []
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}

/**OKKY 의 해설
 * 배열 안에 배열이 있다면 true니까, 
 * 1(그 안의 배열)로 2(배열)이 또 있는지를 확인하면서 1개의 배열에 합치는 재귀입니다. 
 * 배열 안에 배열이 없을 때까지 반복됩니다.
 */


/** 찾은 답안 helper 를 이용하는 방법 */
function flatten(arr) {
  let result = [];

  function helper(helperInput) {
    //배열의 갯수가 0이면 그냥 리턴
    if (helperInput.length === 0) {
      return;
    }
    if (typeof helperInput[0] === 'object') {
      //타입이 오브젝트(객체) 이면
      helper(helperInput[0]);
      //배열의 0번째 자리에 넣고
    } else {
      //아니면 그냥 배열의 0번째 자리에 넣는다
      result.push(helperInput[0]);
    }
    //helperInput 에 포함되어 있는 인덱스 들을 1개씩 자른다.
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}