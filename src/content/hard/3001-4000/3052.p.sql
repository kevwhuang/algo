-- 3052 - Maximize Items

WITH CTE AS (
    SELECT
        item_type,
        COUNT(*) AS count,
        SUM(square_footage) AS footage
    FROM
        Inventory
    GROUP BY
        item_type
)
SELECT
    item_type,
    count * FLOOR(500000 / footage) AS item_count
FROM
    CTE
WHERE
    item_type = 'prime_eligible'
UNION
SELECT
    item_type,
    count * FLOOR(
        500000 % (
            SELECT
                footage
            FROM
                CTE
            WHERE
                item_type = 'prime_eligible'
        ) / footage
    )
FROM
    CTE
WHERE
    item_type = 'not_prime'
ORDER BY
    item_count DESC;
