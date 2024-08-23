# 数据库目录
./financial info/financial_server
## 数据库环境部署

只需要安装Django:
```
pip install Django tushare
```

## 数据库启动

将终端地址cd至本目录，然后运行：
```
python manage.py runserver
```

在默认的输出端口后添加'\admin'在浏览器打开，未设置下默认为8000端口。用户名admin,密码12345678，可查看目前数据库内容。

# api端口说明

以下api均在http://localhost:8000 端口下访问

* /admin 数据库视图，可查看数据库内容
* /news/ele_tags/ \<ele_tag\> /nums 
  * 请求信息，\<ele_tag>为板块中文名称，\<nums>为获取的最大消息数量
* /news/industry_tag/ \<industry_tag\>/ \<nums\>
  * 请求信息，\<industry_tag>为行业中文名称，\<nums>为获取的最大消息数量
* /news/theme_tag/ \<theme_tag>/ \<nums>
  * 请求信息，\<theme_tag>为主题中文名称（现货市场、金融市场、地区市场、宏观、微观），\<nums>为获取的最大消息数量
* /stock/ \<market_loc>/
  * 请求股票数据，market_loc指定地区（沪深、亚洲、美股），返回json内容

# 数据来源
./financial info/tushare.ipynb
# 数据标签
./tags