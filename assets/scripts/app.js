class Tooltip {

}

class ProjectItem {
    constructor(id, updateProjcetListsFunction) {
        this.id = id;
        this.updateProjcetListsFunction = updateProjcetListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton(){

    }

    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchButton = projectItemElement.querySelector("button:last-of-type");
        switchButton.addEventListener("click", this.updateProjcetListsFunction);
    }

}

class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        // EXAMPLE #active-project li
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        // for (let i = 0; i < this.projects.length; i++)
        for (const projectItem of projectItems) {
            console.log(type);
            console.log(projectItem);
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this)));

        }
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {
        console.log(this);
    }

    switchProject(projectId) {
        this.project = this.projects.find((i) => i.id === projectId);
        this.projects.filter((i) => i.id !== projectId);
        this.addProject();
        // const projectIndex = this.projects.findIndex(i => i.id === this.projectId);
        // this.projects.splice();
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList("active");
        const finishedProjectList = new ProjectList("finished");
        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
    }
}

App.init();

// new ProjectList