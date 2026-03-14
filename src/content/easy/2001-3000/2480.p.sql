-- 2480 - Form a Chemical Bond

SELECT
    E1.symbol AS metal,
    E2.symbol AS nonmetal
FROM
    Elements E1
    JOIN Elements E2 ON E1.type = 'Metal'
    AND E2.type = 'Nonmetal';
