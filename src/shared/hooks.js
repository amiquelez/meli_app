import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUrl(){
        try{
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch(error){
            console.error('There was an error');
        }
    }

    useEffect(() => {
        fetchUrl();
    }, [url]);

    return [data, loading];
}

const useForm = (callback) => {

    const [values, setValues] = useState();
  
    const handleSubmit = e => {
        e.preventDefault();
        callback();
    };
  
    const handleChange = e => {
      setValues(e.target.value);
    };
  
    return {
      handleChange,
      handleSubmit,
      values,
    }
};

export { useFetch, useForm };