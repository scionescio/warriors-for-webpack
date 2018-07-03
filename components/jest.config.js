"jest": {
    "verbose": true,
    "transform": {
      "^.+\\.js$": "babel-jest",
      "^.+\\.(css|scss|less)$": "jest-css-modules"
    },
    "globals": {
      "NODE_ENV": "test"
    },
    "moduleFileExtensions": [
      "js",
      "jsx"
    ],
  "env": {
    "production": {
      "plugins": ["transform-es2015-modules-commonjs"]
    }
  }
  }