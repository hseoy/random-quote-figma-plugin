# Figma Plugin - Random Quote

> 피그마 플러그인 튜토리얼을 주제로 쓴 글을 위한 예시 플러그인입니다.

텍스트 노드를 선택한 후 `Random Quote` 버튼을 클릭하면 선택한 텍스트 노드에 임의의 인용문이 삽입됩니다.

## Install and Start

```
$ git clone https://github.com/hseoy/random-quote-figma-plugin
$ yarn install
$ yarn watch
```

## 실행방법

1. 피그마 데스크탑을 실행합니다.
2. 오른쪽 상단의 프로필 드랍다운을 클릭한 후 목록에서 `Plugins`를 클릭합니다.
3. `In development` 섹션에서 Plus(+) 아이콘을 클릭합니다.
4. `Import from manifest`를 선택합니다.
5. clone 받은 경로에서 manifest.json을 선택합니다.
6. 이제 플러그인을 피그마 파일에서 사용할 수 있습니다. 아무 피그마 파일이나 선택한 후 `Plugins > Development > random-quote`를 클릭하면 아래와 같이 실행되는 동작을 확인할 수 있습니다.

![run](./images/example-plugin-run.gif)

## 참고

- [hseoy/figma-plugin-react-boilerplate](https://github.com/hseoy/figma-plugin-react-boilerplate)를 기반으로 개발되었습니다.
