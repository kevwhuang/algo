-- 2738 - Count Occurrences in Text

SELECT
    'bull' AS word,
    SUM(content LIKE '% bull %') AS count
FROM
    Files
UNION
SELECT
    'bear',
    SUM(content LIKE '% bear %')
FROM
    Files;
