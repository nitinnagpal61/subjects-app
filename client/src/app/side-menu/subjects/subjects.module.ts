import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActualSubjectCardComponent } from './actual-subject-card/actual-subject-card.component';

@NgModule({
  imports: [
    CommonModule,
    [
      RouterModule.forChild([
        {
          path: 'actual-subject-card/:id',
          component: ActualSubjectCardComponent
        }
      ])
    ]
  ],
  exports: [RouterModule]
  // declarations: [WindowComponent]
})
export class SubjectsModule {}
