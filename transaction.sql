CREATE OR REPLACE FUNCTION get_transaction_page(page_number INTEGER, results_per_page INTEGER)
RETURNS json AS $$
BEGIN
    RETURN (
        SELECT json_build_object(
            'totalResults', (SELECT COUNT(*) FROM "Transaction"),
            'data', (
                SELECT json_agg(row_to_json(t))
                FROM (
                    SELECT *
                    FROM "Transaction"
                    ORDER BY id
                    LIMIT results_per_page
                    OFFSET (page_number - 1) * results_per_page
                ) t
            )
        )
    );
END;
$$ LANGUAGE plpgsql;
