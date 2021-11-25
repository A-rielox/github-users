import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
   const { repos } = React.useContext(GithubContext);

   const languges = repos.reduce((total, item) => {
      const { language, stargazers_count } = item;

      if (language) {
         if (!total[language]) {
            total[language] = {
               label: language,
               value: 1,
               stars: stargazers_count,
            };
         } else {
            total[language] = {
               ...total[language],
               value: total[language].value + 1,
               stars: total[language].stars + stargazers_count,
            };
         }
      }

      return total;
   }, {});

   // console.log(languges);
   // {JavaScript: {…}, CSS: {…}, HTML: {…}}
   //    CSS: {label: 'CSS', value: 38}
   //    HTML: {label: 'HTML', value: 14}
   //    JavaScript: {label: 'JavaScript', value: 45}

   // ordenando descendiente ( el mas grande primero ), mantiene solo los 5 primeros
   // mostUsed = Object.values(languges);
   // console.log(mostUsed);
   //(3) [{…}, {…}, {…}]
   //     0: {label: 'JavaScript', value: 45}
   //     1: {label: 'CSS', value: 38}
   //     2: {label: 'HTML', value: 14}
   const mostUsed = Object.values(languges)
      .sort((a, b) => {
         return b.value - a.value;
      })
      .slice(0, 5);

   // most stars per languages, en value se pone el valor q da de las stars, ya q es el valor q agarra el chart para graficar
   const mostPopular = Object.values(languges)
      .sort((a, b) => {
         return b.stars - a.stars;
      })
      .map(item => {
         return { ...item, value: item.stars };
      })
      .slice(0, 5);

   // stars & forks
   let { stars, forks } = repos.reduce(
      (total, items) => {
         const { stargazers_count, name, forks } = items;

         total.stars[stargazers_count] = {
            label: name,
            value: stargazers_count,
         };

         total.forks[forks] = {
            label: name,
            value: forks,
         };

         return total;
      },

      { stars: {}, forks: {} }
   );

   // crea un array con los valores (cada array) del object, ya estaban ordenados de menor a mayor
   stars = Object.values(stars).slice(-5).reverse();
   forks = Object.values(forks).slice(-5).reverse();

   return (
      <section className="section">
         <Wrapper className="section-center">
            {/* <ExampleChart data={chartData} />; */}
            <Pie3D data={mostUsed} />
            <Column3D data={stars} />
            <Doughnut2D data={mostPopular} />
            <Bar3D data={forks} />
         </Wrapper>
      </section>
   );
};

//
// styled-components
const Wrapper = styled.div`
   display: grid;
   justify-items: center;
   gap: 2rem;

   @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
   }

   @media (min-width: 1200px) {
      grid-template-columns: 2fr 3fr;
   }

   div {
      width: 100% !important;
   }
   .fusioncharts-container {
      width: 100% !important;
   }
   svg {
      width: 100% !important;
      border-radius: var(--radius) !important;
   }
`;

export default Repos;
