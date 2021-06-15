/**
 * IIFE는 뭘까?
 *
 * Immediately Invoked Function Expression의 줄임말인 IIFE는 함수를 정의하자마자 실행시킬 떄 쓰는 것
 *
 * 발음은 "이피"?라고 하는 듯
 */

(function () {
  console.log("In IIFE!");
})();

/**
 * 왜 있는 거지?
 *
 * ES6 이전, const도 let도 없던 암울한 시기에는 var 변수 밖에 없었다.
 * 그리고 지금처럼 스크립트 태그 속성에 type="module"도 없었으니
 * 함수 스코프를 가지는 var를 묶어둘 방법이 없었고
 * 막무가내로 스코프를 어지럽히는 var 변수들을 가두기 위해 썼던 게 아닐까
 */

for (var i = 0; i < 10; i++) {}
console.log(i);

for (let j = 0; j < 10; j++) {}
try {
  console.log(j);
} catch (err) {
  console.log(err.name);
}

/**
 * 그럼 지금은 쓸모가 없는 건가?
 *
 * 모름
 *
 * 개인적으로 바닐라 자바스크립트로 웹을 만들 때 메인 함수로 쓰기도 하는데
 * 의미가 있나 싶긴 함
 */

(function main() {
  // ...src
})();

/**
 * IIFE로 부터 값을 리턴받을 필요가 없을 때
 * 앞에 연산자나 void를 붙여
 * 표현식으로 강제한다는데
 *
 * 그냥 괄호로 감싼 IIFE도 리턴을 안 하면 undefined인데 왜
 * 왜.. 굳이
 */

let result = (function () {})();

console.log(result);

result = void (function () {})();

console.log(result);
