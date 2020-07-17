import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { SubjectsService } from './subjects.service';
import { Subject } from '../../../../../common/index';

export interface Tab {
  label: string;
  isClosable: boolean;
  subject?: Subject;
  isMaximized?: boolean;
}

type NewType = boolean;

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, OnDestroy {
  collapsed: NewType = true;
  layoutStyle = 'row wrap';
  layoutGap = '10px';
  subjects: Subject[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<any>;
  tabs: Tab[] = [
    { label: 'Subject', isClosable: false }
  ];
  selectedTab: Tab;


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

  onClose(tab: Tab) {
    this.layoutStyle = 'row wrap';
    this.layoutGap = '10px';
    const previousTabindex = this.tabs.indexOf(tab, 0) + 1;

    if (previousTabindex >= 0) {
      this.selectedTab = { ...this.tabs[previousTabindex] };
      this.tabs.splice(this.tabs.indexOf(tab), 1);
    } else {
      this.selectedTab = this.tabs[0];
    }

    // tslint:disable-next-line: deprecation
    event.stopPropagation();
  }

  onExpand(subject: Subject) {
    // this.subjects.find(x => x === subject).collapsed = false;
    this.tabs.unshift({
      label: subject.name,
      isClosable: true,
      subject
    });

    this.selectedTab = this.tabs[0];
  }

  onSelectTab(tab: Tab) {
    const subject = this.subjects.find(t => t === tab.subject);
    this.selectedTab = tab;
  }

  onMaximize(tab: Tab) {
    tab.isMaximized = true;
  }

  onMinimize(tab: Tab) {
    tab.isMaximized = false;
  }

  onPageClicked() {
    if (this.tabs.length > 1) {
      const tab = this.tabs[this.tabs.length - 1];
      this.selectedTab = tab;
    }
  }
}
