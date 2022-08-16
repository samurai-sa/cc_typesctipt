// ====
// オプショナルチェイニング
// ====
{
  type Fruit = {
    name: string;
    price: number;
    description?: {
      title: string;
      body: string;
    };
  };

  let melon: Fruit = {
    name: "プリンスメロン",
    price: 1000,
    description: {
      title: "メロン界の王様",
      body: "小さいですが香りがよく美味しいメロンです",
    },
  };

  let grape: Fruit = {
    name: "シャインマスカット",
    price: 3000,
  };

  let strawberry: Fruit = {
    name: "スカイベリー",
    price: 1500,
    description: {
      title: "空飛ぶいちごです",
      body: "大粒の美味しいイチゴです",
    },
  };

  const fruits: Array<Fruit> = [melon, grape, strawberry];
  for (let fruit of fruits) {
    // description が未定義の場合 undefined となりエラーとなる
    // ? をつけることで解決する
    console.log(fruit.description?.body);
  }
}
