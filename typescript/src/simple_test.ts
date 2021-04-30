const a = {
  name: "A" as const,
  list: [1, 2, 3, 4, 5],
};

const b = {
  name: "B" as const,
  list: ["1", "2", "3", "4", "5"],
};

type U = typeof a | typeof b;

const us: U[] = [
  {
    name: "A",
    list: [1, 2, 3],
  },
];

const isNumberArr = (arr: number[] | string[]): arr is number[] =>
  typeof arr[0] === "number";

const addItem = (us: U[], name: "A" | "B", list: number[] | string[]): U[] => {
  if (name === "A" && isNumberArr(list))
    return [
      ...us,
      {
        name,
        list,
      },
    ];
  else if (name === "B" && !isNumberArr(list)) {
    return [
      ...us,
      {
        name,
        list,
      },
    ];
  }
  return [...us];
};

export default () => {
  console.log(addItem(us, "A", [2, 3, 4, 5]));
};
