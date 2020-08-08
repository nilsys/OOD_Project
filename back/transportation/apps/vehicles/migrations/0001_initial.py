# Generated by Django 3.0.8 on 2020-08-07 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vehicle_type', models.CharField(choices=[('1', 'heavy car'), ('2', 'automobile')], default='1', max_length=1, verbose_name='Vehicle Type')),
                ('plate_no', models.CharField(max_length=8, null=True, unique=True)),
                ('vehicle_status', models.CharField(default='1', max_length=1, verbose_name='Vehicle Status')),
                ('duty_no', models.IntegerField(default=0, verbose_name='Number of Duty')),
                ('max_capacity', models.FloatField(default=0, verbose_name='Maximum Capacity')),
                ('max_tolerable_weight', models.FloatField(default=0, verbose_name='Max Tolerable Weight')),
            ],
        ),
    ]