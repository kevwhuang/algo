-- 175 - Combine Two Tables

SELECT
    firstname,
    lastname,
    city,
    state
FROM
    Person
    LEFT JOIN Address USING(personid);
