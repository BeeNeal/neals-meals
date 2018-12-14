from django.db import models

# Create your models here.
# Django automatically adds the primary key id to each table
class User(models.Model):
    """ """

    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)


class Recipe(models.Model):

    name = models.CharField(max_length=100)
    img_link = models.CharField(max_length=255)
    description = models.CharField(max_length=1000)
    private = models.BooleanField(default=False)
    ingredients = models.ManyToManyField(Ingredient)
    # probs shouldn't have this, and should calc based on tags of ingredients?
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE) 
    external_link = models.CharField(max_length=255)
    instructions = models.CharField(max_length=3000)


class Ingredient(models.Model):

    name = models.CharField(max_length=100)
    img_link = models.CharField(max_length=255)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)


class RecipeIngredients(models.Model):
    """ """

    recipe_id = 
    ingredient_id = 
    qty = 


class Tag(models.Model):
    """Examples, paleo, primal, vegan, vegetarian"""

    name = models.CharField(max_length=30)
