import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { SubjectsService } from './subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  collapsed: boolean = true;
  layoutStyle: string = 'row wrap';
  layoutGap: string = '10px';
  
  constructor(private router: Router, private subjectsService: SubjectsService, private changeDetectorRef: ChangeDetectorRef) { }

  subjects = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<any>;

  ngOnInit() {
    this.subjectsService.getSubjects().subscribe((subjects: any) => {
      this.subjects = subjects;
      this.dataSource = new MatTableDataSource<any>(subjects);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    });
    
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
  onSubjectClicked(subject) {
    this.router.navigateByUrl(`/actual-subject-card/${subject.id}`);
  }

  onCollapse(subject) {
    this.subjects.find(x => x === subject).collapsed = true;
    this.layoutStyle = 'row wrap';
    this.layoutGap = '10px';
    event.stopPropagation();
  }

  onExpand(subject) {
    this.subjects.find(x => x === subject).collapsed = false;
  }

}
