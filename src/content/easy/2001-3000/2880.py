# 2880 - Select Data

import pandas as pd

def selectData(students):
    return students.loc[students["student_id"] == 101, ["name", "age"]]
