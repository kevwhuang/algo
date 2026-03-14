# 2889 - Reshape Data: Pivot

import pandas as pd

def pivotTable(weather):
    return weather.pivot(index="month", columns="city", values="temperature")
