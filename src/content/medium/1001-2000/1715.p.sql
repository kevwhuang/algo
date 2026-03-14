-- 1715 - Count Apples and Oranges

SELECT
    SUM(B.apple_count) + IFNULL(SUM(C.apple_count), 0) AS apple_count,
    SUM(B.orange_count) + IFNULL(SUM(C.orange_count), 0) AS orange_count
FROM
    Boxes B
    LEFT JOIN Chests C USING(chest_id);
