var showPreview = (event) => {
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      console.log(src);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
      var image = document.querySelector("img");
      image.style.display = "block";
    }
  }