-- 183 - Customers Who Never Order

SELECT
    name AS customers
FROM
    Customers
WHERE
    id NOT IN (
        SELECT
            customerid
        FROM
            Orders
    );
