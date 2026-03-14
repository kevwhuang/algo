-- 197 - Rising Temperature

SELECT
    W2.id
FROM
    Weather W1
    JOIN Weather W2 ON DATEDIFF(W1.recorddate, W2.recorddate) = -1
WHERE
    W1.temperature < W2.temperature;
