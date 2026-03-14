# 2890 - Reshape Data: Melt

import pandas as pd

def meltTable(report):
    return report.melt(
        id_vars=["product"],
        value_vars=["quarter_1", "quarter_2", "quarter_3", "quarter_4"],
        var_name="quarter",
        value_name="sales",
    )
