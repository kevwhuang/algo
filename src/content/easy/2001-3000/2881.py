# 2881 - Create a New Column

import pandas as pd

def createBonusColumn(employees):
    employees["bonus"] = employees["salary"] * 2
    return employees
