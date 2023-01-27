import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = () => {
	const [animals, setAnimals] = useState([]);
   

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                axios.get('http://127.0.0.1:3030/animals').then((res) => {
                    setAnimals(res.data);
                });
            } catch (error) {
                // Intentionally left blank
            }
        };

		fetchAnimals();
	}, []);

	return { animals };
};

export default useData;
