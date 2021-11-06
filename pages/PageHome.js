const Page = require('../components/Page.js');

// const array = [
//     {
//         id: 1,
//         text: 'Walk the dog',
//         status: 'pending',
//         date: "2021-11-05"
//     },
//     {
//         id: 2,
//         text: 'Watching TV',
//         status: 'new',
//         date: "2021-11-06"
//     },
//     {
//         id: 2,
//         text: 'Working on TODO list',
//         status: 'pending',
//         date: "2021-11-06"
//     }
// ];

class PageHome extends Page {
    constructor(connection) {
        super();
        this.route = "";
        this.pageName = "List";
        this.pageTemplateName = "home";
        this.connection = connection;
    }

    getData = async () => {
        try {
            const query = "SELECT * FROM `tasks`";
            const result = await this.connection.execute(query);
            return result[0];
        } catch (error) {
            console.log("Nepavyko sukurti uzduociu lenteles");
            console.log(error);
            return error;
        }
    }

    createTaskList(array) {
        let result = "";
        for (const task of array) {
            const date = new Date(task.date);
            const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            result += 
            `
            <tr>
                <td>${task.id}</td>
                <td>${task.text}</td>
                <td>${task.status}</td>
                <td>${dateString}</td>
                <td>
                    <button>Update</button>
                    <button>Delete</button>
                </td>
            </tr>
            `;
        }
        return result;
    }

    async bodyHTML() {
        const array = await this.getData();
        console.log(array);
        return `
        <h1>TODO list</h1>
        <a href="/new" class="btn">Add new task</a>
        <table>
            <tr>
                <th>Task ID</th>
                <th>Task name</th>
                <th>Task status</th>
                <th>Task date</th>
                <th>Task actions</th>
            </tr>
            ${this.createTaskList(array)}
        </table>
                `;
    }
}

module.exports = PageHome;