-- 2669 - Count Artist Occurrences on Spotify Ranking List

SELECT
    artist,
    COUNT(*) AS occurrences
FROM
    Spotify
GROUP BY
    artist
ORDER BY
    occurrences DESC,
    artist;
