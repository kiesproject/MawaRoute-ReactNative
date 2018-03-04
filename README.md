# MawaRoute for ReactNative
## Description
- [まわルート](https://github.com/kiesproject/MawaRoute)をReactNative + Redux + Redux-sagaで実装する
- TypeScriptでの実装を行う予定でしたが，パッケージに合わせた開発を行うためにJavaScriptで開発をすることにしました．

### Layer
#### Container Component
- AppContainer
  - 最上位層で各コンポーネントの画面遷移実装を実現します．
  
#### Presentational Component
##### HomeScreen
  - 配下にあるコンポーネント(タブのスクリーンなどなど)の実装を実現します．

##### Tabs
- ListScreen
- MapScreen
- RouletteScreen
- DetailScreen(feature)

## Installation
```
$ npm install
```
`ios/`ディレクトリでpodsをinstallします
```
$ pod install
```

## Environment
#### ReactNative(0.53.0), React(16.2.0)
- none

#### Redux
- Reactが扱うstateを管理するためのフレームワーク
- unidirectional data flow
- [Document](https://redux.js.org/)

#### Redux-saga
- Reduxに非同期などのside effectを実装するためのフレームワーク
- actionに応じて，sagaを呼び出して結果をもとのactionに返す感じ
- [Document](https://redux-saga.js.org/)

