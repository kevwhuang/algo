-- 3087 - Find Trending Hashtags

SELECT
    REGEXP_SUBSTR(tweet, '#[A-Za-z0-9]+') AS hashtag,
    COUNT(*) AS hashtag_count
FROM
    Tweets
WHERE
    tweet_date LIKE '2024-02%'
GROUP BY
    hashtag
ORDER BY
    hashtag_count DESC,
    hashtag DESC
LIMIT
    3;
