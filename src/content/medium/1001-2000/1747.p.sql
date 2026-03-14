-- 1747 - Leetflex Banned Accounts

SELECT
    DISTINCT L1.account_id
FROM
    LogInfo L1
    JOIN LogInfo L2 USING(account_id)
WHERE
    L1.ip_address <> L2.ip_address
    AND L1.login BETWEEN L2.login
    AND L2.logout;
