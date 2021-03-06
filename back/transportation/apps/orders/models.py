from django.db import models
from apps.users.models import Customer
from apps.vehicles.models import Vehicle

class Order(models.Model):
    owner = models.ForeignKey(
        Customer, 
        related_name="orders", 
        on_delete=models.CASCADE,
        verbose_name="Owner",
    )

    vehicle = models.ForeignKey(
        Vehicle,
        related_name="orders",
        null = True,
        blank=True,
        on_delete=models.SET_NULL,
        verbose_name="Vehicle",
    )

    is_load = models.BooleanField(
        default=False,
        verbose_name="Is Load",
    )

    ORDER_CHOICES = [
        ('1', 'submited'),
        ('2', 'loading'),
        ('3', 'sending'),
        ('4', 'delivered'),
    ]

    order_status = models.CharField(
        max_length=1,
        default='1',
        choices=ORDER_CHOICES,
        verbose_name="Order Status",
    )

    destination_address = models.TextField(
        null=True,
        verbose_name="Destination Address",
    )

    transportation_cost = models.FloatField(
        null=True,
        default=0,
        verbose_name="Transportation Cost",
    )


