fetch("https://fake-json-api.mock.beeceptor.com/users")
.then(response => response.json())
.then(data => {

    let table = document.getElementById("usersTable");

    data.forEach(user => {
        let row = `
        <tr>
            <td>
                <img 
                    src="${user.photo ? user.photo : 'https://via.placeholder.com/120'}" 
                    alt="${user.name}" 
                    width="120" 
                    height="120"
                    onerror="this.src='https://via.placeholder.com/120'"
                >
            </td>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.company}</td>
            <td>${user.address}</td>
            <td>${user.country}</td>
            <td>${user.zip}</td>
        </tr>
        `;

        table.insertAdjacentHTML("beforeend", row);
    });

    let personalRow = `
    <tr>
        <td>
            <img src="https://raw.githubusercontent.com/krishanicolecomeros/picture/main/krisha.png" alt="Krisha Nicole" width="120" height="120">
        </td>
        <td>11</td>
        <td>Krisha Nicole Comeros</td>
        <td>krishacomeros@gmail.com</td>
        <td>Christ the King College de Maranding, Inc.</td>
        <td>Purok 1, Pancilan, Sapad, Lanao del Norte</td>
        <td>Philippines</td>
        <td>9213</td>
    </tr>
    `;

    table.insertAdjacentHTML("beforeend", personalRow);

})
.catch(error => {
    console.log("Error fetching data:", error);
});