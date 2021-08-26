# 리액티쉬한 상태관리 | Recoil

## Recoil 이전의 상황

기존의 Redux 같은 경우, 보일러 플레이트 코드가 너무 많고 복잡하며 비동기 처리와 같은 로직을 수행하기 위해서는 redux-saga등의 라이브러리를 추가로 사용해야 했습니다. 또한, Redux 자체가 리액트를 위해 만들어진 라이브러리는 아니기 때문에 react-redux와 같은 추가 라이브러리를 사용해야 했습니다.

다른 대안으로 리액트 자체 기능인 Context API가 있지만 불필요한 렌더링이 발생하는 상황이 자주 발생하기 때문에 규모가 큰 앱에서는 추가적인 최적화가 필요하다는 단점이 있습니다.

## 장점

"리액트를 알고 있는" 라이브러리이기 때문에 `React.Suspense`와 같은 리액트의 기능을 쉽게 사용할 수 있고 hook을 사용했다면 아주 쉽게 배울 수 있습니다.

> Recoil works and thinks like React. Add some to your app and get fast and flexible shared state. - recoiljs.org

액션 만들고, 액션 생성 함수 만들고 초깃값 만들고, 리듀서 만들고... 굉장히 많은 보일러 플레이트를 가지는 Redux와 달리 Recoil에서는 훨씬 적은 코드로 상태를 만들고 사용할 수 있습니다.

## 기본 사용법

### Install

```bash
$ npm i recoil
$ yarn add recoil
```

### RecoilRoot

Redux에서 `Provider`를 통해 스토어를 사용할 수 있도록 해주었던 것 처럼 `RecoilRoot`를 컴포넌트 최상단에 감싸줘야 합니다.

```tsx
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  // RecoilRoot로 감싸주기만 하면 준비 끝
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);
```

### Atom

atom은 state와 같은 개념으로 특정 atom을 구독하고 있는 컴포넌트들끼리 같은 값을 공유하게 되고 atom이 업데이트 된다면 모든 컴포넌트가 자동으로 리렌더링 됩니다.

atom은 `key`와 `default`를 필수로 설정해줘야 합니다.

```ts
import { atom } from 'recoil';

// 제네릭을 통해 상태값의 타입을 설정해 줄 수 있다.
// 타입 추론이 되기 때문에 일반적으로는 직접 해줄 필요가 없지만 null 값이 들어갈 수 있는 타입이거나 복잡한 형태의 타입 같은 경우는 설정해 주는 것이 좋다.
const countState = atom<number>({
  key: 'countState', // 유일한 값
  default: 0, // 기본값
});
```

### Atom의 사용

이렇게 만든 atom은 아래의 hook을 사용하여 쓸 수 있습니다.

- useRecoilState
- useRecoilValue
- useSetRecoilState

`useRecoilState`는 `React.useState`와 비슷하게 상태와 상태를 변경하는 함수를 가진 배열을 반환합니다.

`useRecoilValue`와 `useSetRecoilState`는 각각 상태와 변경 함수만을 반환합니다.

```tsx
import { atom } from 'recoil';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const countState = atom<number>({
  key: 'countState',
  default: 0,
});

function App() {
  const [count, setCount] = useRecoilState(countState); // atom을 인자로 받는다.
  // const count = useRecoilValue(countState);
  // const setCount = useSetRecoilState(countState);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App;
```

### Selector

selector는 atom의 파생된(계산된) 데이터를 나타내기 위해 쓰입니다. atom의 값이 변경될 때 selector도 업데이트되며 해당 selector를 구독하고 있는 컴포넌트도 리렌더링 됩니다.

atom과 마찬가지로 `key`를 필수로 설정해줘야하며 `default`가 아닌 `get`을 설정해줘야 합니다.

또한, 위에서 사용했던 세가지 hook을 selector에도 사용합니다.

```tsx
import { atom, selector } from 'recoil';
import { useRecoilState, useRecoilValue } from 'recoil';

const clickAState = atom<number>({
  key: 'clickAState', // 필수
  default: 0, // 필수
});

const clickBState = atom<number>({
  key: 'clickBState',
  default: 0,
});

// 두 atom의 값을 가져와 가공한 후 리턴
const totalClickState = selector<string>({
  key: 'totalClickState',
  get: ({ get }) => {
    const clickACount = get(clickAState);
    const clickBCount = get(clickBState);

    return `You clicked ${clickACount + clickBCount} times in total.`;
  },
});

function ButtonA() {
  const [count, setCount] = useRecoilState(clickAState);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function ButtonB() {
  const [count, setCount] = useRecoilState(clickBState);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function App() {
  const totalCount = useRecoilValue(totalClickState);

  return (
    <>
      <ButtonA />
      <ButtonB />
      <div>{totalCount}</div>
    </>
  );
}

export default App;
```

### Selector의 Setter

selector에서는 단순히 여러 atom으로부터 값을 가져오고 가공해서 줄 수 있을 뿐만 아니라 여러 atom의 값을 바꿀 수도 있습니다.

```tsx
import { atom, selector } from 'recoil';
import { useRecoilState } from 'recoil';

const clickAState = atom<number>({
  key: 'clickAState',
  default: 0,
});

const clickBState = atom<number>({
  key: 'clickBState',
  default: 0,
});

const totalClickState = selector<string>({
  key: 'totalClickState',
  get: ({ get }) => {
    const clickACount = get(clickAState);
    const clickBCount = get(clickBState);

    return `You clicked ${clickACount + clickBCount} times in total.`;
  },
  // setter 추가
  set: ({ set }) => {
    // 각 atom의 값을 0으로 바꾼다.
    set(clickAState, 0);
    set(clickBState, 0);
  },
});

function ButtonA() {
  const [count, setCount] = useRecoilState(clickAState);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function ButtonB() {
  const [count, setCount] = useRecoilState(clickBState);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function App() {
  // 이제는 set 함수도 가져와야하니 useRecoilState 사용
  const [totalCount, resetTotalCount] = useRecoilState(totalClickState);

  return (
    <>
      <ButtonA />
      <ButtonB />
      <div>{totalCount}</div>
      <button onClick={resetTotalCount}>Reset</button>
    </>
  );
}

export default App;
```

또한, set 함수의 두번째 인자로 새로운 값을 받아올 수 있을 뿐만 아니라 get을 통해 atom이나 다른 selector의 값을 조회할 수 있습니다.

```ts
const exampleState = selector({
  key: '...',
  get: ({ get }) => {
    /* ... */
  },
  set: ({ set, get }, newValue) => {
    const fooValue = get(fooState);
    set(barState, fooValue + newValue);
  },
});

// 사용하는 곳
const [value, setValue] = useRecoilState(exampleState);
setValue('The New Value!');
```
