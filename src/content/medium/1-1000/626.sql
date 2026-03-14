-- 626 - Exchange Seats

SELECT
    id,
    COALESCE(
        IF(
            MOD(id, 2) = 1,
            LEAD(student) OVER (),
            LAG(student) OVER ()
        ),
        student
    ) AS student
FROM
    Seat;
