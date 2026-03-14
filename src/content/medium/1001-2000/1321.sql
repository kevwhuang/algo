-- 1321 - Restaurant Growth

WITH CTE AS (
    SELECT
        visited_on,
        SUM(amount) AS sum
    FROM
        Customer
    GROUP BY
        visited_on
)
SELECT
    A.visited_on,
    SUM(B.sum) AS amount,
    ROUND(AVG(B.sum), 2) AS average_amount
FROM
    CTE A,
    CTE B
WHERE
    DATEDIFF(A.visited_on, B.visited_on) BETWEEN 0
    AND 6
GROUP BY
    visited_on
HAVING
    COUNT(B.visited_on) = 7;
