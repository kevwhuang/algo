-- 2199 - Finding the Topic of Each Post

SELECT
    post_id,
    IFNULL(
        GROUP_CONCAT(
            DISTINCT topic_id
            ORDER BY
                topic_id
        ),
        'Ambiguous!'
    ) AS topic
FROM
    Posts
    LEFT JOIN Keywords ON LOCATE(
        CONCAT(' ', word, ' '),
        CONCAT(' ', content, ' ')
    ) > 0
GROUP BY
    post_id;
