-- 1495 - Friendly Movies Streamed Last Month

SELECT
    DISTINCT title
FROM
    TVProgram T
    JOIN Content C ON T.content_id = C.content_id
    AND program_date LIKE '2020-06%'
    AND kids_content = 'Y'
    AND content_type = 'Movies';
