import { Component, OnInit } from '@angular/core';
import { Project, Milestone, Note } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  private _project : Project;

  constructor(
    private projectService : ProjectService
  ) {
    this._project = projectService.getProjectModel();
  }

  ngOnInit() {
  }

}
