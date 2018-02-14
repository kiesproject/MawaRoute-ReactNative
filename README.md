# MawaRoute for ReactNative
## Description
- [まわルート](https://github.com/kiesproject/MawaRoute)をReactNative + TypeScript + Redux + Redux-sagaで実装する

### TS directory and Compiled JS direction
- TS directory -> [./src](https://github.com/kiesproject/MawaRouteForRN/tree/master/src)
- Compiled JS directory -> ```./build```

### Layer
#### Container Component
- AppContainer
  - 最上位層で各コンポーネントの画面遷移実装を実現します．

- HomeScreen
  - 配下にあるコンポーネント(タブのスクリーンなどなど)の実装を実現します．
  
#### Presentational Component
##### Tabs
- ListScreen
- MapScreen
- RouletteScreen
- DetailScreen(feature)

## Installation
```
$ npm install -g typescript //typescriptをインストール済みの場合は不要
$ npm install
```

## Environment
#### ReactNative(0.53.0), React(16.2.0)
- none

#### TypeScript
- 型ホシィ
- 型忘れたら[この記事](https://qiita.com/armorik83/items/4544248ecaf6569180d6)を参照したらいいかも

#### Redux
- Reactが扱うstateを管理するためのフレームワーク
- unidirectional data flow
- [Document](https://redux.js.org/)

#### Redux-saga
- Reduxに非同期などのside effectを実装するためのフレームワーク
- actionに応じて，sagaを呼び出して結果をもとのactionに返す感じ
- [Document](https://redux-saga.js.org/)

