-- 3436 - Find Valid Emails

SELECT
    *
FROM
    Users
WHERE
    email REGEXP '^[_0-9a-z]+@[a-z]+.com$';
