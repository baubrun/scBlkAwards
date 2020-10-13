export const columns = [{
        id: "Date",
        label: "Date",
        minWidth: 100,
    },
    {
        id: "Lieu",
        label: "Lieu",
        minWidth: 100,
    },
    {
        id: "Ville",
        label: "Ville",
        minWidth: 100,
    },

];


const createData = (date, lieu, ville) => {
    return {
        date,
        lieu,
        ville
    };
}


export const rows = [
    createData ("1 Jan 2020", "club soda", "Montreal"),
    createData ("2 Mar 2020", "club qc", "Québec"),
]
