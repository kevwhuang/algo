-- 1767 - Find the Subtasks That Did Not Execute

WITH RECURSIVE CTE AS (
    SELECT
        1 AS subtask_id
    UNION
    SELECT
        subtask_id + 1
    FROM
        CTE
    WHERE
        subtask_id < 20
)
SELECT
    task_id,
    subtask_id
FROM
    Tasks,
    CTE
WHERE
    subtask_id <= subtasks_count
EXCEPT
SELECT
    *
FROM
    Executed;
