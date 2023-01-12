fetch("https://api.openbrewerydb.org/breweries")
          .then((response) => response.json())
          .then((data) => {
            console.log(data[0])

          data.forEach(element => {
            const open={
                ...element,
                name:element.name,
                brewery_type:element.brewery_type,
                city:element.city,
                state:element.state,
                country:element.country

            }
            openbrewerydb(open)
          });
        })
          .catch(error=>console.log(error))

          function openbrewerydb({name,brewery_type,city,state,country}){
          document.body.innerHTML +=`
          <div class="container">
          <h1 class="name">${name}</h1>
          <pclass="chart">${brewery_type}</p>
          <span>${city}</span><br>
          <span>${state}</span><br>
          <span>${country}</span>
          </div>
          
          `
          } 


               
        
        