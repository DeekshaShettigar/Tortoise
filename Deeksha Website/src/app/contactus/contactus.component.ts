import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(".feedback_form_area").hide();

      // Hide displayed paragraphs
      $("#OpenForm").click(function(){
          $(".feedback_form_area").toggle();
      });
      
      // Show hidden paragraphs
      // $("#OpenForm").click(function(){
      //     $("form").show();
      // });
  });
    // $(document).ready(function(){
    //   $("#OpenForm").click(function(){
    //     $(".feedback_form_area").animate({
    //       width:"hide"
    //     });
    //   });
    // });
  }


}
