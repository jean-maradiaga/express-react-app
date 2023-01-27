import { useCallback } from 'react';

import DataTable from "../../components/datatable/datatable";
import TextField from "../../components/search/text-field";
import useData from "../../hooks/use-data";
import useFuse from "../../hooks/use-fuse";

const AnimalTable = () => {
    const tableName = "Animals";
    const firstColumnName = "Name/Age"
    const secondColumnName = "Species";

    const { animals } = useData();
    const { hits, onSearch } = useFuse(animals, {
		keys: ['name'],
		threshold: 0.2,
		matchAllOnEmptyQuery: true,
	});

    const handleBrowse = useCallback(
		event => {
			const value = event.target.value.toLowerCase();
			onSearch(value);
		},
		[onSearch]
	);

    return (
        <>
            <TextField 
                placeholder="Search for names.." 
                name="search" 
                ariaLabel="Search"
                handleInput={handleBrowse}
            />
            <DataTable
                name={tableName}
                firstColumn={firstColumnName}
                secondColumn={secondColumnName}
                data={hits}
            />
        </>
        
    );

}

export default AnimalTable;