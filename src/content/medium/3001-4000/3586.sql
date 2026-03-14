-- 3586 - Find COVID Recovery Patients

SELECT
    C1.patient_id,
    patient_name,
    age,
    DATEDIFF(MIN(C1.test_date), MIN(C2.test_date)) AS recovery_time
FROM
    Covid_Tests C1
    JOIN Covid_Tests C2 ON C1.patient_id = C2.patient_id
    AND C1.test_date > C2.test_date
    AND C1.result = 'Negative'
    AND C2.result = 'Positive'
    JOIN Patients P ON P.patient_id = C1.patient_id
GROUP BY
    patient_id
ORDER BY
    recovery_time,
    patient_name;
