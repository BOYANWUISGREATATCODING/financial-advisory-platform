from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path("", views.index, name="index"),
    # ex: /polls/5/
    # path("<int:question_id>/", views.detail, name="detail"),
    # # ex: /polls/5/results/
    path("ele_tags/<str:ele_tag>/<int:nums>", views.get_news_by_ele_tags, name="get_news_by_ele_tags"),
    path("industry_tag/<str:industry_tag>/<int:nums>", views.get_news_by_industry_tags, name="get_news_by_industry_tag"),
    path("theme_tag/<str:theme_tag>/<int:nums>", views.get_news_by_theme, name="get_news_by_theme"),
    # http://127.0.0.1:8000/news/ele_tags/%E8%B4%A7%E5%B8%81/
    # # ex: /polls/5/vote/
    # path("<int:question_id>/vote/", views.vote, name="vote"),
]