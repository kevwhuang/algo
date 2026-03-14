-- 2298 - Tasks Count in the Weekend

SELECT
    SUM(WEEKDAY(submit_date) >= 5) AS weekend_cnt,
    SUM(WEEKDAY(submit_date) <= 4) AS working_cnt
FROM
    Tasks;
