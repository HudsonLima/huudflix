import React, { useState, useEffect }  from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function AddCategory() {

  const initialValues = {
    name: '',
    description: '',
    color: '',
    };
  
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    })
  };

  function handleChange(parm) {
    
    // const { getAttribute, value } = parm.target;
    setValue(
      parm.target.getAttribute('name'),
      parm.target.value
    );
  };

  useEffect(() => {
    console.log('called useEffect');
    const URL = 'http://localhost:8080/categories';
    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategories(response);
      });
    }, []);

    return (    
        <PageDefault>
          <h1> Add new category: {values.name}</h1>
            
            <form onSubmit={function handleSubmit(info) {
                info.preventDefault();
                setCategories([
                  ...categories,
                  values
                ]);

                setValues(initialValues);
              }}>

                <FormField 
                  label="Category Name"
                  type="text"
                  name="name"                 
                  value={values.name}
                  onChange={handleChange}
                />

                <FormField 
                  label="Description"
                  type="textarea"
                  name="description"                  
                  value={values.description}
                  onChange={handleChange}
                />

                <FormField 
                  label="Color"
                  type="color"
                  name="color"                  
                  value={values.color}
                  onChange={handleChange}
                />              

              <Button>
                Add
              </Button>
            </form> 

            <ul>
                {categories.map((category, indice) => {
                  return (
                    <li key={`${category}${indice}`}>
                      {category.name}
                    </li>
                  )
                })}
            </ul>     

          <Link to="/">
            Back to home
          </Link>          
        </PageDefault>     
    )
}

export default AddCategory;
