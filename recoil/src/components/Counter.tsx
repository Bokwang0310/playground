import { useRecoilState, useResetRecoilState } from 'recoil';
import { count as countAtom } from '../recoil';

function Counter() {
  const [count, setCount] = useRecoilState(countAtom);
  /**
   * useRecoilValue()와 useSetRecoilState()를 통해 값 또는 세터만 받을 수도 있다
   */
  const resetCount = useResetRecoilState(countAtom);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={resetCount}>0</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
