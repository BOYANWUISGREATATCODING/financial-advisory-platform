from django.shortcuts import render
from django.http import HttpResponse
import tushare as ts
import numpy as np
from datetime import datetime
import json
import pandas as pd


# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def stock_info(request, market_loc):
    stock_dic = {
        '沪深':[
            {
                'name':'上证指数',
                'ts_code':'000001.SH'
            },
            {
                'name':'深证A指',
                'ts_code':'399107.SZ'
            },
            {
                'name':'上证50',
                'ts_code':'000016.SH'
            },
            {
                'name':'深证200',
                'ts_code':'399009.SZ'
            }
        ],
        '亚洲':[
            {
                'name':'富时A50',
                'ts_code':'XIN9'
            },
            {
                'name':'恒生指数',
                'ts_code':'HSI'
            },
            {
                'name':'日经225指数',
                'ts_code':'N225'
            },
            {
                'name':'韩国综合指数',
                'ts_code':'KS11'
            }
        ],
        '美股':[
            {
                'name':'道琼斯工业指数',
                'ts_code':'DJI'
            },
            {
                'name':'标普500指数',
                'ts_code':'SPX'
            },
            {
                'name':'纳斯达克指数',
                'ts_code':'IXIC'
            },
            {
                'name':'富时100指数',
                'ts_code':'FTSE'
            }
        ]
    }
    my_token = '385dd2ce2cba06cccecdacd6c07c292b088441452d1479482622fb91'
    pro = ts.pro_api(my_token)
    # yesterday,today = get_dates()
    if(market_loc == '沪深'):
        for i in range(len(stock_dic['沪深'])):
            df = pro.index_daily(ts_code=stock_dic['沪深'][i]['ts_code'], start_date='20240701')
            # print(df.head(1))
            df = df.head(1)
            # print(df['close'])
            # print(df)
            stock_dic['沪深'][i]['price'] = df['close'].item()
            stock_dic['沪深'][i]['change_rate'] = df['pct_chg'].item()
    else:
        for i in range(len(stock_dic[market_loc])):
            df = pro.index_global(ts_code=stock_dic[market_loc][i]['ts_code'], start_date='20240701')
            df = df.head(1)
            # print(df)
            stock_dic[market_loc][i]['price'] = df['close'].item()
            stock_dic[market_loc][i]['change_rate'] = df['pct_chg'].item()
    # print(df)
    print(stock_dic[market_loc])
    return HttpResponse(json.dumps(stock_dic[market_loc]),content_type="application/json",charset="utf-8")
    # pass
