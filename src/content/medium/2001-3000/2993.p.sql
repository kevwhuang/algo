-- 2993 - Friday Purchases I

SELECT
    WEEK(purchase_date) - 43 AS week_of_month,
    purchase_date,
    SUM(amount_spend) AS total_amount
FROM
    Purchases
GROUP BY
    purchase_date
HAVING
    purchase_date LIKE '%03'
    OR purchase_date LIKE '%10'
    OR purchase_date LIKE '%17'
    OR purchase_date LIKE '%24'
ORDER BY
    week_of_month;
