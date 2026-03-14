-- 602 - Friend Requests II: Who Has the Most Friends

WITH CTE AS (
    SELECT
        requester_id AS id
    FROM
        RequestAccepted
    UNION
    ALL
    SELECT
        accepter_id
    FROM
        RequestAccepted
)
SELECT
    id,
    COUNT(*) AS num
FROM
    CTE
GROUP BY
    id
ORDER BY
    num DESC
LIMIT
    1;
