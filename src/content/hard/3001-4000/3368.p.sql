-- 3368 - First Letter Capitalization

WITH RECURSIVE CTE1 AS (
    SELECT
        content_id,
        REGEXP_SUBSTR(content_text, '[A-Za-z]+') AS word,
        REGEXP_REPLACE(content_text, '[A-Za-z]+', '', 1, 1) AS content_text
    FROM
        User_content
    UNION
    ALL
    SELECT
        content_id,
        REGEXP_SUBSTR(content_text, '[A-Za-z]+'),
        REGEXP_REPLACE(content_text, '[A-Za-z]+', '', 1, 1)
    FROM
        CTE1
    WHERE
        word IS NOT NULL
),
CTE2 AS (
    SELECT
        content_id,
        CONCAT(
            UPPER(SUBSTRING(word, 1, 1)),
            LOWER(SUBSTRING(word, 2))
        ) AS word,
        ROW_NUMBER() OVER () AS r
    FROM
        CTE1
    WHERE
        word IS NOT NULL
)
SELECT
    content_id,
    content_text AS original_text,
    GROUP_CONCAT(
        word
        ORDER BY
            r SEPARATOR ' '
    ) AS converted_text
FROM
    User_content
    JOIN CTE2 USING(content_id)
GROUP BY
    content_id;
