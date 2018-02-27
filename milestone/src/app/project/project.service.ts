import { Injectable } from '@angular/core';
import { Project, Milestone, Note } from './project.model';

@Injectable()
export class ProjectService {

  private _project: Project;
  private defaultForTesting : Project = {
    id : 1,
    name : 'Premier PM Website',
    status : 'Open',
    statusDate : new Date(),
    created : new Date(),
    createdBy : 'TMorgan',
    modified : new Date(),
    modifiedBy : 'TMorgan',
    dueDate : new Date(),
    owner : 'TMorgan',
    customer : 'Premier PM',
    category : 'Full Website',
    importance : 5,
    history : [{
      id: 2,
      name: 'Creation',
      created: new Date(),
      modified: new Date(),
      createdBy: 'TMorgan',
      modifiedBy: 'TMorgan',
      note: 'Created empty project, using starter theme.',
    }],
    milestones :  [{
      id: 3,
      title: 'Design Call',
      status: 'Open',
      statusDate: new Date(),
      duration: 7,
      originalDueDate: new Date(),
      currentDueDate: new Date(),
      history: []
    },{
      id: 4,
      title: 'Initial Design',
      status: 'Open',
      statusDate: new Date(),
      duration: 7,
      originalDueDate: new Date(),
      currentDueDate: new Date(),
      history: []
    },{
      id: 5,
      title: 'Design Approved',
      status: 'Open',
      statusDate: new Date(),
      duration: 7,
      originalDueDate: new Date(),
      currentDueDate: new Date(),
      history: []
    }]
  }

  constructor() {
    this._project = this.defaultForTesting;
    }

    public getProjectModel(){
      return this._project;
    }



}
