-- 3626 - Find Stores With Inventory Imbalance

WITH CTE1 AS (
    SELECT
        store_id,
        product_name AS most_exp_product,
        quantity AS count1
    FROM
        Inventory
    WHERE
        (store_id, price) IN (
            SELECT
                store_id,
                MAX(price)
            FROM
                Inventory
            GROUP BY
                store_id
        )
),
CTE2 AS (
    SELECT
        store_id,
        product_name AS cheapest_product,
        quantity AS count2
    FROM
        Inventory
    WHERE
        (store_id, price) IN (
            SELECT
                store_id,
                MIN(price)
            FROM
                Inventory
            GROUP BY
                store_id
        )
),
CTE3 AS (
    SELECT
        store_id
    FROM
        Inventory
    GROUP BY
        store_id
    HAVING
        COUNT(*) >= 3
)
SELECT
    store_id,
    store_name,
    location,
    most_exp_product,
    cheapest_product,
    ROUND(count2 / count1, 2) AS imbalance_ratio
FROM
    Stores
    JOIN CTE1 USING(store_id)
    JOIN CTE2 USING(store_id)
    JOIN CTE3 USING(store_id)
WHERE
    count1 < count2
ORDER BY
    imbalance_ratio DESC,
    store_name;
