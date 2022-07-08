module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'semi': 0,
    // 组件命名规则
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"], //需要忽略的组件名
      },
    ],
    // 内容缩进
    "indent": ["off", 2],
    //关闭组件命名规则
    "vue/multi-word-component-names": "off",
    // 文件末尾换行符
    'eol-last': 'off'
  }
}
