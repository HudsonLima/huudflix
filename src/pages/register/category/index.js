import React, { useState }  from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function AddCategory() {

  const initialValues = {
    name: '',
    description: '',
    color: '',
    }
  
  const [categories, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    })
  }
  function handleChange(parm) {
    
    // const { getAttribute, value } = parm.target;
    setValue(
      parm.target.getAttribute('name'),
      parm.target.value
    );
  }

    return (    
        <PageDefault>
          <h1> Add new category: {values.name}</h1>
            
            <form onSubmit={function handleSubmit(info) {
                info.preventDefault();
                setCategorias([
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
                  type="text"
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

              <button>
                Cadastrar
              </button>
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
