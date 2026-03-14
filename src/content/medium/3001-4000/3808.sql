-- 3808 - Find Emotionally Consistent Users

WITH CTE AS (
    SELECT
        user_id,
        COUNT(*) AS count
    FROM
        Reactions
    GROUP BY
        user_id
    HAVING
        count >= 5
)
SELECT
    user_id,
    reaction AS dominant_reaction,
    ROUND(COUNT(*) / count, 2) AS reaction_ratio
FROM
    Reactions
    JOIN CTE USING(user_id)
GROUP BY
    user_id,
    reaction
HAVING
    reaction_ratio >= 0.6
ORDER BY
    reaction_ratio DESC,
    user_id;
