-- 1440 - Evaluate Boolean Expression

SELECT
    left_operand,
    operator,
    right_operand,
    CASE
        WHEN operator = '<'
        AND V1.value < V2.value THEN 'true'
        WHEN operator = '>'
        AND V1.value > V2.value THEN 'true'
        WHEN operator = '='
        AND V1.value = V2.value THEN 'true'
        ELSE 'false'
    END AS value
FROM
    Expressions
    JOIN Variables V1 ON left_operand = V1.name
    LEFT JOIN Variables V2 ON right_operand = V2.name;
