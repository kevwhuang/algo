-- 3198 - Find Cities in Each State

SELECT
    state,
    GROUP_CONCAT(DISTINCT city SEPARATOR ', ') AS cities
FROM
    Cities
GROUP BY
    state
ORDER BY
    state;
