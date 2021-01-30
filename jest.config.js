module.exports = {
  // プロジェクトルートの設定
  rootDir: '.',

  // テストコードを発見する
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],

  // TypeScriptで書かれたコードを型チェック込みでテストしたい
  // ts-jestがあればBabel要らない
  //transform: {
  //  '^.+\\.(ts|tsx)$': 'ts-jest',
  //},
  preset: 'ts-jest',

  // 実行中に個々のテスト結果を出力する
  verbose: true,
};