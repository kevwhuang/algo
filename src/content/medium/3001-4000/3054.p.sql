-- 3054 - Binary Tree Nodes

SELECT
    n,
    CASE
        WHEN p IS NULL THEN 'Root'
        WHEN n IN (
            SELECT
                DISTINCT p
            FROM
                Tree
        ) THEN 'Inner'
        ELSE 'Leaf'
    END AS type
FROM
    Tree
ORDER BY
    n;
