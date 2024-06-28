from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=250, default='')

    def to_json(self):
        return{
            'id':self.id,
            'name':self.name
        }

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=250, default='')
    price = models.FloatField(max_length=250, default='')
    description = models.TextField()
    count = models.IntegerField(default=0)
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

    def to_json(self):
        return{
            'id':self.id,
            'name':self.name,
            'price':self.price,
            'description':self.description,
            'count':self.count,
            'is_active':self.is_active,
            'category':self.category.name
        }