-- 579 - Find Cumulative Salary of an Employee

SELECT
    E1.id,
    E1.month,
    E1.salary + IFNULL(E2.salary, 0) + IFNULL(E3.salary, 0) AS salary
FROM
    Employee E1
    LEFT JOIN Employee E2 ON E1.id = E2.id
    AND E1.month - 1 = E2.month
    LEFT JOIN Employee E3 ON E1.id = E3.id
    AND E1.month - 2 = E3.month
WHERE
    (E1.id, E1.month) NOT IN (
        SELECT
            id,
            MAX(month)
        FROM
            Employee
        GROUP BY
            id
    )
ORDER BY
    id,
    month DESC;
