###
 # @Date: 2020-05-11 11:32:41
 # @LastEditors: Richard
 # @LastEditTime: 2020-05-11 11:33:10
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wjf-richard/blog-richard.git master:gh-pages

cd -
