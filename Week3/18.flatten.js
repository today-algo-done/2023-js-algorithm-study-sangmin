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

/** Programers 해설 
재귀 함수를 다루는 데 있어서 가져야 되는 것이 있는데, 바로 함수에 대한 믿음입니다. 
여기서 flatten 함수는 배열을 flat 하게 만들어 주는 함수입니다. 
이 때 함수의 내용을 구현할 때에는 함수 안의 코드에서 등장한 flatten 함수는 올바르다고 믿어 봅시다.

무슨 말인지 헷갈릴 수도 있을 것 같습니다. 예시를 들어 보겠습니다.

const arr = [
  [1, [2, 3, 4], [5, [6], 7]],
  [3, 1, 4, [1]],
  5, 9,
  [2, 6, 5]
]
우리가 arr에 flatten을 하고 싶다고 가정해 보겠습니다.

Array.isArray는 어떤 변수가 배열인지 아닌지를 알려줍니다.
위에서 언급해 주신 코드는 그러면 원소가 배열인 경우에는 flatten 함수를 호출해서 newArr에 원소들을 전부 집어넣을 것이고,
그렇지 않을 경우에는 원소 하나이므로 newArr에 그냥 집어넣어 줄 것입니다.
그러면 이 flatten 함수의 구현이 맞다고 믿고, arr의 각 원소에 대해 위의 for-루프를 돌리면 어떤 일이 일어나는지 생각해 봅시다.

  [1, [2, 3, 4], [5, [6], 7]],
  // flatten 후 -> [1, 2, 3, 4, 5, 6, 7]
  [3, 1, 4, [1]],
  // flatten 후 -> [3, 1, 4, 1]
  5,
  // -> 배열이 아니므로 그대로
  9,
  // -> 배열이 아니므로 그대로
  [2, 6, 5]
  // flatten 후 -> [2, 6, 5]
결국에는,

newArr = newArr.concat([1, 2, 3, 4, 5, 6, 7])
newArr = newArr.concat([3, 1, 4, 1])
newArr.push(5)
newArr.push(9)
newArr = newArr.concat([2, 6, 5])
을 하게 되고, 우리가 기대하는 [1, 2, 3, 4, 5, 6, 7, 3, 1, 4, 1, 5, 9, 2, 6, 5]가 된다는 것을 알 수 있습니다. 
함수 안에 적혀 있는 flatten이 잘 실행될 거라고 믿었더니, 결과가 제대로 나오는 것을 알 수 있습니다.

재귀 함수는 어떻게 짜나요
재귀 함수를 분석하는 것과 일맥상통합니다. 
flatten이라는 재귀 함수를 처음부터 작성해야 한다고 한다면, 일단 올바른 flatten 함수가 이미 있다고 가정하고, 
이걸 어떻게 활용하면 좋을지 고민해 보면 조금 더 쉽게 짤 수 있을 것입니다. 
이 때 생각의 방향은 "큰 문제를 작은 문제로 쪼개서 생각한다"가 되면 더 좋겠습니다. 
(그렇지 않으면 function flatten(oldArr) { return flatten(oldArr) } 같은 코드를 만들 수도 있으니까요!)

앞서 언급한 arr의 상황을 살펴봅시다. arr를 flatten 하려고 봅시다.

우선 이 큰 문제를 작은 문제들로 쪼개 본다면 arr의 원소 각각에 대해 flatten을 하고 생각하면 좋을 것 같아 보입니다.
flatten을 하고 보니 [1, 2, 3, 4, 5, 6, 7], [3, 1, 4, 1], 5, 9, [2, 6, 5]가 나옵니다.
이제 이걸 [1, 2, 3, 4, 5, 6, 7, 3, 1, 4, 1, 5, 9, 2, 6, 5]로 바꾸는 방법을 생각해 볼 수 있겠습니다. 
(2)에서 (3)으로 오는 것은 처음 문제를 바로 푸려고 하는 것보다 쉬울 것입니다.

https://qna.programmers.co.kr/questions/18110/javascript-%EC%9D%98-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98-%EB%AC%B8%EC%A0%9C
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