import Fuse from 'fuse.js';

import { useCallback, useMemo, useState } from 'react';
import { debounce } from 'lodash';

const useFuse = (list, options) => {
	const [query, updateQuery] = useState('');
	const { limit, matchAllOnEmptyQuery, ...fuseOptions } = options;
	const fuse = useMemo(() => new Fuse(list, fuseOptions), [list, fuseOptions]);

	const hits = useMemo(
		() => (!query && matchAllOnEmptyQuery ? list : fuse.search(query, { limit })),
		[fuse, limit, matchAllOnEmptyQuery, query, list]
	);

    // eslint-disable-next-line react-hooks/exhaustive-deps
	const onSearch = useCallback(
		debounce(search => {
			try {
				updateQuery(search);
			} catch {
				// Intentionally empty
			}
		}, 50),
		[updateQuery]
	);

	return { hits, onSearch, query };
};

export default useFuse;
