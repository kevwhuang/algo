-- 3328 - Find Cities in Each State II

SELECT
    state,
    GROUP_CONCAT(
        city
        ORDER BY
            city SEPARATOR ', '
    ) AS cities,
    SUM(LEFT(state, 1) = LEFT(city, 1)) AS matching_letter_count
FROM
    Cities
GROUP BY
    state
HAVING
    matching_letter_count
    AND COUNT(*) >= 3
ORDER BY
    matching_letter_count DESC,
    state;
