-- 2990 - Loan Types

SELECT
    user_id
FROM
    Loans
WHERE
    loan_type = 'Refinance'
INTERSECT
SELECT
    user_id
FROM
    Loans
WHERE
    loan_type = 'Mortgage'
ORDER BY
    user_id;
