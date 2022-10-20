// MDN Doc (https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications)

const fileuploads = document.querySelectorAll(".cbp-form__file");

const fileUtil = {
  createUpload: (key, name, progressValue, progressMax, files) => {
    const fileProgress = document.createElement("div");
    const fileName = document.createElement("span");
    const cancelIcon = document.createElement("i");
    const cancelBtn = document.createElement("button");
    const progressBar = document.createElement("progress");

    fileProgress.className = "cbp-form__upload";
    fileProgress.id = `${key}_${name}`;

    fileName.innerText = name;
    cancelIcon.className = "fa fa-times";
    cancelBtn.appendChild(cancelIcon);

    cancelBtn.onclick = (e) => {
      fileUtil.cancelUpload(key, files)
    };

    progressBar.value = progressValue;
    progressBar.max = progressMax;

    fileProgress.appendChild(fileName);
    fileProgress.appendChild(cancelBtn);
    fileProgress.appendChild(progressBar);

    return fileProgress;
  },
  createErrorUpload: (key, name) => {
    const errorUpload = document.createElement("div");
    const fileContainer = document.createElement("div");
    const errorFile = document.createElement("span");
    const cancelBtn = document.createElement("button");
    const divider = document.createElement("hr");
    const errorMessage = document.createElement("span");
    const errorIcon = document.createElement("i");
    const cancelIcon = document.createElement("i");

    errorUpload.id = `${key}_${name}`;
    errorFile.innerText = name;
    cancelIcon.className = 'fa fa-times';
    cancelBtn.appendChild = cancelIcon

    errorIcon.className = "fas fa-exclamation-triangle";
    errorMessage.appendChild(cancelIcon);
    errorMessage.innerText = 'File size exceeds the limit.'

    fileContainer.appendChild(errorFile);
    fileContainer.appendChild(cancelBtn);

    errorUpload.appendChild(fileContainer);
    errorUpload.appendChild(divider);
    errorUpload.appendChild(errorMessage)

    return errorUpload;
  },
  cancelUpload: (key, files, input) => {
    const list = new DataTransfer();
    const fileArray = Object.entries(files)
    const filteredList = fileArray.filter(([listkey, value]) => listkey != key);
    const filteredFiles = filteredList.map(arr => arr[1]);
    
    filteredFiles.forEach(file => list.items.add(file));

    input.files = list.items;
  },
};

class FileUploader {
  constructor(element) {
    this.formWrapper = element.closest('.cbp-form-wrapper');
    this.element = element;
    this.input = element.querySelector("input[type=file]");

    this.handleInput(this.input, this.reader);
  }

  handleEvent(event, key, value, files) {
    if (event.type === "loadstart") {
      const upload = fileUtil.createUpload(
        key,
        value.name,
        event.loaded,
        event.total,
        files
      );
      this.element.insertAdjacentElement("afterend", upload);
    }

    if (event.type === "progress") {
      // update progress bar value
      const upload = document.getElementById(`${key}_${value.name}`);
      const progress = upload.querySelector("progress");

      progress.setAttribute("value", event.loaded);
    }

    if (event.type === "error") {
      const upload = fileUtil.createErrorUpload(key, value.name);

      this.element.insertAdjacentElement("afterend", upload);
    }
  }

  handleReader(files) {
    for (const [key, value] of Object.entries(files)) {
      const reader = new FileReader();

      reader.addEventListener("loadstart", (e) => this.handleEvent(e, key, value, files));
      reader.addEventListener("load", (e) => this.handleEvent(e, key, value, files));
      reader.addEventListener("loadend", (e) => this.handleEvent(e, key, value, files));
      reader.addEventListener("progress", (e) => this.handleEvent(e, key, value, files));
      reader.addEventListener("error", (e) => this.handleEvent(e, key, value, files));
      reader.addEventListener("abort", this.handleEvent);

      reader.readAsDataURL(value);
    }
  }

  handleInput(input, reader) {
    input.addEventListener("change", (e) => {
      this.handleReader(e.target.files);
    });
  }
}

fileuploads.forEach((upload) => {
  new FileUploader(upload);
});
