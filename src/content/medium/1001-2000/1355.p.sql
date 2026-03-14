-- 1355 - Activity Participants

SELECT
    activity
FROM
    Friends
GROUP BY
    activity
HAVING
    COUNT(*) != (
        SELECT
            MAX(COUNT(*)) OVER ()
        FROM
            Friends
        GROUP BY
            activity
        LIMIT
            1
    )
    AND COUNT(*) != (
        SELECT
            MIN(COUNT(*)) OVER ()
        FROM
            Friends
        GROUP BY
            activity
        LIMIT
            1
    );
