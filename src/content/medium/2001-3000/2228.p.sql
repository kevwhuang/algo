-- 2228 - Users With Two Purchases Within Seven Days

SELECT
    DISTINCT P1.user_id
FROM
    Purchases P1
    JOIN Purchases P2 ON P1.user_id = P2.user_id
    AND P1.purchase_id <> P2.purchase_id
    AND ABS(DATEDIFF(P1.purchase_date, P2.purchase_date)) <= 7
ORDER BY
    user_id;
