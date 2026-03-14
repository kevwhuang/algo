-- 2066 - Account Balance

SELECT
    T1.account_id,
    T1.day,
    SUM(IF(T2.type = 'Deposit', T2.amount, -T2.amount)) AS balance
FROM
    Transactions T1,
    Transactions T2
WHERE
    T1.account_id = T2.account_id
    AND T1.day >= T2.day
GROUP BY
    account_id,
    day
ORDER BY
    account_id,
    day;
