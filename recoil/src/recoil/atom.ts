import { atom, selector } from 'recoil';

export const count = atom({
  key: 'count', // 고유한 key 값
  default: 0, // atom의 기본값
});

export const form = atom({
  key: 'form',
  default: '',
});

// Selector
export const reverseForm = selector({
  key: 'reverseForm',
  get: ({ get }) => {
    const normalForm = get(form);
    return normalForm.split('').reverse().join('');
  },
});

export const shuffle = selector({
  key: 'shuffle',
  // selector에 get은 필수
  get: ({ get }) => `${get(count)} ${get(form)}`,
  set: ({ set }, newValue) => {
    // newValue의 타입을 number로 지정하려하면 에러..
    set(count, Number(newValue));
    set(form, String(newValue));
  },
});
