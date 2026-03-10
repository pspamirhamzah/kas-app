function iuran(){

const t=new Date(document.getElementById("tanggal").value);

fetch(API_URL,{

method:"POST",

body:JSON.stringify({

action:"iuran",
tanggal:document.getElementById("tanggal").value,
nama:document.getElementById("nama").value,
bulan:t.getMonth()+1,
tahun:t.getFullYear(),
jumlah:document.getElementById("jumlah").value

})

})

.then(r=>r.json())

.then(d=>{

alert("Iuran tersimpan");

});

}

function pengeluaran(){

fetch(API_URL,{

method:"POST",

body:JSON.stringify({

action:"pengeluaran",
tanggal:document.getElementById("tgl2").value,
keterangan:document.getElementById("ket").value,
jumlah:document.getElementById("jml2").value

})

})

.then(r=>r.json())

.then(d=>{

alert("Pengeluaran tersimpan");

});

}
