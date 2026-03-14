# 2886 - Change Data Type

import pandas as pd

def changeDatatype(students):
    return students.astype({"grade": int})
