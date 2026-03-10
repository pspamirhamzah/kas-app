const today=new Date();

let bulan=today.getMonth()+1;
let tahun=today.getFullYear();

document.getElementById("bulan").value=bulan;
document.getElementById("tahun").value=tahun;

load();

function load(){

bulan=document.getElementById("bulan").value;
tahun=document.getElementById("tahun").value;

fetch(API_URL+`?action=dashboard&bulan=${bulan}&tahun=${tahun}`)

.then(r=>r.json())

.then(d=>{

document.getElementById("anggota").innerText=d.totalAnggota;
document.getElementById("bayar").innerText=d.sudahBayar;
document.getElementById("belum").innerText=d.belumBayar;

document.getElementById("iuran").innerText=d.iuran;
document.getElementById("pengeluaran").innerText=d.pengeluaran;
document.getElementById("saldo").innerText=d.saldo;

new Chart(document.getElementById("chart"),{

type:"pie",

data:{

labels:["Iuran","Pengeluaran"],

datasets:[{

data:[d.iuran,d.pengeluaran]

}]

}

});

});

fetch(API_URL+`?action=transaksi&bulan=${bulan}&tahun=${tahun}`)

.then(r=>r.json())

.then(data=>{

let html="";

data.forEach(d=>{

html+=`

<tr>

<td>${d.tanggal}</td>
<td>${d.jenis}</td>
<td>${d.keterangan}</td>
<td>${d.jumlah}</td>

</tr>

`;

});

document.getElementById("table").innerHTML=html;

});

}
