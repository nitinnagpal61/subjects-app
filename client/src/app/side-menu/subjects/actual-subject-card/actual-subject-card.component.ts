import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-actual-subject-card',
  templateUrl: './actual-subject-card.component.html',
  styleUrls: ['./actual-subject-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ActualSubjectCardComponent implements OnInit {
  subject: any;
  @Input() id: number;

  constructor(private subjectsService: SubjectsService) {}

  ngOnInit(): void {
    this.subjectsService.getSubjectDetails(this.id).subscribe(subjectDetail => {
      this.subject = subjectDetail;
    });
  }
}
