import React, { useEffect, useState } from 'react';
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoryRepository  from '../../repositories/categories';


function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos()
      .then((serverResponse) => {
        console.log(serverResponse[0].videos[0]);
        setInitialData(serverResponse);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}
      
      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
            <BannerMain
              videoTitle={initialData[0].videos[0].title}        
              videoDescription={"See how Ernst Gotsch reforested an area of 480 hectares, bringing rain back to the region that was once known as 'Dry Land'"}
              url={initialData[0].videos[0].url}
            />

            <Carousel 
              ignoreFirstVideo
              category={initialData[0]}
            />  
            </div>
          );} 
        
            return (
              <Carousel 
                key={category.id}
                category={category}
              /> 
            ); 
      })}

    </PageDefault>
  );
}

export default Home;
