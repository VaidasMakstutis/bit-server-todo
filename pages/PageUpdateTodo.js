const Page = require('../components/Page.js');

class PageUpdateTodo extends Page {
    constructor() {
        super();
        this.route = '';
        this.pageName = 'New';
        this.pageTemplateName = 'home';
    }

    bodyHTML() {
        return `<h1>Update TODO</h1>
                <form>
                <label for="task-name">Task name</label>
                <input type="text" id="task-name" />
        
                <label for="task-status">Task status</label>
                <select id="task-status">
                    <option value="1">New</option>
                    <option value="2">Pending</option>
                    <option value="3">Done</option>
                </select>
                <button type="submit">Submit task</button>
            </form>
        `;
    }
}

module.exports = PageUpdateTodo;