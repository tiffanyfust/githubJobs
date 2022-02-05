import { useEffect } from "react";


const Filters = () => {
  return (
    <div>
      <form>
        <input type="checkbox" id="full-time"/>
        <label htmlFor="full-time">Full Time</label>
        <input type="checkbox" id="part-time"/>
        <label htmlFor="part-time">Part Time</label>

        <label>Location</label>
        <input type="search" placeholder="City, state, zip code or country"/>

        <fieldset id="Cities">
          <input type="radio" value="Vancouver" id="radio1" name="location"/>
          <label htmlFor="radio1">Vancouver</label>
          <input type="radio" value="Toronto" id="radio2" name="location"/>
          <label htmlFor="radio2">Toronto</label>
          <input type="radio" value="New York" id="radio3" name="location"/>
          <label htmlFor="radio3">New York</label>
          <input type="radio" value="Seattle" id="radio4" name="location"/>
          <label htmlFor="radio4">Seattle</label>
        </fieldset>
      </form>
    </div>
  )
}

const Results = (props) => {
  const resultContainer = document.querySelector('.results');

  useEffect(() => {
    const url = "https://data.usajobs.gov/api/search?";
    
    if (props.keyword !== 'Keyword=') {
      fetch(url + props.keyword, {
        method: "GET",
        headers: {
          "Host": "data.usajobs.gov",
          "User-Agent": "tiffanyfust@gmail.com",
          "Authorization-Key": "tKwjrbOUslQOQAag4kOP3VqdxsjtWa7U1DsNxDYjZfI="},
        })
        .then(response => response.json())
        .then(response => {
          // console.log(response.SearchResult.SearchResultItems)
          const results = response.SearchResult.SearchResultItems
          results.forEach(item => {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const details = item.MatchedObjectDescriptor;
            h2.innerHTML = details.PositionTitle;
            h3.innerHTML = details.OrganizationName;
            p.innerHTML = details.PositionSchedule[0].Name;

            li.appendChild(h3);
            li.appendChild(h2);
            li.appendChild(p);
            resultContainer.appendChild(li);
          })
        })
        .catch(err => {
        console.log(err);
        });
    } else {
      fetch(url, {
        method: "GET",
        headers: {
          "Host": "data.usajobs.gov",
          "User-Agent": "tiffanyfust@gmail.com",
          "Authorization-Key": "tKwjrbOUslQOQAag4kOP3VqdxsjtWa7U1DsNxDYjZfI="},
        })
        .then(response => response.json())
        .then(response => {
          console.log(response)
        })
        .catch(err => {
        console.log(err);
        });
    }
  }, [props]);

  return (
    <div>
      <section>
        <ul className="results">

        </ul>
      </section>
      <div>

      </div>
    </div>
  )
}

export {Results, Filters};
