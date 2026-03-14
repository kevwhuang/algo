-- 577 - Employee Bonus

SELECT
    E.name,
    B.bonus
FROM
    Employee E
    LEFT JOIN Bonus B ON E.empid = B.empid
WHERE
    bonus < 1000
    OR bonus IS NULL;
