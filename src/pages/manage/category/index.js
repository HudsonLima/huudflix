import React, { useState, useEffect }  from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

function FormCategory() {

  const initialValues = {
    title: '',
    description: '',
    color: '',
    };
    
  const { handleChange, values, clearForm } = useForm(initialValues);
  
  const [categories, setCategories] = useState([]);
   
    useEffect(() => {
      const URL_TOP = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categories'
        : 'https://huudflix.herokuapp.com/categories';
      fetch(URL_TOP)
        .then(async (serverResponse) => {
          const response = await serverResponse.json();
          setCategories([
            ...response,
          ]);
        });
    }, []);

    return (    
        <PageDefault>
          <h1> Add new category: {values.title}</h1>
            
            <form onSubmit={function handleSubmit(info) {
                info.preventDefault();

                categoriesRepository.create({
                  title: values.title,
                  url: values.url,
                  color: values.color,
                })
                  .then(() => {
                    console.log('record successfully registered!');
                  });

                setCategories([
                  ...categories,
                  values
                ]);

                clearForm();
              }}>

                <FormField 
                  label="Category Name"
                  type="text"
                  name="title"                 
                  value={values.title}
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
                Create new Category
              </Button>

              {categories.length === 0 && (
                <div>
                  {/* Cargando... */}
                  Loading...
                </div>
              )}

            </form> 

            <ul>
                {categories.map((category) => {
                  return (
                    <li key={`${category.title}`}>
                      {category.title}
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

export default FormCategory;
