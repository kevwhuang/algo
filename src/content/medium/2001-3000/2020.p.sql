-- 2020 - Number of Accounts That Did Not Stream

SELECT
    COUNT(account_id) AS accounts_count
FROM
    Subscriptions
WHERE
    account_id NOT IN (
        SELECT
            account_id
        FROM
            Streams
        WHERE
            YEAR(stream_date) = 2021
    )
    AND 2021 BETWEEN YEAR(start_date)
    AND YEAR(end_date);
