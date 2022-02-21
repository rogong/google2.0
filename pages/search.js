import  Head  from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'
import Response from '../Response';
import Header from './components/Header'
import SearchResults from './components/SearchResults';

function Search({results}) {
    const router = useRouter();

    return (
        <div>
            <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 

            {/* Header */}
            <Header />

            {/* Search Results */}
            <SearchResults results={results} />

        </div>
    )
}

export default Search

 export async function getServerSideProps(context) {

    const useDummyData = true;
    const startIndex = context.query.start || "0";

    const data = useDummyData
     ? Response 
     : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`)
    .then((response) => response.json());

    //After the SERVER has rendered... Pass the results to the client
    return {
        props: {
            results: data,
        },
    };
}
