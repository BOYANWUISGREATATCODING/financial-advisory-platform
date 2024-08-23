from django.http import HttpResponse
from . import models
from django.core import serializers
from django.http import JsonResponse
# from django.shortcuts import get_object_or_404, render


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def get_news_by_ele_tags(request, ele_tag, nums):
    selected_news = models.News.objects.filter(ele_tag = ele_tag).order_by('-date_time')
    if(len(selected_news)>nums):
        selected_news = selected_news[:nums]
    serialized_data = serializers.serialize('json', selected_news)
    # print(serialized_data)
    return JsonResponse(serialized_data, safe=False)

def get_news_by_industry_tags(request,industry_tag, nums):
    selected_news = models.News.objects.filter(industry_tag = industry_tag).order_by('-date_time')
    if(len(selected_news)>nums):
        selected_news = selected_news[:nums]
    serialized_data = serializers.serialize('json', selected_news)
    # print(serialized_data)
    return JsonResponse(serialized_data, safe=False)

def get_news_by_theme(request,theme_tag, nums):
    dic = {
    '现货市场': ['贵金属', '石油'],
    '金融市场': ['外汇', '期货', '数字货币', '债券', '货币', 'ETF'],
    '地区市场': ['A股', '港股', '美股'],
    '宏观': ['地缘局势', '人物', '经济数据', '政策', '央行', '灾害事故'],
    '微观': ['公司', '基金', '投行机构']
    }

    for i in range(len(dic[theme_tag])):
        print(i)
        if(i==0):
            selected = models.News.objects.filter(ele_tag = dic[theme_tag][i])
        else:
            selected = selected.union(models.News.objects.filter(ele_tag = dic[theme_tag][i]))
    selected_news = selected.order_by('-date_time')
    if(len(selected_news)>nums):
        selected_news = selected_news[:nums]
    serialized_data = serializers.serialize('json', selected_news)
    # print(serialized_data)
    return JsonResponse(serialized_data, safe=False)