-- 1398 - Customers Who Bought Products A and B but Not C

SELECT
    *
FROM
    Customers
WHERE
    (customer_id, 'A') IN (
        SELECT
            customer_id,
            product_name
        FROM
            Orders
    )
    AND (customer_id, 'B') IN (
        SELECT
            customer_id,
            product_name
        FROM
            Orders
    )
    AND (customer_id, 'C') NOT IN (
        SELECT
            customer_id,
            product_name
        FROM
            Orders
    );
