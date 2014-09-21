from django.db import models

class Job(models.Model):
    #id = model.AutoField
    email = models.EmailField('email')
    phone = models.IntegerField('phone')
    search_query = models.CharField('query', max_length=2048)
    result_filter = models.CharField('filter', max_length=2048)
    last_updated = models.DateTimeField('last_updated')
    search_freq = models.IntegerField('freq')
    folder = models.CharField('folder', max_length=512)
