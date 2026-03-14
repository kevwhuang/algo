-- 1294 - Weather Type in Each Country

SELECT
    country_name,
    CASE
        WHEN AVG(weather_state) >= 25 THEN 'Hot'
        WHEN AVG(weather_state) <= 15 THEN 'Cold'
        ELSE 'Warm'
    END AS weather_type
FROM
    Countries C
    JOIN Weather W ON C.country_id = W.country_id
    AND day LIKE '2019-11%'
GROUP BY
    country_name;
