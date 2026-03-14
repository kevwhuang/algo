# 2888 - Reshape Data: Concatenate

import pandas as pd

def concatenateTables(df1, df2):
    return pd.concat([df1, df2], axis=0)
