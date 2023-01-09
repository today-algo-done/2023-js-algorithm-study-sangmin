// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

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