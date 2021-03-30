import { useRecoilState } from 'recoil';
import { shuffle } from '../recoil/atom';

function Shuffle() {
  const [shuffled, shuffleState] = useRecoilState(shuffle);
  return (
    <>
      <div>{String(shuffled)}</div>
      <button type="button" onClick={() => shuffleState(Math.random())}>
        Shuffle
      </button>
    </>
  );
}

export default Shuffle;
