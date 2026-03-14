-- 2994 - Friday Purchases II

WITH CTE AS (
    SELECT
        1 AS week_of_month,
        '2023-11-03' AS purchase_date
    UNION
    SELECT
        2,
        '2023-11-10'
    UNION
    SELECT
        3,
        '2023-11-17'
    UNION
    SELECT
        4,
        '2023-11-24'
)
SELECT
    week_of_month,
    purchase_date,
    IFNULL(SUM(amount_spend), 0) AS total_amount
FROM
    CTE
    LEFT JOIN Purchases USING(purchase_date)
GROUP BY
    week_of_month;
