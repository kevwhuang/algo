-- 2308 - Arrange Table by Gender

SELECT
    *
FROM
    Genders
ORDER BY
    RANK() OVER (
        PARTITION BY gender
        ORDER BY
            user_id
    ),
    LENGTH(gender) DESC;
