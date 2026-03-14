-- 1270 - All People Report to the Given Manager

SELECT
    E1.employee_id
FROM
    Employees E1,
    Employees E2,
    Employees E3
WHERE
    E1.manager_id = E2.employee_id
    AND E2.manager_id = E3.employee_id
    AND E3.manager_id = 1
    AND E1.employee_id != 1;
