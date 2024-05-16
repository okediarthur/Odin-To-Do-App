import { getState } from "./state";
import { task, project } from './state-controller';
import { renderProjects } from './render-project';
import { renderMain, renderTasks, renderHead } from './render-main';
import dialogs from "./render-dialogs"; 

const app = {
    intializePage(){
        renderProjects(getState().projects);
        renderMain(project.getSelected());
    },
    selectedProject(projectIndex){
        if(projectIndex === project.getSelectedIndex()) return;
        project.setSelected(projectIndex);
        renderProjects(getState().projects);
        renderMain(project.get(projectIndex));
    },
    setTaskComplete(taskIndex){
        task.switchCompleted(project.getSelectedIndex(), taskIndex);
        renderTasks(project.getSelected().tasks);
    },
    showEditProject(projectIndex){
        dialogs.renderProjectEdit(projectIndex, project.get(projectIndex));
    },
    renameProject(projectIndex, newName){
        project.get(projectIndex).name = newName;
        renderProjects(getState().projects)
        if(projectIndex === project.getSelectedIndex()){
            renderHead(newName);
        }
    },
    showDeleteProject(projectIndex){
        dialogs.renderProjectDelete(projectIndex, project.get(projectIndex));
    },
    deleteProject(projectIndex){
        project.remove(projectIndex);
        renderProjects(getState().projects)
        renderMain(project.getSelected());
    },
    showAddProject(){
        dialogs.renderProjectAdd();
    },
    addProject(projectName){
        project.add(projectName);
        renderProjects(getState().projects);
    },
    showAddTask(){
        dialogs.renderTaskAdd(getState().projects);
    },
    addTask(projectIndex, ...taskProperties){
        task.add(projectIndex, ...taskProperties);

        if(projectIndex === project.getSelectedIndex()){
            renderTasks(project.get(projectIndex).tasks);
        }
    },
    showEditTask(taskIndex){
        
    }
}