-- 3172 - Second Day Verification

SELECT
    user_id
FROM
    Emails
    JOIN Texts USING(email_id)
WHERE
    signup_action = 'Verified'
    AND DATEDIFF(action_date, signup_date) = 1
ORDER BY
    user_id;
