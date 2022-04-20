# Style Dictionary

CBP Design System uses `style-dictionary` to manage all tokens to easily change or update values as a single source of truth. Instead of having to go through each individual page to update properties, we can now update properties in the matching `JSON` file and have it update throughout the entire code base. 

```bash
npm run style-dictionary
```

All updates to token values should be in the matching `JSON` files under `/styles/tokens` and the output of the `style-dictionary` build will be in the `/styles/sass/cbp-tokens` directory. 

```
├── README.md
├── config.json
├── styles
│   ├── tokens
│       ├── color/
│       ├── theme.json
│       ├── base.json
│       ├── state.json
│       ├── text.json
│       ├── ui.json
│   ├── sass/ (build)
│      ├── cbp-tokens/
│          ├── _colors.scss
│          ├── _theme.json
│          ├── _base.json
│          ├── _state.json
│          ├── _text.json
│          ├── _ui.json
```

A few things happen during the `style-dictionary` build:
1. The build system does a deep merge of all the token JSON files defined in the `source` attribute of `config.json`. This allows you to split up the token JSON files however you want. There are 2 JSON files with `color` as the top level key, but they get merged properly.
1. The build system resolves references to other design tokens. `{size.font.medium.value}` gets resolved properly.
1. The build system handles references to token values in other files as well as you can see in `tokens/color/font.json`.

[transforms](https://amzn.github.io/style-dictionary/#/transforms?id=pre-defined-transforms) and [formats](https://amzn.github.io/style-dictionary/#/formats?id=pre-defined-formats).
