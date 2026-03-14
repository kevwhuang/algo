-- 614 - Second Degree Follower

SELECT
    followee AS follower,
    COUNT(followee) AS num
FROM
    Follow
WHERE
    followee IN (
        SELECT
            follower
        FROM
            Follow
    )
GROUP BY
    followee
ORDER BY
    followee;
