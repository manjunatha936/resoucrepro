/*eslint-disable*/
import $ from "jquery";

class semanticUi {
  constructor() {
    if (document.querySelector(".contact-form")) {
      this.init();
    }
    if (document.querySelector(".job-filter")) {
      this.init();
    }
  }

  init() {
    // $(document).ready(function () {
    $(".ui.dropdown").dropdown();
    // });
    $("input:text").click(function () {
      $(this).parent().find("input:file").click();
    });

    $("input:file", ".ui.action.input").on("change", function (e) {
      var name = e.target.files[0].name;
      $("input:text", $(e.target).parent()).val(name);
    });
  }
}

export default semanticUi;
