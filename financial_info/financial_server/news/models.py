from django.db import models

# Create your models here.

class News(models.Model):
    date_time = models.DateTimeField('date_published')
    content = models.CharField(max_length=1000)
    title = models.CharField(max_length=200)
    src = models.CharField(max_length=10)
    industry_tag = models.CharField(max_length=10)
    ele_tag = models.CharField(max_length=10)

    def __str__(self):
        return self.content
    
    class Meta():
        db_table = 'News'