-- 1587 - Bank Account Summary II

SELECT
    name,
    SUM(amount) AS balance
FROM
    Users
    JOIN Transactions USING(account)
GROUP BY
    name
HAVING
    balance > 10000;
