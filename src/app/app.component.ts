import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2
} from '@angular/core';
enum AngularResizeElementDirection {
  TOP = 'top',
  TOP_RIGHT = 'top-right',
  RIGHT = 'right',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom-left',
  LEFT = 'left',
  TOP_LEFT = 'top-left'
}

interface AngularResizeElementEvent {
  currentWidthValue: number;
  currentHeightValue: number;
  originalWidthValue: number;
  originalHeightValue: number;
  differenceWidthValue: number;
  differenceHeightValue: number;

  currentTopValue: number;
  currentLeftValue: number;
  originalTopValue: number;
  originalLeftValue: number;
  differenceTopValue: number;
  differenceLeftValue: number;

  originalEvent: MouseEvent;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public readonly AngularResizeElementDirection = AngularResizeElementDirection;
  public data: any = {};
  public data2: any = {};
  public c: string = 'appliedResize';
  title = 'test-resize';

  @ViewChild('container', { read: ElementRef }) containerElement: ElementRef;
  @ViewChild('container2', { read: ElementRef }) containerElement2: ElementRef;

  constructor(private renderer: Renderer2) {}
  public onResize(evt: AngularResizeElementEvent): void {
    this.data.width = evt.currentWidthValue;
    this.data.height = evt.currentHeightValue;
  }
  ngAfterViewInit() {
    //set the inner container and hte
    this.renderer.setStyle(
      this.containerElement.nativeElement,
      'width',
      this.containerElement2.nativeElement.offsetWidth + 'px'
    );
    this.renderer.setStyle(
      this.containerElement.nativeElement,
      'height',
      this.containerElement2.nativeElement.offsetHeight + 'px'
    );
  }
  public onResizePreview(evt: AngularResizeElementEvent): void {
    this.data2.width = evt.currentWidthValue;
    this.data2.height = evt.currentHeightValue;
  }
}
