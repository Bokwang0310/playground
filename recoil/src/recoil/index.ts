import { atom, selector } from 'recoil';
import { getValueAfterDelay } from '../utils/index';
/**
 * ~~state가 보편적인 네이밍인 것 같다.
 * 이미 쓴 건 귀찮으니까 내버려둬야지..
 */

// 제네릭으로 타입 명시
export const count = atom<number>({
  key: 'count', // 고유한 key 값
  default: 0, // atom의 기본값
});

export const form = atom<string>({
  key: 'form',
  default: '',
});

// Selector
export const reverseForm = selector<string>({
  key: 'reverseForm',
  get: ({ get }) => {
    const normalForm = get(form);
    return normalForm.split('').reverse().join('');
  },
});

export const shuffle = selector<string>({
  key: 'shuffle',
  // selector에 get은 필수, set은 선택
  get: ({ get }) => `${get(count)} ${get(form)}`,
  set: ({ set }, newValue) => {
    set(count, Number(newValue));
    set(form, newValue);
  },
});

export const delayState = atom<number>({
  key: 'delayState',
  default: 0,
});

// 셀렉터로 비동기 처리
export const delalSelector = selector<number>({
  key: 'delaySelector',
  get: async ({ get }) => {
    return await getValueAfterDelay(get(delayState), 1000);
  },
  set: ({ set }, newValue) => {
    set(delayState, newValue);
  },
});
