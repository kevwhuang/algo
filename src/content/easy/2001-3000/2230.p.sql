-- 2230 - The Users That Are Eligible for Discount

CREATE PROCEDURE getUserIDs(startDate DATE, endDate DATE, minAmount INT) BEGIN
SELECT
    DISTINCT user_id
FROM
    Purchases
WHERE
    time_stamp BETWEEN TIMESTAMP(startDate)
    AND TIMESTAMP(endDate)
    AND amount >= minAmount
ORDER BY
    user_id;
END
