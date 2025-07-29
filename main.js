$(document).ready(function () {
  $(".btn").on("click", function addFunction() {
    const subject = $("#subject-name").val().trim();
    const passing_marks = parseInt($("#passing-marks").val().trim());

    if (!subject || !passing_marks) {
      alert("Enter Valid Values");
      return;
    }

    const $row = $("<tr></tr>");
    const $subject_tData = $("<td></td>").text(subject);
    const $passing_tData = $("<td></td>").text(passing_marks);

    const $obtained_tData = $("<td></td>");
    const $input = $("<input>")
      .attr("type", "number")
      .attr("placeholder", "Enter Marks");

    const $status_tData = $("<td></td>");
    const $status_span = $("<span></span>");
    $status_tData.append($status_span);

    //delete btn
    const $delete_tData = $("<td></td>");
    const $delete_btn = $("<span>Delete</span>").addClass("delete");

    $delete_btn.on("click", function () {
      $row.remove();
      total_footer();
    });

    $input.on("input", function () {
      update_status($(this), passing_marks, $row, $status_span);
      total_footer();
    });

    $obtained_tData.append($input);
    $delete_tData.append($delete_btn);

    $row.append($subject_tData, $passing_tData, $obtained_tData, $status_tData, $delete_tData);
    $("#tbl-body").append($row);

    //clearing inp fields
    $("#subject-name").val("");
    $("#passing-marks").val("");
    total_footer();

    // update pass/fail status fn
    function update_status($input, passing_marks, $row, $status_span) {
      const value = parseInt($input.val());

      if (!isNaN(value) && value >= passing_marks) {
        $status_span.text("Pass").attr("class", "pass");
        $row.attr("class", "success");
      } else {
        $status_span.text("Fail").attr("class", "fail");
        $row.attr("class", "failed");
      }
    }

    // update footer fn
    function total_footer() {
      let total_subject = 0;
      let total_passing_marks = 0;
      let obtained_marks = 0;
      let total_status = true;

      $("#tbl-body tr").each(function () {
        const passingVal = parseInt($(this).find("td:nth-child(2)").text());
        const obtainedVal = parseInt($(this).find("input").val());
        
        total_subject++;
        total_passing_marks += isNaN(passingVal) ? 0 : passingVal;
        obtained_marks += isNaN(obtainedVal) ? 0 : obtainedVal;
      });

      $("#total-subject").text(total_subject);
      $("#total-passing").text(total_passing_marks);
      $("#total-obtained").text(obtained_marks);
    }
  });
});
