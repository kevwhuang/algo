-- 3060 - User Activities Within Time Bounds

SELECT
    DISTINCT S1.user_id
FROM
    Sessions S1,
    Sessions S2
WHERE
    S1.user_id = S2.user_id
    AND S1.session_start < S2.session_start
    AND TIMESTAMPDIFF(HOUR, S1.session_end, S2.session_start) <= 12
    AND S1.session_type = S2.session_type
ORDER BY
    user_id;
