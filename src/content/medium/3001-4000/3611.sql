-- 3611 - Find Overbooked Employees

WITH CTE AS (
    SELECT
        employee_id
    FROM
        Meetings
    GROUP BY
        employee_id,
        YEAR(meeting_date),
        WEEKOFYEAR(meeting_date)
    HAVING
        SUM(duration_hours) > 20
)
SELECT
    *,
    COUNT(*) AS meeting_heavy_weeks
FROM
    Employees
    JOIN CTE USING(employee_id)
GROUP BY
    employee_id
HAVING
    meeting_heavy_weeks > 1
ORDER BY
    meeting_heavy_weeks DESC,
    employee_name;
