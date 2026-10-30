import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  showEdit(event) {
    event.preventDefault();

    if (this.setCommentOnly(false)) window.showAndScrollTo("update", "issue_notes");
  }

  showComment(event) {
    event.preventDefault();

    this.setCommentOnly(true);
  }

  setCommentOnly(commentOnly) {
    const updateForm = document.getElementById("update");
    if (!updateForm) return null;

    // Without the notes field there is nothing to show in the comment-only form, so toggle the whole form instead.
    // The field is rendered for the saved issue, as the comment-only form never submits the edited project, tracker or status
    const notes = updateForm.querySelector("#issue_notes");
    if (!notes) {
      updateForm.hidden = commentOnly;
      return updateForm;
    }

    updateForm.hidden = false;
    updateForm.classList.toggle("comment-only", commentOnly);

    // Show the placeholder only in the comment-only form, as the expanded form has never had one
    if (commentOnly) {
      notes.placeholder = notes.dataset.issueUpdateFormPlaceholder;
    } else {
      notes.removeAttribute("placeholder");
    }

    updateForm.querySelectorAll("[data-issue-update-form-section]").forEach((section) => {
      section.hidden = commentOnly;
      // Keep hidden fields out of the submitted form while only the comment field is shown
      if (section instanceof HTMLFieldSetElement) section.disabled = commentOnly;
    });

    return updateForm;
  }
}
