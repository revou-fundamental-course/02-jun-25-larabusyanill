// auto slide show function
var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var imgList = document.getElementsByClassName("autoslideshow");

    for (i = 0; i < imgList.length; i++) {
      imgList[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > imgList.length) { slideIndex = 1; }

    imgList[slideIndex - 1].style.display = "block";
  }
  setInterval(showSlides, 2000);

// Form validation
function validateForm() {
  var nama = document.forms["message-form"]["nama"].value;
  var tanggal_lahir = document.forms["message-form"]["tanggal_lahir"].value;
  var jenis_kelamin = document.forms["message-form"]["jenis_kelamin"].value;
  var pesan = document.forms["message-form"]["pesan"].value;

  if (nama == "" || tanggal_lahir == "" || jenis_kelamin == "" || pesan == "") {
    alert("Kolom Harus Diisi");
    return false;
  }

  document.getElementById("getNama").value = nama;
  document.getElementById("getTanggalLahir").value = tanggal_lahir;
  document.getElementById("getJenisKelamin").value = jenis_kelamin;
  document.getElementById("getPesan").value = pesan;
  document.querySelector('.form-output').style.display = "block";


   return false;
}
