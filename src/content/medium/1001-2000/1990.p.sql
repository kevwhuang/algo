-- 1990 - Count the Number of Experiments

WITH Base AS (
    SELECT
        'Android' AS platform,
        'Reading' AS experiment_name
    UNION
    SELECT
        'Android',
        'Sports'
    UNION
    SELECT
        'Android',
        'Programming'
    UNION
    SELECT
        'IOS',
        'Reading'
    UNION
    SELECT
        'IOS',
        'Sports'
    UNION
    SELECT
        'IOS',
        'Programming'
    UNION
    SELECT
        'Web',
        'Reading'
    UNION
    SELECT
        'Web',
        'Sports'
    UNION
    SELECT
        'Web',
        'Programming'
),
CTE AS (
    SELECT
        platform,
        experiment_name,
        COUNT(*) AS count
    FROM
        Experiments
    GROUP BY
        platform,
        experiment_name
)
SELECT
    platform,
    experiment_name,
    IFNULL(count, 0) AS num_experiments
FROM
    Base
    LEFT JOIN CTE USING(platform, experiment_name);
