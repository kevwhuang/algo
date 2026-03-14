-- 1435 - Create a Session Bar Chart

SELECT
    '[0-5>' AS bin,
    COUNT(*) AS total
FROM
    Sessions
WHERE
    duration <= 299
UNION
SELECT
    '[5-10>',
    COUNT(*)
FROM
    Sessions
WHERE
    duration BETWEEN 300
    AND 599
UNION
SELECT
    '[10-15>',
    COUNT(*)
FROM
    Sessions
WHERE
    duration BETWEEN 600
    AND 899
UNION
SELECT
    '15 or more',
    COUNT(*)
FROM
    Sessions
WHERE
    duration >= 900;
