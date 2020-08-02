import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function AddMovie() {
    return (    
        <PageDefault>
          <h1> Add new movie </h1>

          <Link to="/register/category">
            Add new category
          </Link>          
        </PageDefault>     
    )
}

export default AddMovie;