-- 3204 - Bitwise User Permissions Analysis

SELECT
    BIT_AND(permissions) AS common_perms,
    BIT_OR(permissions) AS any_perms
FROM
    User_permissions;
