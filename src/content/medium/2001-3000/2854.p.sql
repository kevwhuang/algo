-- 2854 - Rolling Average Steps

SELECT
    user_id,
    S3.steps_date,
    ROUND(
        (S1.steps_count + S2.steps_count + S3.steps_count) / 3,
        2
    ) AS rolling_average
FROM
    Steps S1
    JOIN Steps S2 USING(user_id)
    JOIN Steps S3 USING(user_id)
WHERE
    DATEDIFF(S2.steps_date, S1.steps_date) = 1
    AND DATEDIFF(S3.steps_date, S2.steps_date) = 1
ORDER BY
    user_id,
    steps_date;
