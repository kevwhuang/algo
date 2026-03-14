-- 1179 - Reformat Department Table

SELECT
    id,
    SUM(IF(month = 'Jan', revenue, NULL)) AS jan_revenue,
    SUM(IF(month = 'Feb', revenue, NULL)) AS feb_revenue,
    SUM(IF(month = 'Mar', revenue, NULL)) AS mar_revenue,
    SUM(IF(month = 'Apr', revenue, NULL)) AS apr_revenue,
    SUM(IF(month = 'May', revenue, NULL)) AS may_revenue,
    SUM(IF(month = 'Jun', revenue, NULL)) AS jun_revenue,
    SUM(IF(month = 'Jul', revenue, NULL)) AS jul_revenue,
    SUM(IF(month = 'Aug', revenue, NULL)) AS aug_revenue,
    SUM(IF(month = 'Sep', revenue, NULL)) AS sep_revenue,
    SUM(IF(month = 'Oct', revenue, NULL)) AS oct_revenue,
    SUM(IF(month = 'Nov', revenue, NULL)) AS nov_revenue,
    SUM(IF(month = 'Dec', revenue, NULL)) AS dec_revenue
FROM
    Department
GROUP BY
    id;
