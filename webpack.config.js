// パスの標準モジュール設定
const path = require('path');

// {} 内はオブジェクトの設定
// ★★ entry、output、module のプロパティ3つを exports オブジェクトに設定 ★★
module.exports = {
    // 作業ディレクトリ設定
    // context: __dirname + '/src',

    // エントリーポイント（開始点となる js ファイル）
    // 作業ディレクトリを含まないようにして書く
    // entry: './index.js',

    // 今回は絶対パスで書いておく
    // entry: `${__dirname}/src/index.js`,

    // join はいい感じにパスを繋げてくれる？？らしい
    entry: path.join(__dirname, 'src', 'index.js'),

    // アウトプット（ビルドファイルの設定）
    // アウトプットは絶対パスで書かなければならない
    output: {
        // pass の設定
        // __dirname は node.js 標準のグローバル変数
        // path: `${__dirname}/dist`,
        path: path.join(__dirname, 'dist'),

        // 出力ファイル名
        filename: 'main.js'
    },

    // ローダーの設定
    module:{
        // [] は配列の設定
        rules:[
            {
                // test プロパティはルールに該当するファイルを指定
                test:/\.css$/,
                // use プロパティは使用するローダーを指定
                use:['style-loader','css-loader']
            }
        ]
    }
};

// 1つずつ細かく見ていくことがポイント!!