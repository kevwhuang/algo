-- 3401 - Find Circular Gift Exchange Chains

WITH RECURSIVE CTE1 AS (
    SELECT
        *,
        1 AS length
    FROM
        SecretSanta
    UNION
    SELECT
        C.giver_id,
        S.receiver_id,
        C.gift_value + S.gift_value,
        length + 1
    FROM
        CTE1 C
        JOIN SecretSanta S ON C.receiver_id = S.giver_id
        AND C.giver_id != C.receiver_id
),
CTE2 AS (
    SELECT
        DISTINCT length,
        gift_value
    FROM
        CTE1
    WHERE
        giver_id = receiver_id
)
SELECT
    RANK() OVER (
        ORDER BY
            length DESC,
            gift_value DESC
    ) AS chain_id,
    length AS chain_length,
    gift_value AS total_gift_value
FROM
    CTE2;
