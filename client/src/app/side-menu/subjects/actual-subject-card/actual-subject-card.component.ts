import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-actual-subject-card',
  templateUrl: './actual-subject-card.component.html',
  styleUrls: ['./actual-subject-card.component.scss']
})
export class ActualSubjectCardComponent implements OnInit {
  subject: any;
  @Input() id: number;
  // @Output() collapse = new EventEmitter();

  constructor(private router: Router, private subjectsService: SubjectsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subjectsService.getSubjectDetails(this.id).subscribe(subjectDetail => {
        this.subject = subjectDetail;
    });
  }

  onCollapse() {
    // this.collapse.emit();
  }
}
