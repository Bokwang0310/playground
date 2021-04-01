import { useRecoilState } from 'recoil';
import { shuffle } from '../recoil';

function Shuffle() {
  // 아톰, 셀렉터에서 타입 지정 해주었다면 사용처에서는 타입 추론 가능
  const [shuffled, shuffleState] = useRecoilState(shuffle);
  return (
    <>
      <div>Combined: {shuffled}</div>
      <button type="button" onClick={() => shuffleState(String(Math.random()))}>
        Shuffle
      </button>
    </>
  );
}

export default Shuffle;
