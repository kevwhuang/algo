-- 3050 - Pizza Toppings Cost Analysis

SELECT
    CONCAT_WS(
        ',',
        T1.topping_name,
        T2.topping_name,
        T3.topping_name
    ) AS pizza,
    ROUND(T1.cost + T2.cost + T3.cost, 2) AS total_cost
FROM
    Toppings T1
    JOIN Toppings T2 ON T1.topping_name < T2.topping_name
    JOIN Toppings T3 ON T2.topping_name < T3.topping_name
ORDER BY
    total_cost DESC,
    pizza;
