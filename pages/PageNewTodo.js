const Page = require('../components/Page.js');

class PageNewTodo extends Page {
    constructor() {
        super();
        this.route = '';
        this.pageName = 'New';
        this.pageTemplateName = 'home';
    }

    async bodyHTML() {
        return `
        <h1>New TODO task</h1>
        <a href="/">Back to home page</a>
                <form>
                <label for="task-name">Task name:</label>
                <input type="text" id="task-name" required/>
        
                <label for="task-status">Task status:</label>
                <select id="task-status">
                    <option value="1">New</option>
                    <option value="2">Pending</option>
                    <option value="3">Done</option>
                </select>
                <button type="submit" class="btn">Submit task</button>
                </form>
                <script src="js/main.js"></script>`;
    }
}

module.exports = PageNewTodo;