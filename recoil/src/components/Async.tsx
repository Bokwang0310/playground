import { useRecoilState } from 'recoil';
import { delalSelector } from '../recoil/index';

function Async() {
  const [value, setValue] = useRecoilState(delalSelector);

  return (
    <div>
      <span>{value}</span>
      <button type="button" onClick={() => setValue(value + 1)}>
        Plus Value
      </button>
    </div>
  );
}

export default Async;
