document.addEventListener("click", function(){
   const resume=document.querySelector("#toPdf");
   console.log(resume);
   var opt = {
    marginBottom:      2,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 1 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'p' }
  };
   html2pdf().from(resume).set(opt).save("file.pdf");
  });