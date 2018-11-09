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

        this.initFloatingPanel()
      }
      

      initFloatingPanel(){
        $(document).ready(function() {
          $('#content').hide();
          $('#mydiv').draggable({
            handle: '#drag',
            opacity: 0.7,
            containment: "document"
          })
        })
        $('#size').click(function() {
          let windowHeightSize = $(window).height();
          let offsetValue = $('#mydiv').offset();
          let finalHeightSize = windowHeightSize - 418 ;
          console.log(windowHeightSize);
          $('#content').toggle('up');
          $('#mydiv').animate({
            position: "absolute",
            top: `${finalHeightSize}px`
          })
          console.log(offsetValue);
        });

      $('#minimize').click(function() {
        let windowSize = $(window).width();
        let finalSize = windowSize - 267;
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
