import registerEvent from "./events";
import app from "./app-logic";

class CancelDialog {
    static canHandle(event){
        return event.target.matches('dailog button.cancel, dialog button.exit');
    }

    constructor(event){
        this.openedDialog = document.querySelector('dialog[open]');
    }

    handleClick(){
        this.openedDialog.close();
    }
}

class ShowEditProject {
    static canHandle(event){
        return event.target.matches('.projects button.edit');
    }

    constructor(event) {
        this.projectIndex = Number(event.target.parentElement.dataset.index);
    }

    handleClick(){
        app.ShowEditProject(this.projectIndex)
    }
}

class ShowDeleteProject {
    static canHandle(event) {
        return event.target.matches('.projects button.delete');
    }

    constructor(event){
        thisprojectIndex = Number(event.target.parentElement.dataset.index);
    }

    handleClick(){
        app.ShowDeleteProject(this.projectIndex)
    }
}

class ShowAddProject{
    static canHandle(event){
        return event.target.matches('button.add-projects');
    }

    handleClick(){
        app.ShowAddProject();
    }
}

class ShowAddTask{
    static canHandle(event){
        return event.target.matches('button.add-todos');
    }

    handleClick(){
        app.ShowAddTask();
    }
}

class ShowEditTask{
    static canHandle(event){
        return event.target.matches('.projects button.todo-edit');
    }

    constructor(event){
        this.taskIndex = Number(event.target.parentElement.dataset.index);
    }

    handleClick(){
        app.ShowEditTask(this.taskIndex);
    }

}
class ShowDeleteTask{
    static canHandle(event){
        return event.target.matches('button.todo-delete');
    }

    constructor(event){
        this.taskIndex = Number(event.target.parentElement.dataset.index);
    }

    handleClick(){
        app.ShowDeleteTask(this.taskIndex);
    }
}

class ShowTaskDetails {
    static canHandle(event){
        return event.target.matches('button.todo-expand');
    }

    constructor(event){
        this.taskIndex = Number(event.target.parentElement.dataset.index);
    }

    handleClick(){
        app.showTaskDetails(this.taskIndex);
    }
}

registerEvent(showEditProject);
registerEvent(CancelDialog);
registerEvent(ShowDeleteProject);
registerEvent(ShowAddProject);
registerEvent(ShowAddTask);
registerEvent(ShowEditTask);
registerEvent(ShowDeleteTask);
registerEvent(ShowTaskDetails);


