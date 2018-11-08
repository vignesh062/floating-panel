import { Component, OnInit } from "@angular/core";

declare var jquery: any;
declare var $:any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  

  ngOnInit() {

        $(document).ready(function() {
          $('#mydiv').draggable({
            opacity: 0.7,
            containment : "document",
          });
        })
        $('#size').click(function() {
          $('#content').toggle('up');
      });

      $('#minimize').click(function() {
        let windowSize = $(window).width();
        let finalSize = windowSize - 450;
        $('#content').hide();
        $('#mydiv').animate({
          position: "absolute",
          top: "10px",
          left: `${finalSize}px`
        })
        // $('#mydiv').animate({
        //   position: "absolute",
        //   top: "0px",
        //   left: "0px"
        //   // left: "1395px"
        // })
    });
      }
      
}
