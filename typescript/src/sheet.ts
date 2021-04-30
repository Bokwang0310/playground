type ColorItem = {
  id: string;
  color: string;
};
type TypographyItem = {
  id: string;
  text: string;
  variant: string;
  css: string;
};
type ButtonItem = {
  id: string;
  text: string;
  css: string;
};
type CustomElementItem = {
  id: string;
  elementType: string;
  css: string;
};

type Item = ColorItem | TypographyItem | ButtonItem | CustomElementItem;

type ColorSection = {
  type: "color";
  id: string;
  itemList: ColorItem[];
};
type TypographySection = {
  type: "typography";
  id: string;
  itemList: TypographyItem[];
};
type ButtonSection = {
  type: "button";
  id: string;
  itemList: ButtonItem[];
};
type CustomElementSection = {
  type: "customElement";
  id: string;
  itemList: CustomElementItem[];
};

type Section =
  | ColorSection
  | TypographySection
  | ButtonSection
  | CustomElementSection;

type Sheet = {
  id: string;
  name: string;
  date: string;
  sectionList: Section[];
};

const sheetList: Sheet[] = [
  {
    id: "1",
    name: "Hello",
    date: "239048",
    sectionList: [
      {
        id: "1",
        type: "color",
        itemList: [{ id: "1", color: "2" }],
      },
    ],
  },
];

const createItem = (
  sheetID: string,
  sectionID: string,
  payload: Item
): Sheet[] => {
  return sheetList.map((sheet) => {
    if (sheet.id !== sheetID) return sheet;

    return {
      ...sheet,
      sectionList: sheet.sectionList.map((section) => {
        if (section.id !== sectionID) return section;

        const newSection: Section = {
          ...section,
          itemList: [],
        };
        return newSection;
      }),
    };
  });
};

const a = createItem("1", "1", { id: "1", color: "Hello" });

export default () => {
  console.log(a);
};
