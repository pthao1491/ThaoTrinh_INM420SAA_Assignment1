async function getData(json) {
    try {
        const response = await fetch(json);

        const data = await response.json();

        //app version
        console.log(data.appversions);

        const version = document.querySelector('#app-version');

        data.appversions.forEach(appvers => {
            const listItem = document.createElement ('div');
            listItem.innerHTML = `<a class="${appvers.class}" href="${appvers.url}">${appvers.version}</a>`;
            version.appendChild(listItem);
        });
        
        //app description
        console.log(data.appnotes);

        const note = document.querySelector('#app-notes');

        data.appnotes.forEach(notes => {
            const notedetail = document.createElement ('li');
            notedetail.innerHTML = `${notes.text}`;
            note.appendChild(notedetail);
        });

        //request card
        console.log(data.requests);

        const requestitem = document.querySelector('#request-list');

        data.requests.forEach(request => {
            const rqust = document.createElement ('div');
            rqust.innerHTML = `<input class="${request.class}" type="${request.type}" name="fav_language">
            <label for="html">${request.request}</label>`;
            requestitem.appendChild(rqust);
        });

    } catch(error){
        console.error(error);
    }

}
getData( '/assets/data/data.json');