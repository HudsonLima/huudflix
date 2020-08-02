import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function AddCategory() {
    return (    
        <PageDefault>
          <h1> Add new category</h1>
            <form>
              <label>
                Category name:
                  <input type="text"></input>
              </label>

              <button>
                Cadastrar
              </button>
            </form>          

          <Link to="/">
            Back to home
          </Link>          
        </PageDefault>     
    )
}

export default AddCategory;