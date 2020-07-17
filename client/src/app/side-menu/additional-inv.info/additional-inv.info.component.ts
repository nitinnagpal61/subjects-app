import { AdditionalInvInfoService } from './additional-inv.info.service';
import { AdditionalInfo } from '../../../../../common/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-inv-info',
  templateUrl: './additional-inv.info.component.html',
  styleUrls: ['./additional-inv.info.component.scss']
})
export class AdditionalInvInfoComponent implements OnInit {
  showInvestigationLink = true;
  additionalInfo: AdditionalInfo;
  constructor(private additionalInfoService: AdditionalInvInfoService) {}
  ngOnInit(): void {
    this.additionalInfoService
      .getAdditionalInfo()
      .subscribe((additionalInfos: AdditionalInfo[]) => {
        this.additionalInfo = additionalInfos[0];
      });
  }
}
