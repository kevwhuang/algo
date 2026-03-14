-- 2205 - The Number of Users That Are Eligible for Discount

CREATE FUNCTION getUserIDs(startDate DATE, endDate DATE, minAmount INT) RETURNS INT BEGIN RETURN (
    SELECT
        COUNT(DISTINCT user_id) AS user_cnt
    FROM
        Purchases
    WHERE
        (
            time_stamp BETWEEN TIMESTAMP(startDate)
            AND TIMESTAMP(endDate)
        )
        AND amount >= minAmount
);
END
