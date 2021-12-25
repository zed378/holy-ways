import cssModules from "../assets/css/RaiseForm.module.css";

function RaiseForm() {
  return (
    <div className={cssModules.formContainer}>
      <div className={cssModules.formWrapper}>
        <h1>Make Raise Fund</h1>
        <form action="">
          <input type="text" name="title" placeholder="Title" />
          <label htmlFor="thumbnail">
            <span>Attach Thumbnail</span>
          </label>
          <input type="file" id="thumbnail" name="thumbnail" hidden />
          <input type="number" name="goal" placeholder="Goals Donation" />
          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
          <div className={cssModules.submitBtn}>
            <button type="submit">Public Fundraising</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RaiseForm;
