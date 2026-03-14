-- 1843 - Suspicious Bank Accounts

WITH CTE AS (
    SELECT
        account_id,
        MONTH(day) AS month,
        SUM(amount) AS income
    FROM
        Transactions
    WHERE
        type = 'Creditor'
    GROUP BY
        account_id,
        month
)
SELECT
    DISTINCT C1.account_id
FROM
    CTE C1
    JOIN CTE C2 ON C1.account_id = C2.account_id
    AND C1.month + 1 = C2.month
    JOIN Accounts A ON C1.account_id = A.account_id
WHERE
    C1.income > max_income
    AND C2.income > max_income;
