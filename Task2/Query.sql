WITH 
RecursiveQuery AS
(
	SELECT *, 0 as sub_level
	FROM dbo.subdivisions WHERE id = (SELECT subdivision_id FROM dbo.collaborators WHERE id = 710253)

	UNION ALL

	SELECT s.*, sub_level + 1
	FROM dbo.subdivisions s JOIN RecursiveQuery r
	ON r.id = s.parent_id
),
CollsCount AS
(
	SELECT r.id, COUNT(c.id) as colls_count
	FROM dbo.collaborators c JOIN RecursiveQuery r ON r.id = c.subdivision_id
	GROUP BY r.id
)

SELECT c.id, c.name, r.name as sub_name, r.id as sub_id, r.sub_level, s.colls_count
FROM dbo.collaborators c JOIN RecursiveQuery r ON c.subdivision_id = r.id
JOIN CollsCount s ON s.id = c.subdivision_id
WHERE c.age < 40 AND LEN(c.name) > 11 AND c.subdivision_id NOT IN (100055, 100059)
ORDER BY s.colls_count