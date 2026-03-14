-- 2175 - The Change in Global Rankings

SELECT
    team_id,
    name,
    1.0 * DENSE_RANK() OVER (
        ORDER BY
            points DESC,
            name
    ) - DENSE_RANK() OVER (
        ORDER BY
            points + points_change DESC,
            name
    ) AS rank_diff
FROM
    TeamPoints
    JOIN PointsChange USING(team_id);
