#  designer

>

## 开发命令

```sh
yarn install
yarn start
```

- 代码提交: `git cz`
- 发版:

  ```sh
  # 开发环境,以dev开头的tag
  git tag dev-20190829 && git push origin dev-20190829

  # staging环境,以staging开头的tag
  git tag staging-20190829 && git push origin staging-20190829

  # 生产环节
  yarn release
  ```
