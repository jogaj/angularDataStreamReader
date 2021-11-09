import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  /**
   * Text of post
   */
  @Input()
  text = '';

  /**
   * Image url of post
   */
  @Input()
  imgUrl = '';

  /**
   * Firstname of post owner
   */
  @Input()
  firstName = '';

  /**
   * Lastname of post owner
   */
  @Input()
  lastName = '';

  /**
   * Date of post publication
   */
  @Input()
  publishDate: any;

  constructor() { }

  ngOnInit(): void {
  }

}
