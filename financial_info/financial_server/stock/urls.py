from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path("", views.index, name="index"),
    path("<str:market_loc>/", views.stock_info,name="")
    # ex: /polls/5/
    # path("<int:question_id>/", views.detail, name="detail"),
    # # ex: /polls/5/results/
    # http://127.0.0.1:8000/news/ele_tags/%E8%B4%A7%E5%B8%81/
    # # ex: /polls/5/vote/
    # path("<int:question_id>/vote/", views.vote, name="vote"),
]