import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-modal',
  templateUrl: './reusable-modal.component.html',
  styleUrls: ['./reusable-modal.component.scss']
})
export class ReusableModalComponent {
  @Input() modalId: string = '';
  @Input() modalTitle: string = '';
  @Input() primaryButtonLabel: string = '';
  @Input() secondaryButtonLabel: string = '';
  @Input() primaryButtonOnClick: () => void = () => {};
  @Input() secondaryButtonOnClick: () => void = () => {};

}
