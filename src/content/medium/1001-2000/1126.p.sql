-- 1126 - Active Businesses

WITH CTE AS (
    SELECT
        event_type,
        AVG(occurrences) AS average
    FROM
        Events
    GROUP BY
        event_type
)
SELECT
    business_id
FROM
    Events
    JOIN CTE USING(event_type)
WHERE
    occurrences > average
GROUP BY
    business_id
HAVING
    COUNT(*) > 1;
