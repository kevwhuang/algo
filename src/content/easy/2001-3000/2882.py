# 2882 - Drop Duplicate Rows

import pandas as pd

def dropDuplicateEmails(customers):
    customers.drop_duplicates(subset="email", keep="first", inplace=True)
    return customers
