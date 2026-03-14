-- 3103 - Find Trending Hashtags II

WITH RECURSIVE CTE AS (
    SELECT
        REGEXP_SUBSTR(tweet, '#[A-Za-z]+') AS hashtag,
        REGEXP_REPLACE(tweet, '#[A-Za-z]+', '', 1, 1) AS tweet
    FROM
        Tweets
    UNION
    ALL
    SELECT
        REGEXP_SUBSTR(tweet, '#[A-Za-z]+'),
        REGEXP_REPLACE(tweet, '#[A-Za-z]+', '', 1, 1)
    FROM
        CTE
    WHERE
        hashtag IS NOT NULL
)
SELECT
    hashtag,
    COUNT(*) AS count
FROM
    CTE
WHERE
    hashtag IS NOT NULL
GROUP BY
    hashtag
ORDER BY
    count DESC,
    hashtag DESC
LIMIT
    3;
