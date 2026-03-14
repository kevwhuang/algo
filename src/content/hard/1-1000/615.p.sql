-- 615 - Average Salary: Departments vs Company

WITH CTE AS (
    SELECT
        SUBSTRING(pay_date, 1, 7) AS pay_month,
        AVG(amount) AS average
    FROM
        Salary
    GROUP BY
        pay_month
)
SELECT
    SUBSTRING(pay_date, 1, 7) AS pay_month,
    department_id,
    CASE
        WHEN ROUND(AVG(amount), 4) < average THEN 'lower'
        WHEN ROUND(AVG(amount), 4) > average THEN 'higher'
        ELSE 'same'
    END AS comparison
FROM
    Salary
    JOIN Employee USING(employee_id)
    JOIN CTE ON SUBSTRING(pay_date, 1, 7) = pay_month
GROUP BY
    pay_month,
    department_id;
