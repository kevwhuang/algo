-- 607 - Sales Person

SELECT
    S.name
FROM
    Orders O
    JOIN Company C ON O.com_id = C.com_id
    AND name = 'RED'
    RIGHT JOIN SalesPerson S USING(sales_id)
WHERE
    amount IS NULL;
