/**
 * 1. 화살표 함수에 인자가 하나인 경우
 *
 * prettier/eslint의 기본값은 왜 괄호를 강제로 넣는 것인가.
 */

const add5 = (a) => a + 5;

/**
 * Arrow functions can omit parentheses when they have exactly one parameter.
 * In all other cases the parameter(s) must be wrapped in parentheses.
 * This rule enforces the consistent use of parentheses in arrow functions.
 *
 * https://eslint.org/docs/rules/arrow-parens
 */

/**
 * 그냥 일관되게 할려고 그런 것 같다.
 *
 * 쓰면서 생각해 보니까
 * 괄호 생략은 분명 쓸 땐 편한데 함수 인자가 두 개가 되는 경우에는
 * 괄호를 다시 달아줘야 하기도 하고 불편했던 것 같다
 *
 * 심지어 타입스크립트에서는 타입 때문에 생략할 수 있는 경우가
 * 거의 없기도 하고
 */

/**
 * 2. object 마지막에 쉼표는 왜 자꾸 넣는거지
 */

({
  a: 1,
  b: 2,
  c: 3, // <-- 이거
}.a);

/**
 * 이것도 되게 별거 없네
 *
 * 그냥 오브젝트에 값을 추가하게 될 때
 * 이전 줄 수정 없이 바로 다음 줄에서 편집을 할 수 있기도 하고
 * 수정했을 때 깃 같은 버전 관리 툴이 실제로 의미있는 수정이 이루어진 줄만
 * 체크하게하기 위해서라고 한다
 *
 * 그래서 오브젝트 뿐만 아니라 배열이나 파라미터 나열에도 쓸 수 있다고 한다
 */

[
  1, 2, 3, 4, 5, 1231231311, 444323232323, 1212112, 2312930810923, 232132, 4234,
  234234234234, 24324234234, 2139001, 1919029, 1209219,
];

function temp(
  qwedfffdgdfbbcbcr,
  asdqqqmmmdfdfgdfgdff,
  zxcfsdfsdfsdfxcvxcv,
  wersdfsdfcvbcvbcvbcvbcvt,
  sdfsdfsdfsfsfsfdsg,
  xsdfsdfsdfsfsfsv,
  cvbsdsdfsfsdfdsfsn,
  ertsdfsdfdsfsdfsdfsdfsfsy,
  dfgsdfsdfsfdsfsdfh,
  mnsdfsdfdsfdsfsb,
  jfgasdaopfjigjigrh,
  eiwfheosisdicsdvsvoisjv
) {} // 뭐지 왜 안돼

/**
 * 추가로, JSON에서는 쓰면 파싱 에러 난다니까 조심
 */

/**
 * 3. 왜 prettier 기본값은 쌍따옴표인가
 *
 * CRA 같은 걸로 보일러 플레이트 코드를 받거나 할 때면
 * 보통 다 홀따옴표 쓰던데 prettier는 기본값이 쌍따옴표다
 */

/**
 * 진짜 모르겠다
 * https://github.com/prettier/prettier/issues/1105
 */
