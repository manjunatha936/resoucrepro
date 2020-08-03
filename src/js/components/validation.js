/*eslint-disable*/
import $ from "jquery";
import validate from "jquery-validation";

class Validation {
  constructor() {
    if (document.querySelector(".contact-form")) {
      this.contactForm();
    }
    if (document.querySelector(".contact-form.helpUs")) {
      this.helpUsvalidatorForm();
    }
    if (document.querySelector(".contact-form.help-us-msg")) {
      this.helpUsMsgvalidatorForm();
    }
    if (document.querySelector(".contact-form.join-our-team")) {
      this.joinOurTeamvalidatorForm();
    }
  }

  contactForm() {
    var contactvalidator;

    contactvalidator = $("#contact-form").validate({
      ignore: "",
      rules: {
        fname: {
          required: true,
        },
        designation: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        mobile: {
          minlength: "Please provide a valid number",
          maxlength: "Please provide a valid number",
        },
      },
      errorPlacement: function (error, element) {
        error.prependTo(element.parent());
      },
    });
  }

  helpUsvalidatorForm() {
    var helpUsvalidator;

    helpUsvalidator = $("#helpUs-form").validate({
      ignore: "",
      rules: {
        info: {
          required: true,
        },
        infoemailphone: {
          required: true,
          email: true,
        },
        email: {
          required: true,
          email: true,
          number: true,
        },
        note: {
          required: true,
        },
      },
      errorPlacement: function (error, element) {
        error.prependTo(element.parent());
      },
    });
  }

  helpUsMsgvalidatorForm() {
    var helpUsMsgvalidator;

    helpUsMsgvalidator = $("#helpUsMsg-form").validate({
      ignore: "",
      rules: {
        firstName: {
          required: true,
        },
        lastName: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        mobile: {
          minlength: "Please provide a valid number",
          maxlength: "Please provide a valid number",
        },
      },
      errorPlacement: function (error, element) {
        error.prependTo(element.parent());
      },
    });
  }

  joinOurTeamvalidatorForm() {
    var joinOurTeamvalidator;

    joinOurTeamvalidator = $("#joinOurTeam-form").validate({
      ignore: "",
      rules: {
        firstName: {
          required: true,
        },
        lastName: {
          required: true,
        },
        phoneNumber: {
          required: true,
        },
        info: {
          required: true,
        },
        jobProfile: {
          required: true,
        },
        coverExperience: {
          required: true,
        },
        resume: {
          required: true,
        },
      },
      messages: {
        mobile: {
          minlength: "Please provide a valid number",
          maxlength: "Please provide a valid number",
        },
      },
      errorPlacement: function (error, element) {
        error.prependTo(element.parent());
      },
    });
  }
}

export default Validation;
