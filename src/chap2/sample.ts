// ====
// object の型指定
// ====
const apple: { name: string; price: number } = {
  name: "ふじりんご",
  price: 100,
};

type Fruit = {
  name: string;
  price?: number; // ? をつけることで省略可能になる
};

let melon: Fruit = {
  name: "meron",
  price: 400,
};

// ====
// 列挙型を宣言
// ====
enum TaxOption {
  WITH_TAX, // 0
  WITHOUT_TAX, // 1
}

const option: TaxOption = TaxOption.WITH_TAX;
console.log(option); // 0

enum Language {
  Japanese,
  English,
  Chinese,
  French,
}

const language: Language = Language.Japanese;

// ====
// タブル
// ====
const rice: [string, number, boolean] = ["コシヒカリ", 4000, true];

// ====
// null と undefined
// ====
let empty: null = null;
let undef: undefined = undefined;

// ====
// any型
// ====
let a: any = "文字列";
a = 100;
a = true;

// ====
// キャスト
// ====
{
  let num: number = 1000;
  let text: string = String(num);
  console.log(num);
}

// ====
// 複合的な型指定
// ====
let composite: string | number = 100;
composite = "文字列";
// composite = true; => error

// ====
// 文字列リテラル型
// ====
// 特定の文字列のみを格納できる
let letter: "a" = "a";
// letter = "b"; => error
