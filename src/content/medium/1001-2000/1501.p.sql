-- 1501 - Countries You Can Safely Invest In

SELECT
    C.name AS country
FROM
    Person
    JOIN Country C ON SUBSTRING(phone_number, 1, 3) = country_code
    JOIN Calls ON id IN (caller_id, callee_id)
GROUP BY
    country_code
HAVING
    AVG(
        IF(
            id = caller_id
            OR id = callee_id,
            duration,
            0
        )
    ) > (
        SELECT
            AVG(duration)
        FROM
            Calls
    );
