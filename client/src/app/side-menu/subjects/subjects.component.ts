import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { SubjectsService } from './subjects.service';
import { Subject } from '../../../../../common/index';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, OnDestroy {
  collapsed: boolean = true;
  layoutStyle: string = 'row wrap';
  layoutGap: string = '10px';
  subjects: Subject[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<any>;
  
  constructor(private router: Router, private subjectsService: SubjectsService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.subjectsService.getSubjects().subscribe((subjects: Subject[]) => {
      this.subjects = subjects;
      this.dataSource = new MatTableDataSource<any>(subjects);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    });
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
  onSubjectClicked(subject: Subject) {
    this.router.navigateByUrl(`/actual-subject-card/${subject.id}`);
  }

  onCollapse(subject: Subject) {
    this.subjects.find(x => x === subject).collapsed = true;
    this.layoutStyle = 'row wrap';
    this.layoutGap = '10px';
    event.stopPropagation();
  }

  onExpand(subject) {
    this.subjects.find(x => x === subject).collapsed = false;
  }
}
