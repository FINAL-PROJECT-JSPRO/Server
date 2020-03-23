const Babel = require('@babel/core')
const options = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ]
}

module.exports = str => {
  const { code } = Babel.transform(str, options)
  return code
}