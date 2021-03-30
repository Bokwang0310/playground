import { useRecoilState, useRecoilValue } from 'recoil';
import { form, reverseForm } from '../recoil/atom';

function Form() {
  const [value, setValue] = useRecoilState(form);
  const reversedForm = useRecoilValue(reverseForm);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <span>{reversedForm}</span>
    </div>
  );
}

export default Form;
