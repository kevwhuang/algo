-- 1613 - Find the Missing IDs

WITH RECURSIVE CTE AS (
    SELECT
        1 AS ids
    UNION
    SELECT
        ids + 1
    FROM
        CTE
    WHERE
        ids < (
            SELECT
                MAX(customer_id)
            FROM
                Customers
        )
)
SELECT
    ids
FROM
    CTE
WHERE
    ids NOT IN (
        SELECT
            customer_id
        FROM
            Customers
    );
