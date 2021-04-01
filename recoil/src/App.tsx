import { Suspense } from 'react';

import Counter from './components/Counter';
import Form from './components/Form';
import Shuffle from './components/Shuffle';
import Async from './components/Async';

function App() {
  return (
    <>
      <Counter />
      <Form />
      <Shuffle />
      {/* 일반 useRecoilState를 사용하는 경우, React.Suspense로 감싼다 */}
      <Suspense fallback={<div>Loading....</div>}>
        <Async />
      </Suspense>
    </>
  );
}

export default App;
