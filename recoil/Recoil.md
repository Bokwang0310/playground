# Recoil :: 상태관리를 더 리액티쉬하게

## 탄생 배경

기존의 Redux 같은 경우, 보일러 플레이트가 너무 많고 복잡하며 비동기 처리와 같은 로직을 수행하기 위해서는 redux-saga등의 라이브러리를 추가로 사용해야 하고 근본적으로 리액트를 위해 만들어진 라이브러리가 아니기 때문에 react-redux와 같은 추가 라이브러리를 사용해야 했습니다.

리액트 자체 기능인 Context API 같은 경우에는 의존하지 않는 값의 변경이 일어났을 때 리렌더링을 막는 것과 같은 최적화가 이루어지지 않기 때문에 Context의 분리에 신경을 써야합니다. 관리하는 전역 상태가 많아짐에 따라 이런 작업들은 번거롭고 귀찮을 수 있습니다.

## 장점

"리액트를 알고 있는" 라이브러리이기 때문에 `React.Suspense`와 같은 리액트의 기능을 쉽게 사용할 수 있고 기존에 hook을 사용했다면 쉽게 배울 수 있습니다.

> Recoil works and thinks like React. Add some to your app and get fast and flexible shared state. - recoiljs.org

액션을 만들고, 액션 생성 함수를 만들고 state 정의하고, 리듀서 만들고... 굉장히 많은 보일러 플레이트를 가지는 Redux와 달리 Recoil에서는 훨씬 적은 코드로 상태를 만들고 사용할 수 있습니다.

## 기본 사용법

### RecoilRoot

Redux에서 `Provider`를 통해 스토어를 사용할 수 있도록 해주었던 것 처럼 `RecoilRoot`를 컴포넌트 최상단에 감싸줘야 합니다.

```tsx
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  // Recoil을 사용하기 위한 준비
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);
```

### Atom

`atom`은 state와 같은 개념으로 특정 atom의 상태를 참조하고 있는 컴포넌트가 같은 값을 공유하게 되고 값이 업데이트 된다면 그것을 구독하고 있는 모든 컴포넌트가 자동으로 리렌더링 됩니다.

`atom`은 `key`와 `default`를 필수로 설정해줘야 합니다.

```ts
import { atom } from 'recoil';

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

function Count() {
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

export default Count;
```

### Selector
