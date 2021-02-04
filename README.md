# uglify-js-memory-issue
uglify-js-memory-issue

# run production build with uglifyjs-webpack-plugin

```bash
npm run webpack:build
# or
yarn webpack:build
```

# uglify devlopment build via uglify-cli

```bash
npm run uglify
# equals to
npm run webpack:build-dev && npx cross-env UGLIFY_BUG_REPORT=1 uglifyjs --compress dist/uglify.bundle.js --output dist/uglify.bundle.min.js
```
