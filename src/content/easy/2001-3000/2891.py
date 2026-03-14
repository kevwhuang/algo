# 2891 - Method Chaining

import pandas as pd

def findHeavyAnimals(animals):
    animals = animals[animals["weight"] > 100]
    return animals.sort_values(by="weight", ascending=False)[["name"]]
