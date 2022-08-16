// ====
// 引数の型指定
// ====
{
  const sample = (data: number | string) => {
    console.log(`データ: ${data}`);
  };

  sample(3);
  sample("abc");
}

{
  const getMultiString = (word: string, count: number): string => {
    // return count; // エラー
    let multiString = word.repeat(count);
    return multiString;
  };
  console.log(getMultiString("test", 3));
}

// ====
// void
// ====
{
  const sample = (count: number): void => {
    for (let i = 0; i < count; i++) {
      console.log("test");
    }
  };

  sample(3);
}

// ====
// never
// ====
{
  // 実行すると無限ループになるため、実行しないでください。
  const infiniteLoop = (): never => {
    while (true) {
      console.log("never!");
    }
    // return true; // エラー
  };

  const errorSample = (message: string): never => {
    throw new Error(message);
    console.log("ここは実行されない");
  };

  errorSample("エラーです！");
}

// ====
// シグニチャ
// ====
// ## 関数のシグニチャとは
// - 関数名
// - 引数の数とそれぞれのデータ型
// - 戻り値のデータ型
