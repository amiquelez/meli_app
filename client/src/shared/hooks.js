import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchUrl(){
            try{
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch(error){
                setLoading(false);
                console.error('There was an error');
            }
        }

        fetchUrl();
        
    }, [url]);

    return [data, loading];
}

const useForm = (callback) => {

    const [values, setValues] = useState();
  
    const handleSubmit = e => {
        e.preventDefault();
        if(!values) return;
        callback();
    };
  
    const handleChange = e => {
      setValues(e.target.value.trim());
    };
  
    return {
      handleChange,
      handleSubmit,
      values,
    }
};

export { useFetch, useForm };