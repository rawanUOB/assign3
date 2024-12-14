const URL = 'https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100'; 

async function fetchUOBDetails (){
    try {
        const result = await fetch(URL)
        if(!result.ok || result.status !== 200){
            console.error('an error occured!'); 
        }

        const the_data = await result.json();
        console.log(the_data); 

        

        UOBresults(the_data.results);

    }
    catch (error) {
        console.error("an error occured when trying to fetch data", error); 
    }
}


function UOBresults(results){
    const table = document.getElementById('the_body');
    table.innerHTML='';
    results.forEach(res => {
        console.log(res) 

        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${res.year}</td> 
            <td>${res.semester}</td> 
            <td>${res.the_programs}</td> 
            <td>${res.nationality}</td> 
            <td>${res.colleges}</td> 
            <td>${res.number_of_students}</td> 
        ` 
        table.appendChild(row)
        
    });
}

document.addEventListener('DOMContentLoaded',fetchUOBDetails); 