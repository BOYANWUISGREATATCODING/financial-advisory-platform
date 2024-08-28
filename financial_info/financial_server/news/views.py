from django.http import HttpResponse
from . import models,summarization
from django.core import serializers
from django.http import JsonResponse
import json
import random
from PIL import Image
import io
import os
# from django.shortcuts import get_object_or_404, rende

pic_list = [
    r'news\src\p1.jpg',
    r'news\src\p2.jpg',
    r'news\src\p3.jpg',
    r'news\src\p4.jpg',
    r'news\src\p5.jpg',
    r'news\src\p6.jpg',
    r'news\src\p7.jpg',
]

def get_pics(request,link_num, height, width):
    file_path = pic_list[link_num]
    # file_path = os.path.abspath(file_path)
    # print(file_path)
    image_file = Image.open(file_path)
    image_file = image_file.resize((width,height))
    # image_file.show()
    image_io = io.BytesIO()
    image_file.save(image_io, format='JPEG')
    image_io.seek(0)
    return HttpResponse(image_io, content_type='image/jpeg')

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

# def get_png(request, ele_tag):

def so(a):
    return a.date_time

def get_news_by_ele_tags(request, ele_tag, nums):
    selected_news = models.News.objects.raw(f'select distinct * from News where ele_tag="{ele_tag}" order by rand()')
    # selected_news = selected_news.order_by('-date_time')
    if(len(selected_news)>nums):
        selected_news = selected_news[:nums]
    selected_news = sorted(selected_news,key = so,reverse=True)
    serialized_data = serializers.serialize('json', selected_news)
    dic = json.loads(serialized_data)
    
    image_path = [f'http://127.0.0.1:8000/news/pics/{i}' for i in random.sample(range(7),4)]
    # print(serialized_data)
    image_size = [(600,100),(195,100),(800,400),(300,150)]
    for i in range(len(image_path)):
        dic[i]['image_paths'] = []
        for size in image_size:
            dic[i]['image_paths'].append(image_path[i]+f'/{size[0]}/{size[1]}')
    for i in range(len(dic)):
        # keywords = summarization.get_summarization(dic[i]['fields']['content'])
        dic[i]['fields']['content'] = dic[i]['fields']['keywords'] + '\n' + dic[i]['fields']['content']
        del dic[i]['fields']['keywords']
        # print(keywords)
    return HttpResponse(json.dumps(dic),content_type="application/json",charset="utf-8")

def get_news_by_industry_tags(request,industry_tag, nums):
    selected_news = models.News.objects.raw(f'select distinct * from News where industry_tag="{industry_tag}" order by rand()')
    if(len(selected_news)>nums):
        selected_news = selected_news[:nums]
    selected_news = sorted(selected_news,key = so,reverse=True)
    serialized_data = serializers.serialize('json', selected_news)
    dic = json.loads(serialized_data)
    
    image_path = [f'http://127.0.0.1:8000/news/pics/{i}' for i in random.sample(range(7),4)]
    # print(serialized_data)
    image_size = [(600,100),(195,100),(800,400),(300,150)]
    for i in range(len(image_path)):
        dic[i]['image_paths'] = []
        for size in image_size:
            dic[i]['image_paths'].append(image_path[i]+f'/{size[0]}/{size[1]}')
    for i in range(len(dic)):
        # keywords = summarization.get_summarization(dic[i]['fields']['content'])
        dic[i]['fields']['content'] = dic[i]['fields']['keywords'] + '\n' + dic[i]['fields']['content']
        del dic[i]['fields']['keywords']
    return HttpResponse(json.dumps(dic),content_type="application/json",charset="utf-8")

def get_news_by_theme(request,theme_tag, nums):
    dic = {
    '现货市场': ['贵金属', '石油'],
    '金融市场': ['外汇', '期货', '数字货币', '债券', '货币', 'ETF'],
    '地区市场': ['A股', '港股', '美股'],
    '宏观': ['地缘局势', '人物', '经济数据', '政策', '央行', '灾害事故'],
    '微观': ['公司', '基金', '投行机构']
    }
    
    key_str = ' or '.join([f'ele_tag="{dic[theme_tag][i]}"' for i in range(len(dic[theme_tag]))])
    selected_news = models.News.objects.raw(f'select distinct * from News where {key_str}  order by rand()')
    if(len(selected_news)>nums):
        selected_news = selected_news[:nums]
    selected_news = sorted(selected_news,key = so,reverse=True)
    serialized_data = serializers.serialize('json', selected_news)
    dic = json.loads(serialized_data)
    
    image_path = [f'http://127.0.0.1:8000/news/pics/{i}' for i in random.sample(range(7),4)]
    # print(serialized_data)
    image_size = [(600,100),(195,100),(800,400),(300,150)]
    for i in range(len(image_path)):
        dic[i]['image_paths'] = []
        for size in image_size:
            dic[i]['image_paths'].append(image_path[i]+f'/{size[0]}/{size[1]}')
    for i in range(len(dic)):
        # keywords = summarization.get_summarization(dic[i]['fields']['content'])
        dic[i]['fields']['content'] = dic[i]['fields']['keywords'] + '\n' + dic[i]['fields']['content']
        del dic[i]['fields']['keywords']
    return HttpResponse(json.dumps(dic),content_type="application/json",charset="utf-8")