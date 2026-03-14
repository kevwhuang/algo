-- 3793 - Find Users With High Token Usage

SELECT
    user_id,
    COUNT(*) AS prompt_count,
    ROUND(SUM(tokens) / COUNT(*), 2) AS avg_tokens
FROM
    Prompts
GROUP BY
    user_id
HAVING
    prompt_count >= 3
    AND MAX(tokens) > avg_tokens
ORDER BY
    avg_tokens DESC,
    user_id;
