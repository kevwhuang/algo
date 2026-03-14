-- 3657 - Find Loyal Customers

SELECT
    customer_id
FROM
    Customer_Transactions
GROUP BY
    customer_id
HAVING
    SUM(IF(transaction_type = 'purchase', 1, 0)) >= 3
    AND DATEDIFF(MAX(transaction_date), MIN(transaction_date)) >= 30
    AND SUM(IF(transaction_type = 'refund', 1, 0)) / COUNT(*) < 0.2
ORDER BY
    customer_id;
