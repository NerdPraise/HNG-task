# A program to compute the area of a circle with a given radius
import math

def calculator():
    radius = int(input("What is the radius of the circle "))
    area = (math.pi * (radius**2))
    area = round(area, 2)
    print(area)

calculator()