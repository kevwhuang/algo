-- 3055 - Top Percentile Fraud

SELECT
    *
FROM
    Fraud
WHERE
    (state, fraud_score) IN (
        SELECT
            state,
            MAX(fraud_score)
        FROM
            Fraud
        GROUP BY
            state
    )
ORDER BY
    state,
    fraud_score DESC,
    policy_id;
