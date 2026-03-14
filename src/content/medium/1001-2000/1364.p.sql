-- 1364 - Number of Trusted Contacts of a Customer

WITH CTE1 AS (
    SELECT
        user_id,
        contact_name,
        email
    FROM
        Contacts
        LEFT JOIN Customers ON contact_email = email
),
CTE2 AS (
    SELECT
        customer_id,
        customer_name,
        COUNT(contact_name) AS contacts_cnt,
        COUNT(CTE1.email) AS trusted_contacts_cnt
    FROM
        Customers
        LEFT JOIN CTE1 ON customer_id = user_id
    GROUP BY
        customer_id
)
SELECT
    invoice_id,
    customer_name,
    price,
    contacts_cnt,
    trusted_contacts_cnt
FROM
    Invoices
    LEFT JOIN CTE2 ON user_id = customer_id
ORDER BY
    invoice_id;
